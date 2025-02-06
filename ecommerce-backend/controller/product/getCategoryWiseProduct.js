const productModel = require("../../models/productModel")

/**
 * Get products based on category.
 * 
 * @async
 * @function getCategoryWiseProduct
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body.
 * @param {string} req.body.category - Category to filter products.
 * @param {Object} req.query - Request query parameters.
 * @param {string} req.query.category - Category to filter products (alternative to body).
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the products data.
 * @throws {Error} If there is an error during the database query.
 * 
 * @example
 * // Example request body
 * // {
 * //   "category": "electronics"
 * // }
 * 
 * @example
 * // Example request query
 * // GET /api/products?category=electronics
 * 
 * @example
 * // Example response
 * // {
 * //   "data": [...],
 * //   "message": "Product",
 * //   "success": true,
 * //   "error": false
 * // }
 * 
 * @version 1.0.0
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 */
const getCategoryWiseProduct = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        const product = await productModel.find({ category })

        res.json({
            data : product,
            message : "Product",
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

module.exports = getCategoryWiseProduct