const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080/api";

/**
 * SummaryApi - A collection of API endpoints for authentication, user management, product management, and cart operations.
 * 
 * @constant
 * @type {Object}
 * 
 * @property {Object} signIn - Endpoint for user sign-in.
 * @property {string} signIn.url - URL for sign-in.
 * @property {string} signIn.method - HTTP method for sign-in.
 * 
 * @property {Object} signUp - Endpoint for user sign-up.
 * @property {string} signUp.url - URL for sign-up.
 * @property {string} signUp.method - HTTP method for sign-up.
 * 
 * @property {Object} logout - Endpoint for user logout.
 * @property {string} logout.url - URL for logout.
 * @property {string} logout.method - HTTP method for logout.
 * 
 * @property {Object} current_user - Endpoint to get current user details.
 * @property {string} current_user.url - URL to get current user details.
 * @property {string} current_user.method - HTTP method to get current user details.
 * 
 * @property {Object} updateUser - Endpoint to update user details.
 * @property {string} updateUser.url - URL to update user details.
 * @property {string} updateUser.method - HTTP method to update user details.
 * 
 * @property {Object} allUsers - Endpoint to get all users.
 * @property {string} allUsers.url - URL to get all users.
 * @property {string} allUsers.method - HTTP method to get all users.
 * 
 * @property {Object} allProduct - Endpoint to get all products.
 * @property {string} allProduct.url - URL to get all products.
 * @property {string} allProduct.method - HTTP method to get all products.
 * 
 * @property {Object} categoryProduct - Endpoint to get products by category.
 * @property {string} categoryProduct.url - URL to get products by category.
 * @property {string} categoryProduct.method - HTTP method to get products by category.
 * 
 * @property {Object} categoryWiseProduct - Endpoint to get products by category-wise.
 * @property {string} categoryWiseProduct.url - URL to get products by category-wise.
 * @property {string} categoryWiseProduct.method - HTTP method to get products by category-wise.
 * 
 * @property {Object} searchProduct - Endpoint to search for products.
 * @property {string} searchProduct.url - URL to search for products.
 * @property {string} searchProduct.method - HTTP method to search for products.
 * 
 * @property {Object} addToCartProductCount - Endpoint to get the count of products in the cart.
 * @property {string} addToCartProductCount.url - URL to get the count of products in the cart.
 * @property {string} addToCartProductCount.method - HTTP method to get the count of products in the cart.
 */
const SummaryApi = {
    // Auth endpoints
    signIn: {
        url: `${BASE_URL}/signin`,
        method: 'POST'
    },
    signUp: {
        url: `${BASE_URL}/signup`,
        method: 'POST'
    },
    logout: {
        url: `${BASE_URL}/logout`,
        method: 'POST'
    },
    // User endpoints
    current_user: {
        url: `${BASE_URL}/user-details`,
        method: 'GET'
    },
    updateUser: {
        url: `${BASE_URL}/update-user`,
        method: 'PUT'
    },
    allUsers: {
        url: `${BASE_URL}/users`,
        method: 'GET'
    },
    // Product endpoints
    allProduct: {
        url: `${BASE_URL}/products`,
        method: 'GET'
    },
    categoryProduct: {
        url: `${BASE_URL}/category/product`,
        method: 'GET'
    },
    categoryWiseProduct: {
        url: `${BASE_URL}/category-wise/product`,
        method: 'GET'
    },
    searchProduct: {
        url: `${BASE_URL}/search/product`,
        method: 'GET'
    },
    // Cart endpoints
    addToCartProductCount: {
        url: `${BASE_URL}/cart/count`,
        method: 'GET'
    }
};

export default SummaryApi;