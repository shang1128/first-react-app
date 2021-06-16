import {createSlice} from '@reduxjs/toolkit';

export const myCartSlice = createSlice({
    name:'cart',
    initialState:{
       cart: [],
       cUnitPrice:0
    },
    reducers:{
       add: (state, action) => {
           state.cart.push(action.payload);
       },
       remove: (state, action) =>{
           const newCart = state.cart.filter(cart=>cart.id!==action.payload);
           state.cart=newCart;
       },
       addUnitPrice: (state, action) => {
           state.cUnitPrice = Number((state.cUnitPrice + action.payload).toFixed(2));
       },
       subUnitPrice: (state, action) => {
           if(state.cUnitPrice>0){
            state.cUnitPrice = Number((state.cUnitPrice - action.payload).toFixed(2));
           }
           state.cUnitPrice = state.cUnitPrice;
    }
    }
})  
export const {add, remove, addUnitPrice, subUnitPrice} = myCartSlice.actions
export default myCartSlice.reducer