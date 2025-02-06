const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

/**
 * Controller to handle product upload.
 * 
 * @async
 * @function UploadProductController
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The body of the request containing product details.
 * @param {string} req.userId - The ID of the user making the request.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 * 
 * @throws {Error} - Throws an error if the user does not have permission to upload the product.
 * 
 * @description
 * This function handles the uploading of a product. It first checks if the user has the necessary permissions to upload a product.
async function UploadProductController(req,res){
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
    
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UploadProductController