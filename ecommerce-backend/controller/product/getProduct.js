const productModel = require("../../models/productModel")

/**
 * Controller to get all products from the database, sorted by creation date in descending order.
 * 
 * @async
 * @function getProductController
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with all products or an error message.
 * 
 * @example
 * // Example usage:
 * // GET /api/products
 * 
 * @version 1.0.0
 * @repository https://github.com/yourusername/your-repo
 * @commit "Implemented product retrieval and sorting by creation date"
 * @branch feature/get-products
 * @pullRequest https://github.com/yourusername/your-repo/pull/1
 */
const getProductController = async(req,res)=>{
    try{
        const allProduct = await productModel.find().sort({ createdAt : -1 })

        res.json({
            message : "All Product",
            success : true,
            error : false,
            data : allProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = getProductController