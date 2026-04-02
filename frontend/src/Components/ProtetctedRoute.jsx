import { useEffect, useState } from "react"
import { server } from "../Axios/api"
import { Navigate, Outlet, redirect } from "react-router-dom";

function ProtectedRoute() {
  const [verify, setVerify] = useState(false)
  
  useEffect(()=> {
    async function validate(){
      setVerify(false)
     const respond =  await  server.get('/verify'); 
     if(respond.status !== 200){
      return redirect('/login')
     }
     setVerify(true)
    }
    if (verify) return
    validate()
  }, [verify])

   // Show loading indicator while verifying
  if (verify === null) {
    return <div className="w-full h-full flex items-center justify-center">
      Loading...
    </div>
  }

  // Redirect if not verified
  if (!verify) {
    return <Navigate to="/login" replace />
  }

  return <div className="w-full h-full">{verify && <Outlet/>}</div>
}

export default ProtectedRoute
