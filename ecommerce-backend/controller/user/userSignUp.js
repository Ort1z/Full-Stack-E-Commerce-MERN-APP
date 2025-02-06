const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');


/**
 * Controller for user sign-up.
 * 
 * @async
 * @function userSignUpController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.email - The user's email.
 * @param {string} req.body.password - The user's password.
 * @param {string} req.body.name - The user's name.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 * 
 * @throws {Error} If the user already exists.
 * @throws {Error} If email is not provided.
 * @throws {Error} If password is not provided.
 * @throws {Error} If name is not provided.
 * @throws {Error} If password hashing fails.
 * 
 * @description
 * This function handles the user sign-up process. It checks if the user already exists,
 * validates the input, hashes the password, and saves the new user to the database.
 * 
 * @example
 * // Example usage:
 * const express = require('express');
 * const router = express.Router();
 * const { userSignUpController } = require('./controller/user/userSignUp');
 * 
 * router.post('/signup', userSignUpController);
 * 
 * module.exports = router;
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @commit {Implemented user authentication using JWT}
 * @branch {feature/authentication}
 * @pullRequest {Create pull requests for code reviews}
 */
async function userSignUpController(req,res){
    try{
        const { email, password, name} = req.body

        const user = await userModel.findOne({email})

        console.log("user",user)

        if(user){
            throw new Error("Already user exits.")
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpController