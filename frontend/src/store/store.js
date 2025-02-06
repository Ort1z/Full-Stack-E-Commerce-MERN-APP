import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

/**
 * Configures and exports the Redux store for the application.
 * 
 * @file store.js
 * @description This file sets up the Redux store with the necessary reducers.
 * 
 * @version 1.0.0
 * @repository https://github.com/your-username/your-repo
 * 
 * @example
 * // Import the store into your application
 * import { store } from './store';
 * 
 * @commit "Implemented user authentication using JWT"
 * 
 * @branch feature/authentication
 * @pullRequest #1
 * 
 * @module store
 * 
 * @requires configureStore - Function from Redux Toolkit to configure the store.
 * @requires userReducer - Reducer for handling user-related state.
 */
export const store = configureStore({
  reducer: {
    user : userReducer
  },
})