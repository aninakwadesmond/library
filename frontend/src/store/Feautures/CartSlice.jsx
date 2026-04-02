import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartItems:[]}

const CartSlice = createSlice({
  name:'cart',
  initialState, 
  reducers:{
    setCartItems:(state, action)=> {
      state.cartItems = [...state.cartItems, action.payload].filter((item, index, array)=> index === array.findIndex(o=> o.id === item.id))
    }, 
    updateCartQuantity: (state, action)=> {
      //loop through the cartItems and update the selected cart

      // state.cartItems = [...state.cartItems].map((cart)=> {
      //   if(cart.id == action.payload.id) return {
      //     ...cart , 
      //     quantity: action.payload.quantity
      //   }

      //   return cart
      // })

      //find and update item directly; 
      const item = state.cartItems.find(cart => cart.id = action.payload.id); 

      if(item){
        item.quantity = action.payload.quantity
        item.amountByQuantity = action.payload.amountByQuantity
      }

    }, 
    removeCartItem: (state , action)=> {
      state.cartItems = state.cartItems.filter((book, index, array)=> book.id !== action.payload.id )
    }
  }
})

export const {setCartItems, updateCartQuantity, removeCartItem} = CartSlice.actions; 
export default CartSlice.reducer; 