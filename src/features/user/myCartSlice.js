import {createSlice} from '@reduxjs/toolkit';

export const myCartSlice = createSlice({
    name:'cart',
    initialState:{
       cart: []
    },
    reducers:{
       add: (state, action) => {
           state.cart.push(action.payload);
       }
    }
})
export const {add} = myCartSlice.actions
export default myCartSlice.reducer