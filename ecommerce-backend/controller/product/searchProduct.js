const productModel = require("../../models/productModel")

/**
 * Searches for products based on a query string.
 * 
 * @async
 * @function searchProduct
 * @param {Object} req - The request object.
 * @param {Object} req.query - The query parameters.
 * @param {string} req.query.q - The search query string.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 * 
 * @example
 * // Example request:
 * // GET /api/products/search?q=laptop
 * 
 * @description
 * This function searches for products in the database that match the query string
 * provided in the request. It performs a case-insensitive search on the product name
 * and category fields. If products are found, it returns a JSON response with the
 * product data, a success message, and success status. If an error occurs, it returns
 * a JSON response with the error message and error status.
 * 
 * @version 1.0.0
 * @repository https://github.com/yourusername/Full-Stack-E-Commerce-MERN-APP
 * @commit "Implemented product search functionality"
 * @branch feature/product-search
 */
const searchProduct = async(req,res)=>{
    try{
        const query = req.query.q 

        const regex = new RegExp(query,'i','g')

        const product = await productModel.find({
            "$or" : [
                {
                    productName : regex
                },
                {
                    category : regex
                }
            ]
        })


        res.json({
            data  : product ,
            message : "Search Product list",
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

module.exports = searchProduct