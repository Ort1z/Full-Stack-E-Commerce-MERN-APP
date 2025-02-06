const productModel = require("../../models/productModel")


/**
 * Retrieves one product from each distinct category.
 * 
 * @async
 * @function getCategoryProduct
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response containing products by category.
 * @throws {Error} If there is an error during the process, sends a 400 status with the error message.
 * 
 * @example
 * // Example usage in an Express route
 * router.get('/category-products', getCategoryProduct);
 * 
 * @version 1.0.0
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @description
 * 1. Retrieves distinct categories from the product model.
 * 2. For each category, finds one product and adds it to the result array.
 * 3. Sends the result array as a JSON response.
 * 
 * @todo
 * - Optimize the query to reduce the number of database calls.
 * - Add pagination if the number of categories is large.
 */
const getCategoryProduct = async(req,res)=>{
    try{
        const productCategory = await productModel.distinct("category")

        console.log("category",productCategory)

        //array to store one product from each category
        const productByCategory = []

        for(const category of productCategory){
            const product = await productModel.findOne({category })

            if(product){
                productByCategory.push(product)
            }
        }


        res.json({
            message : "category product",
            data : productByCategory,
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

module.exports = getCategoryProduct