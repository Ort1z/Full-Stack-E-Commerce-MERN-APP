const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

/**
 * Controller for user sign-in.
 * 
 * @async
 * @function userSignInController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user credentials.
 * @param {string} req.body.email - User's email address.
 * @param {string} req.body.password - User's password.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a response with a JWT token if authentication is successful.
 * 
 * @throws {Error} If email or password is not provided.
 * @throws {Error} If user is not found.
 * @throws {Error} If password is incorrect.
 * 
 * @example
 * // Example request body
 * // {
 * //   "email": "user@example.com",
 * //   "password": "userpassword"
 * // }
 * 
 * @description
 * This function handles user sign-in by validating the provided email and password.
 * If the credentials are correct, it generates a JWT token and sets it as an HTTP-only cookie.
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @commit "Implemented user authentication using JWT"
 * @branch feature/authentication
 * @pullrequest "Code review for user authentication feature"
 */
async function userSignInController(req,res){
    try{
        const { email , password} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
             throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})

       if(!user){
            throw new Error("User not found")
       }

       const checkPassword = await bcrypt.compare(password,user.password)

       console.log("checkPassoword",checkPassword)

       if(checkPassword){
        const tokenData = {
            _id : user._id,
            email : user.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

        const tokenOption = {
            httpOnly : true,
            secure : true
        }

        res.cookie("token",token,tokenOption).status(200).json({
            message : "Login successfully",
            data : token,
            success : true,
            error : false
        })

       }else{
         throw new Error("Please check Password")
       }







    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }

}

module.exports = userSignInController