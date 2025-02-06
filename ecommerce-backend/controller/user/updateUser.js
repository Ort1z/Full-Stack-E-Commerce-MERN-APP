const userModel = require("../../models/userModel")

/**
 * Updates a user's information based on the provided request body.
 * 
 * @async
 * @function updateUser
 * @param {Object} req - The request object.
 * @param {string} req.userId - The ID of the session user.
 * @param {Object} req.body - The body of the request containing user details.
 * @param {string} [req.body.userId] - The ID of the user to update.
 * @param {string} [req.body.email] - The new email of the user.
 * @param {string} [req.body.name] - The new name of the user.
 * @param {string} [req.body.role] - The new role of the user.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 * @throws {Error} - Throws an error if the update operation fails.
 * 
 * @example
 * // Example usage:
 * const req = {
 *   userId: 'sessionUserId',
 *   body: {
 *     userId: 'userIdToUpdate',
 *     email: 'newemail@example.com',
 *     name: 'New Name',
 *     role: 'newRole'
 *   }
 * };
 * const res = {
 *   json: (response) => console.log(response),
 *   status: (code) => ({
 *     json: (response) => console.log(`Status: ${code}`, response)
 *   })
 * };
 * 
 * updateUser(req, res);
 * 
 * @version 1.0.0
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * @commit {Implemented user authentication using JWT}
 * @branch {feature/authentication}
 */
async function updateUser(req,res){
    try{
        const sessionUser = req.userId

        const { userId , email, name, role} = req.body

        const payload = {
            ...( email && { email : email}),
            ...( name && { name : name}),
            ...( role && { role : role}),
        }

        const user = await userModel.findById(sessionUser)

        console.log("user.role",user.role)



        const updateUser = await userModel.findByIdAndUpdate(userId,payload)

        
        res.json({
            data : updateUser,
            message : "User Updated",
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


module.exports = updateUser