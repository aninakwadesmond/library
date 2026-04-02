import { createSlice } from "@reduxjs/toolkit";

const initialState = {chatHome:false , chatRoom:false, tagNumber:1, verify:false}

const ChatSlice = createSlice({
  name:'chat', 
  initialState, 
  reducers:{
    setChatHome:(state, action)=> {
      state.chatHome = action.payload
    }, 
    setChatRoom : (state , action)=> {
      state.chatRoom = action.payload
    }, 
    setTagNumber:(state, action)=> {
      state.tagNumber = action.payload
    }, 
    setVerify:(state, action)=> {
      state.verify = action.payload
    }
  }
})

export const {setChatHome, setChatRoom, setTagNumber, setVerify} = ChatSlice.actions; 
export default ChatSlice.reducer; 