import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoBack from "../Login_SIgnUp/GoBack";
import Header from "../Login_SIgnUp/Header";
import LoginWelcome from "../Login_SIgnUp/LoginWelcome";
import Overlay from "../Login_SIgnUp/Overlay";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button_Action from "../Login_SIgnUp/Button_Action";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import MainInputs from "../Login_SIgnUp/MainInputs";
import Input from "../Login_SIgnUp/Input";
import ContinueWith from "../Login_SIgnUp/ContinueWith";
import Title from "../Login_SIgnUp/Title";

function Login() {
  return (
    <div className="flex-placecenter h-screen w-full">
      <LoginWelcome image="/images/image-2.jpeg">
        <Overlay />
        <GoBack />
        <Header>
          <Title
            heading=" Sign in"
            text=" Enter valid user name & password to continue"
          />
          <MainInputs>
            <Input icon={faUser} placeholder="Full name" />
            <Input icon={faEnvelope} placeholder="Email" type="email" />
            <Input
              icon={faUserGroup}
              placeholder="Department(eg. Computer Engineering)"
            />
            <Input icon={faKey} placeholder="password" type="password" />
            <Input
              icon={faKey}
              placeholder="confirm password"
              type="password"
            />
          </MainInputs>
          <MainInputs>
            <Button_Action
              action="create an account"
              b_style="bg-green-600/80 text-green-100"
            />
          </MainInputs>
          <ContinueWith />
        </Header>
      </LoginWelcome>
    </div>
  );
}

// function ContinueWith() {
//   return (
//     <div className="flex-col-start mt-3 w-full gap-2">
//       <p className="flex-placecenter relative w-full">
//         <span className="h-px w-[60%] bg-gray-300"></span>
//         <span className="absolute top-[10%] left-[50%] -translate-[50%] rounded-md bg-gray-100 p-1 text-[11px] text-gray-500">
//           or continue with
//         </span>
//       </p>
//       <div className="mt-2 grid w-full grid-cols-2 justify-items-center gap-3">
//         <SocialMedia icon={faGoogle} text="google" />
//         <SocialMedia icon={faFacebook} text="facebook" />
//       </div>
//     </div>
//   );
// }

// function MainInputs({ children }) {
//   return <div className="flex-col-start w-full gap-3">{children}</div>;
// }

// function Title({ heading, text }) {
//   return (
//     <div className="flex-col-start gap-2">
//       <h2 className="w-full text-center text-[1.3rem] font-bold tracking-normal text-gray-600 capitalize">
//         Sign in
//       </h2>
//       <p className="text-[11px] font-semibold text-gray-400">
//         Enter valid user name & password to continue
//       </p>
//     </div>
//   );
// }

// function Input({ icon, placeholder, type = "text" }) {
//   return (
//     <div className="relative w-full">
//       <span className="flex-placecenter absolute top-[50%] left-[3%] -translate-y-[50%]">
//         <FontAwesomeIcon
//           icon={icon}
//           className="text-[14px] font-bold text-gray-600"
//         />
//       </span>
//       <input
//         type={type}
//         className="w-full rounded-md border border-gray-100 bg-white px-10 py-3 text-[15px] font-semibold tracking-normal text-gray-600 shadow-md outline-0 placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-tight placeholder:text-gray-300"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }

export default Login;
