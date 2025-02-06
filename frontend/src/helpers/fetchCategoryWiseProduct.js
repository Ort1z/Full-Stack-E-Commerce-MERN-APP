const { default: SummaryApi } = require("../common")

/**
 * Fetches products based on the given category.
 *
 * @async
 * @function fetchCategoryWiseProduct
 * @param {string} category - The category for which to fetch products.
 * @returns {Promise<Object>} The response data containing products for the specified category.
 * @throws {Error} If the fetch operation fails.
 */
const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(SummaryApi.categoryWiseProduct.url,{
        method : SummaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default fetchCategoryWiseProduct