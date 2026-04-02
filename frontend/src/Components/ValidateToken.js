import { redirect } from "react-router-dom";
import { server } from "../Axios/api";


export async  function validateToken(){
try {
  const {data} = await server.get('/verify'); 
  console.log('data verify', data)
  if(data.status !== 200 ){
    throw new Error()
  }
  return null; 
} catch (error) {
  throw redirect('/login_signup'); 
}
}

