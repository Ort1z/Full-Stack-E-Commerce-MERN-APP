const addToCartModel = require("../../models/cartProduct")

/**
 * Deletes a product from the user's cart.
 * 
 * @async
 * @function deleteAddToCartProduct
 * @param {Object} req - The request object.
 * @param {string} req.userId - The ID of the current user.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body._id - The ID of the product to be deleted from the cart.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 * 
 * @description
 * This function handles the deletion of a product from the user's cart. It retrieves the current user's ID and the product ID from the request, deletes the product from the cart, and sends a JSON response indicating the success or failure of the operation.
 * 
 * @example
 * // Example usage:
 * const req = {
 *   userId: 'user123',
 *   body: {
 *     _id: 'product456'
 *   }
 * };
 * const res = {
 *   json: (response) => console.log(response)
 * };
 * deleteAddToCartProduct(req, res);
 * 
 * @version 1.0.0
 * @since 2023-10-01
 */
const deleteAddToCartProduct = async(req,res)=>{
    try{
        const currentUserId = req.userId 
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({ _id : addToCartProductId})

        res.json({
            message : "Product Deleted From Cart",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct