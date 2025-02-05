import React, { createContext, useState } from 'react';
import SummaryApi from './common';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const fetchUserDetails = async () => {
        if (!SummaryApi.current_user || !SummaryApi.current_user.url) {
            console.error("current_user API configuration is missing.");
            return;
        }

        try {
            const response = await fetch(SummaryApi.current_user.url, {
                method: SummaryApi.current_user.method,
                credentials: 'include',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "content-type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }

            const data = await response.json();
            setUser(data.user);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const fetchUserAddToCart = async () => {
        if (!SummaryApi.addToCartProductView || !SummaryApi.addToCartProductView.url) {
            console.error("addToCartProductView API configuration is missing.");
            return;
        }

        try {
            const response = await fetch(SummaryApi.addToCartProductView.url, {
                method: SummaryApi.addToCartProductView.method,
                credentials: 'include',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "content-type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch cart details');
            }

            const data = await response.json();
            setCart(data.cart);
        } catch (error) {
            console.error("Error fetching cart details:", error);
        }
    };

    return (
        <Context.Provider value={{ user, cart, fetchUserDetails, fetchUserAddToCart }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
