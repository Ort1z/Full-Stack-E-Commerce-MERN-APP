const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

/**
 * Uploads an image to a specified server.
 *
 * @param {File} image - The image file to be uploaded.
 * @returns {Promise<Object>} - A promise that resolves to the response data in JSON format.
 *
 * @example
 * const imageFile = document.querySelector('input[type="file"]').files[0];
 * uploadImage(imageFile).then(response => {
 *   console.log(response);
 * });
 */
const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_product")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 