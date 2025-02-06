import SummaryApi from "../common"
import { toast } from 'react-toastify'

/**
 * Adds a product to the cart.
 *
 * This function sends a request to add a product to the cart using the provided product ID.
 * It stops the event propagation and prevents the default action of the event.
 * The function uses the `SummaryApi.addToCartProduct` endpoint to send the request.
 * If the request is successful, it displays a success toast message.
 * If there is an error, it displays an error toast message.
 *
 * @param {Event} e - The event object.
 * @param {string} id - The ID of the product to add to the cart.
 * @returns {Promise<Object>} The response data from the server.
 */
const addToCart = async(e,id) =>{
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.addToCartProduct.url,{
        method : SummaryApi.addToCartProduct.method,
        credentials : 'include',
        headers : {
            "content-type" : 'application/json'
        },
        body : JSON.stringify(
            { productId : id }
        )
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData.message)
    }

    if(responseData.error){
        toast.error(responseData.message)
    }


    return responseData

}


export default addToCart