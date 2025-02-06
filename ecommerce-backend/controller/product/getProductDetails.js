const productModel = require("../../models/productModel")

/**
 * Retrieves the details of a product by its ID.
 *
 * @async
 * @function getProductDetails
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.productId - The ID of the product to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} Sends a JSON response containing the product details.
 * @throws Will send a JSON response with an error message if an error occurs.
 *
 * @example
 * // Example request body
 * {
 *   "productId": "60d21b4667d0d8992e610c85"
 * }
 *
 * @example
 * // Example success response
 * {
 *   "data": {
 *     "_id": "60d21b4667d0d8992e610c85",
 *     "name": "Product Name",
 *     "price": 100,
 *     "description": "Product Description",
 *     ...
 *   },
 *   "message": "Ok",
 *   "success": true,
 *   "error": false
 * }
 *
 * @example
 * // Example error response
 * {
 *   "message": "Product not found",
 *   "error": true,
 *   "success": false
 * }
 */
const getProductDetails = async(req,res)=>{
    try{
        const { productId } = req.body

        const product = await productModel.findById(productId)

        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails