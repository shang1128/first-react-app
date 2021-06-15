import {createSlice} from '@reduxjs/toolkit';

export const myCartSlice = createSlice({
    name:'cart',
    initialState:{
       cart: []
    },
    reducers:{
       add: (state, action) => {
           state.cart.push(action.payload);
       },
       remove: (state, action) =>{
           const newCart = state.cart.filter(cart=>cart.id!==action.payload);
           state.cart=newCart;
       }
    }
})  
export const {add, remove} = myCartSlice.actions
export default myCartSlice.reducer