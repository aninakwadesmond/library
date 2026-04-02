import { useEffect, useState } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import { server } from "../Axios/api"
import { useDispatch, useSelector } from "react-redux"
import { setChatHome, setChatRoom, setVerify } from "../store/Feautures/ChatSlice";
import { toast } from "react-toastify";


function ProtectedRoute({children}) {
 const  {chatRoom, chatHome, verify} = useSelector(state => state.chat); 
 const dispatch = useDispatch()
 const [verified, setVerified] = useState(false)

   const navigate = useNavigate()

useEffect(()=> {
  async function verifyUser(){
        try {
           console.log('started verifying')
        const  response = await server.get('/verify'); 
        console.log('observe resposne', response)
  
        // if(response.status !== 200){
        //   navi('/login_signup')
        // }
        setVerified(true)
        dispatch(setChatRoom(false))
        dispatch(setChatHome(true))
        dispatch(setVerify(true))
        } catch (error) {
          dispatch(setChatHome(false))
          toast.error('login before AI can assist')
         return  navigate('/login_signup')
          
        }
       
      }
      verifyUser()
}, [])
  
  return (
    <div className="w-full absolute top-0 bottom-0 left-0 right-0">
      { verify && children}
    </div>
  )
}

export default ProtectedRoute
