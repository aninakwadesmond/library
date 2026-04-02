import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GoBack from "../Login_SIgnUp/GoBack";
import Header from "../Login_SIgnUp/Header";
import LoginWelcome from "../Login_SIgnUp/LoginWelcome";
import Overlay from "../Login_SIgnUp/Overlay";
import Title from "../Login_SIgnUp/Title";
import MainInputs from "../Login_SIgnUp/MainInputs";
import Input from "../Login_SIgnUp/Input";
import Button_Action from "../Login_SIgnUp/Button_Action";
import { server } from "../Axios/api";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
// import { toast } from "react-toastify";

function ResetPassword() {
  return (
    <div className="flex-placecenter h-screen w-full">
      <LoginWelcome image="/images/password-2.jpeg">
        <Overlay />
        <GoBack  path='/forgetPassword'/>
        <Header image="/images/password-2.jpeg" width="w-60">
          <Title
            heading="Reset Password"
            text="Enter token, new password and confirm password"
          />

          <MainInputs action='/ResetPassword'>
            <Input icon={faEnvelope} placeholder="token" type="number" name='token' />
            <Input icon={faEnvelope} placeholder="new password" type="text" name='passwordNew' />
            <Input icon={faEnvelope} placeholder="confirm password" type="text" name='passwordConfirm' />
            <Button_Action
              action="Reset Password"
              b_style="bg-blue-600/80 text-green-100"
            />
          </MainInputs>
        </Header>
      </LoginWelcome>
    </div>
  );
}


export async function ResetPasswordAction({request, params}){
  const response = await request.formData(); 
  const {token, passwordNew,passwordConfirm } = Object.fromEntries(response.entries()); 
  console.log(token, passwordNew, passwordConfirm); 
  try {
    const {data} = await server.post('/user/reset', {token, passwordConfirm, passwordNew})
    toast.success(`🔓  ${data ? data?.message :'succefully update'}`)
    return redirect('/signup'); 
    // console.log(data)
  } catch (error) {
    toast.error('password reset failed ')
    throw new Response(JSON.stringify(error?.message), {status:402})
  }
}
// export async function ResetPasswordByEmail({request, params}){
//   console.log('starrted to send data email')
//  const response =  await request.formData()
//  const {email} = Object.fromEntries(response.entries())
//  console.log('email', email)
//   try {
//    const {data} =  await server.post('/user/forgetPassword', {email})

//    toast.success('email send')
//    toast.success(`📩 ${data.message}`); 
//    console.log(data); 
//   } catch (error) {
//     toast.error(`error : ${error?.message}`)
//     throw new Response(JSON.stringify(error?.message), {status:200})
//   }
// }

export default ResetPassword;
