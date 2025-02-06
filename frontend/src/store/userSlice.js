import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : null
}
  
  /**
   * Redux slice for user state management.
   * 
   * @module userSlice
   * @requires createSlice
   */

  /**
   * Slice for user state.
   * 
   * @constant
   * @type {Slice}
   * @property {string} name - The name of the slice.
   * @property {Object} initialState - The initial state of the slice.
   * @property {Object} reducers - The reducers for the slice.
   * @property {Function} reducers.setUserDetails - Reducer to set user details.
   * @param {Object} state - The current state.
   * @param {Object} action - The action object.
   * @param {Object} action.payload - The payload containing user details.
   */
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserDetails : (state,action)=>{
        state.user = action.payload
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setUserDetails } = userSlice.actions
  
  export default userSlice.reducer