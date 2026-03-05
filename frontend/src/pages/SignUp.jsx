import {
  faBookOpen,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import GoBack from "../Login_SIgnUp/GoBack";
import LoginWelcome from "../Login_SIgnUp/LoginWelcome";
import Overlay from "../Login_SIgnUp/Overlay";
import MainInputs from "../Login_SIgnUp/MainInputs";
import Input from "../Login_SIgnUp/Input";
import Button_Action from "../Login_SIgnUp/Button_Action";
import Header from "../Login_SIgnUp/Header";
import ContinueWith from "../Login_SIgnUp/ContinueWith";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex-placecenter h-screen w-full">
      <LoginWelcome image="/images/come-in.jpeg">
        <Overlay />
        <GoBack />
        <Header image="/images/kids_read.jpeg">
          <Title />

          <MainInputs>
            <Input icon={faEnvelope} placeholder="Email" type="email" />
            <Input icon={faKey} placeholder="password" type="password" />
            <ForgetPassword />
          </MainInputs>
          <MainInputs>
            <Button_Action
              action="Log in"
              b_style="bg-blue-600/80 text-green-100"
            />
          </MainInputs>
          <ContinueWith />
        </Header>
      </LoginWelcome>
    </div>
  );
}

function ForgetPassword() {
  return (
    <div className="flex w-full items-center justify-end px-1 py-2">
      <Link
        className="text-[12px] font-semibold tracking-tight text-blue-500 underline-offset-1 hover:underline"
        to={"/forgetPassword"}
      >
        Forget password
      </Link>
    </div>
  );
}

function Title() {
  return (
    <h3 className="flex w-full items-center justify-center gap-1 text-center font-bold tracking-normal text-gray-500 capitalize">
      <FontAwesomeIcon icon={faBookOpen} className="font-bold text-green-400" />
      <span className="text-[1.4rem] font-bold tracking-normal text-gray-500 capitalize">
        Signup
      </span>
    </h3>
  );
}

export default SignUp;
