const userModel = require("../../models/userModel")

/**
 * Controller to handle fetching user details.
 * 
 * @async
 * @function userDetailsController
 * @param {Object} req - Express request object.
 * @param {Object} req.userId - ID of the user to fetch details for.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with user details or an error message.
 * 
 * @example
 * // Example usage in an Express route
 * router.get('/user/details', userDetailsController);
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @todo Add more detailed error handling and logging.
 */
async function userDetailsController(req,res){
    try{
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController