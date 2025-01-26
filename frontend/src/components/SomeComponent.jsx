import React, { useEffect, useState } from 'react';
import { fetchUserDetails, fetchUserAddToCart, fetchCategoryProduct, fetchCategoryWiseProduct } from '../utils/api';

const SomeComponent = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const data = await fetchUserDetails();
        setUserDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getUserDetails();
  }, []);

  // ...existing code...

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {/* Render user details */}
    </div>
  );
};

export default SomeComponent;
