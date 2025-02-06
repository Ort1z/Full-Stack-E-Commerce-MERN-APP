/**
 * Converts an image file to a base64 encoded string.
 *
 * @param {File} image - The image file to be converted.
 * @returns {Promise<string>} A promise that resolves to the base64 encoded string of the image.
 * @throws {Error} If there is an error reading the image file.
 */
const imageTobase64 = async(image) =>{
    const reader = new FileReader()
    reader.readAsDataURL(image)

    const data = await new Promise((resolve,reject)=>{
        reader.onload = () => resolve(reader.result)

        reader.onerror = error => reject(error)
    })

    return data

}

export default imageTobase64