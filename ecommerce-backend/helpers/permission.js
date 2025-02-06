const userModel = require("../models/userModel")

/**
 * Checks if the user has permission to upload a product.
 *
 * @async
 * @function uploadProductPermission
 * @param {string} userId - The ID of the user to check permissions for.
 * @returns {Promise<boolean>} - Returns true if the user has 'ADMIN' role, otherwise false.
 * 
 * @example
 * const hasPermission = await uploadProductPermission('12345');
 * console.log(hasPermission); // true or false
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @todo Implement additional role checks if needed.
 */
const uploadProductPermission = async(userId) => {
    const user = await userModel.findById(userId)

    if(user.role === 'ADMIN'){
        return true
    }

    return false
}


module.exports = uploadProductPermission