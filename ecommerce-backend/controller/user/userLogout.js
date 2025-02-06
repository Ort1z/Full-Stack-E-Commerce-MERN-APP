/**
 * Handles user logout by clearing the authentication token cookie and sending a response.
 * 
 * @async
 * @function userLogout
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to send data back to the client.
 * @returns {void}
 * 
 * @description
 * This function clears the "token" cookie from the client's browser, effectively logging the user out.
 * It then sends a JSON response indicating the success or failure of the logout operation.
 * 
 * @example
 * // Example usage:
 * userLogout(req, res);
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @commit "Implemented user logout functionality"
 * @branch feature/user-logout
 * @pullRequest #42
 */
async function userLogout(req,res){
    try{
        res.clearCookie("token")

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}


module.exports = userLogout