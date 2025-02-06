const mongoose = require('mongoose')

/**
 * @file Defines the schema for the Product model in the e-commerce backend.
 * @version 1.0.0
 * @since 2025
 * 
 * @description
 * The Product schema represents the structure of a product document in the MongoDB database.
 * It includes fields for product name, brand name, category, product images, description, price, and selling price.
 * Timestamps are automatically managed by Mongoose.
 * 
 * @example
 * // Example of a product document
 * {
 *   productName: "Sample Product",
 *   brandName: "Sample Brand",
 *   category: "Sample Category",
 *   productImage: ["image1.jpg", "image2.jpg"],
 *   description: "This is a sample product description.",
 *   price: 100.00,
 *   sellingPrice: 80.00,
 *   createdAt: "2025-01-01T00:00:00.000Z",
 *   updatedAt: "2025-01-01T00:00:00.000Z"
 * }
 * 
 * @see {@link https://mongoosejs.com/docs/guide.html Mongoose Documentation}
 * 
 * @versionControl
 * GitHub Repository: Ensure your repository is public and well-organized.
 * 
 * Commits: Commit frequently with descriptive messages (e.g., “Implemented user authentication using JWT”).
 * 
 * Branches and Pull Requests: Use branches for features (e.g., feature/authentication) and create pull requests for code reviews.
 */
const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel