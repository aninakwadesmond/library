import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import GoBack from "../Login_SIgnUp/GoBack";
import Header from "../Login_SIgnUp/Header";
import LoginWelcome from "../Login_SIgnUp/LoginWelcome";
import Overlay from "../Login_SIgnUp/Overlay";
import Title from "../Login_SIgnUp/Title";
import MainInputs from "../Login_SIgnUp/MainInputs";
import Input from "../Login_SIgnUp/Input";
import Button_Action from "../Login_SIgnUp/Button_Action";

function ForgetPassword() {
  return (
    <div className="flex-placecenter h-screen w-full">
      <LoginWelcome image="/images/password-3.jpeg">
        <Overlay />
        <GoBack />
        <Header image="/images/password-1.jpeg" width="w-60">
          <Title
            heading="Forget Password"
            text="Enter your email to retrieve password"
          />

          <MainInputs>
            <Input icon={faEnvelope} placeholder="Email" type="email" />
          </MainInputs>
          <MainInputs>
            <Button_Action
              action="Generate Token"
              b_style="bg-blue-600/80 text-green-100"
            />
          </MainInputs>
        </Header>
      </LoginWelcome>
    </div>
  );
}

export default ForgetPassword;
