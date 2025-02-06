const addToCartModel = require("../../models/cartProduct")

/**
 * Updates the quantity of a product in the user's cart.
 * 
 * @async
 * @function updateAddToCartProduct
 * @param {Object} req - The request object.
 * @param {string} req.userId - The ID of the current user.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body._id - The ID of the product to update.
 * @param {number} [req.body.quantity] - The new quantity of the product.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 * 
 * @description
 * This function updates the quantity of a product in the user's cart. It retrieves the current user ID and the product ID from the request object. If a new quantity is provided in the request body, it updates the product's quantity in the database. The response object is then used to send a JSON response indicating the success or failure of the operation.
 * 
 * @example
 * // Example request object
 * const req = {
 *   userId: 'user123',
 *   body: {
 *     _id: 'product456',
 *     quantity: 3
 *   }
 * };
 * 
 * // Example response object
 * const res = {
 *   json: (response) => console.log(response)
 * };
 * 
 * // Call the function
 * updateAddToCartProduct(req, res);
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 */
const updateAddToCartProduct = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await addToCartModel.updateOne({_id : addToCartProductId},{
            ...(qty && {quantity : qty})
        })

        res.json({
            message : "Product Updated",
            data : updateProduct,
            error : false,
            success : true
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateAddToCartProduct