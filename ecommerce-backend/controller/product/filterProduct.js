const productModel = require("../../models/productModel")

/**
 * Controller to filter products based on categories.
 * 
 * @async
 * @function filterProductController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The body of the request.
 * @param {Array} req.body.category - List of categories to filter products by.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with filtered products or an error message.
 * 
 * @example
 * // Example request body
 * {
 *   "category": ["electronics", "books"]
 * }
 * 
 * @example
 * // Example response
 * {
 *   "data": [
 *     {
 *       "_id": "60c72b2f9b1d8e001c8e4b8a",
 *       "name": "Smartphone",
 *       "category": "electronics",
 *       ...
 *     },
 *     {
 *       "_id": "60c72b2f9b1d8e001c8e4b8b",
 *       "name": "Novel",
 *       "category": "books",
 *       ...
 *     }
 *   ],
 *   "message": "product",
 *   "error": false,
 *   "success": true
 * }
 * 
 * @throws {Error} If there is an error during the database query or response handling.
 */
const filterProductController = async(req,res)=>{
 try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        })

        res.json({
            data : product,
            message : "product",
            error : false,
            success : true
        })
 }catch(err){
    res.json({
        message : err.message || err,
        error : true,
        success : false
    })
 }
}


module.exports = filterProductController