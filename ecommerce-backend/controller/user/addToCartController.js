const addToCartModel = require("../../models/cartProduct")

/**
 * Controller to handle adding a product to the user's cart.
 * 
 * @async
 * @function addToCartController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.productId - The ID of the product to add to the cart.
 * @param {string} req.userId - The ID of the current user.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Returns a JSON response with the status of the operation.
 * 
 * @description
 * This controller checks if the product is already in the user's cart. If it is, it returns a message indicating that the product is already in the cart. If not, it adds the product to the cart with a default quantity of 1 and returns a success message.
 * 
 * @example
 * // Example request body
 * {
 *   "productId": "12345"
 * }
 * 
 * @example
 * // Example response when product is already in the cart
 * {
 *   "message": "Already exists in Add to cart",
 *   "success": false,
 *   "error": true
 * }
 * 
 * @example
 * // Example response when product is successfully added to the cart
 * {
 *   "data": {
 *     "_id": "67890",
 *     "productId": "12345",
 *     "quantity": 1,
 *     "userId": "user123",
 *     "__v": 0
 *   },
 *   "message": "Product Added in Cart",
 *   "success": true,
 *   "error": false
 * }
 * 
 * @version 1.0.0
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 */
const addToCartController = async(req,res)=>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await addToCartModel.findOne({ productId })

        console.log("isProductAvailabl   ",isProductAvailable)

        if(isProductAvailable){
            return res.json({
                message : "Already exits in Add to cart",
                success : false,
                error : true
            })
        }

        const payload  = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()


        return res.json({
            data : saveProduct,
            message : "Product Added in Cart",
            success : true,
            error : false
        })
        

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}


module.exports = addToCartController