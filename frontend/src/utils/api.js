import SummaryApi from '../common'; // Ensure this import is correct

/**
 * Makes an API request to the specified endpoint with the given options.
 * 
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {Object} [options={}] - Optional configurations for the fetch request.
 * @param {Object} [options.headers] - Additional headers to include in the request.
 * @param {string} [options.method] - HTTP method to use for the request (e.g., 'GET', 'POST').
 * @param {Object} [options.body] - The body of the request for methods like 'POST' or 'PUT'.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API.
 * 
 * @throws {Error} - Throws an error if the response is not ok (status code is not in the range 200-299).
 * 
 * @example
 * // Example usage:
 * makeApiRequest('/api/v1/users', {
 *   method: 'POST',
 *   body: JSON.stringify({ username: 'example', password: 'password' })
 * }).then(response => {
 *   console.log(response);
 * }).catch(error => {
 *   console.error('API Error:', error);
 * });
 */
const makeApiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
  };

  const response = await fetch(endpoint, {
      ...options,
      headers: {
          ...defaultHeaders,
          ...options.headers
      }
  });

  if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
};

export const fetchUserDetails = async () => {
  try {
      const data = await makeApiRequest(SummaryApi.current_user.url, {
          method: SummaryApi.current_user.method
      });
      return data;
  } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
  }
};

export const fetchCategoryProduct = async () => {
  try {
      const data = await makeApiRequest(SummaryApi.categoryProduct.url, {
          method: SummaryApi.categoryProduct.method
      });
      return data;
  } catch (error) {
      console.error('Error fetching category products:', error);
      throw error;
  }
};

export const fetchCategoryWiseProduct = async (category) => {
  try {
      const data = await makeApiRequest(`${SummaryApi.categoryWiseProduct.url}/${category}`, {
          method: SummaryApi.categoryWiseProduct.method
      });
      return data;
  } catch (error) {
      console.error('Error fetching category-wise products:', error);
      throw error;
  }
};