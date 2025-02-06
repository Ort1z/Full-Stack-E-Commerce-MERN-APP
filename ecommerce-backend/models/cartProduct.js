const mongoose = require('mongoose')

/**
 * Schema for adding a product to the cart.
 * 
 * @typedef {Object} addToCart
 * @property {String} productId - The ID of the product to add to the cart. References the 'product' collection.
 * @property {Number} quantity - The quantity of the product to add to the cart.
 * @property {String} userId - The ID of the user adding the product to the cart.
 * 
 * @version 1.0.0
 * @since 2025
 * 
 * @example
 * // Example usage:
 * const cartItem = new addToCart({
 *   productId: '12345',
 *   quantity: 2,
 *   userId: 'user123'
 * });
 * 
 * @see {@link https://github.com/your-repo/ecommerce-backend|GitHub Repository}
 * 
 * @commit "Implemented user authentication using JWT"
 * @branch feature/authentication
 * @pullRequest "Code review for authentication feature"
 */
const addToCart = mongoose.Schema({
   productId : {
        ref : 'product',
        type : String,
   },
   quantity : Number,
   userId : String,
},{
    timestamps : true
})


const addToCartModel = mongoose.model("addToCart",addToCart)

module.exports = addToCartModel