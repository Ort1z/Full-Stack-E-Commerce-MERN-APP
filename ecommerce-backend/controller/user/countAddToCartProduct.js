const addToCartModel = require("../../models/cartProduct")

/**
 * Controller function to count the number of products added to the cart by a user.
 * 
 * @async
 * @function countAddToCartProduct
 * @param {Object} req - Express request object.
 * @param {Object} req.userId - ID of the user making the request.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the count of products added to the cart.
 * 
 * @example
 * // Example usage in an Express route
 * router.get('/cart/count', countAddToCartProduct);
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
const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req.userId

        const count = await addToCartModel.countDocuments({
            userId : userId
        })

        res.json({
            data : {
                count : count
            },
            message : "ok",
            error : false,
            success : true
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
}

module.exports = countAddToCartProduct