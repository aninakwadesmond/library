import { createSlice } from "@reduxjs/toolkit";

const initialState = {chatHome:false , chatRoom:false}

const ChatSlice = createSlice({
  name:'chat', 
  initialState, 
  reducers:{
    setChatHome:(state, action)=> {
      state.chatHome = action.payload || !state.chatHome
    }, 
    setChatRoom : (state , action)=> {
      state.chatRoom = action.payload
    }
  }
})

export const {setChatHome, setChatRoom} = ChatSlice.actions; 
export default ChatSlice.reducer; 