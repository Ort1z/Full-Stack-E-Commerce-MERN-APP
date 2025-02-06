const userModel = require("../../models/userModel")

/**
 * Fetches all users from the database and sends them in the response.
 * 
 * @async
 * @function allUsers
 * @param {Object} req - The request object.
 * @param {Object} req.userId - The ID of the user making the request.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} Sends a JSON response containing all users or an error message.
 * 
 * @example
 * // Example usage:
 * // Assuming you have set up your routes and middleware correctly
 * app.get('/api/users', allUsers);
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @description
 * 3. Version Control GitHub Repository: Ensure your repository is public and well-organized.
 * 
 * Commits: Commit frequently with descriptive messages (e.g., “Implemented user authentication using JWT”).
 * 
 * Branches and Pull Requests: Use branches for features (e.g., feature/authentication) and create pull requests for code reviews.
 */
async function allUsers(req,res){
    try{
        console.log("userid all Users",req.userId)

        const allUsers = await userModel.find()
        
        res.json({
            message : "All User ",
            data : allUsers,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers