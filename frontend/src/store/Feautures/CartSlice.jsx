import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartItems:[]}

const CartSlice = createSlice({
  name:'cart',
  initialState, 
  reducers:{
    setCartItems:(state, action)=> {
      state.cartItems = [...state.cartItems, action.payload].filter((item, index, array)=> index === array.findIndex(o=> o.id === item.id))
    }
  }
})

export const {setCartItems} = CartSlice.actions; 
export default CartSlice.reducer; 