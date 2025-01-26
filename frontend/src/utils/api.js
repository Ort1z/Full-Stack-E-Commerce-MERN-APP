export const fetchUserDetails = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/user-details'); // Updated URL
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    throw error;
  }
};

export const fetchUserAddToCart = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/countAddToCartProduct'); // Updated URL
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user add to cart:', error.message);
    throw error;
  }
};

export const fetchCategoryProduct = async () => {
  try {
    const response = await fetch('/api/category/product');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch category product:', error);
    throw error;
  }
};

export const fetchCategoryWiseProduct = async () => {
  try {
    const response = await fetch('/api/category-wise/product');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch category-wise product:', error);
    throw error;
  }
};
