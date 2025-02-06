const addToCartModel = require("../../models/cartProduct")

/**
 * Controller function to handle adding a product to the cart and viewing the products in the cart.
 * 
 * @async
 * @function addToCartViewProduct
 * @param {Object} req - Express request object.
 * @param {string} req.userId - ID of the current user.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} Sends a JSON response with the products in the cart or an error message.
 * 
 * @example
 * // Example usage in an Express route
 * router.post('/add-to-cart', addToCartViewProduct);
 * 
 * @version 1.0.0
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @description
 * This function retrieves all products in the cart for the current user by querying the `addToCartModel` 
 * with the user's ID. It populates the `productId` field to get detailed product information. 
 * If successful, it sends a JSON response with the product data. If an error occurs, it sends a JSON 
 * response with the error message.
 */
const addToCartViewProduct = async(req,res)=>{
    try{
        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

        res.json({
            data : allProduct,
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports =  addToCartViewProduct