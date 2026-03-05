import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import LoginWelcome from "../Login_SIgnUp/LoginWelcome";
import Header from "../Login_SIgnUp/Header";
import Overlay from "../Login_SIgnUp/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoBack from "../Login_SIgnUp/GoBack";
import MainContent from "../Login_SIgnUp/MainContent";
import Button_Action from "../Login_SIgnUp/Button_Action";
import Terms_Conditions from "../Login_SIgnUp/Terms_Conditions";

function Login_SignUp() {
  return (
    <div className="flex-placecenter h-screen w-full">
      <LoginWelcome image="/images/image-0.jpg">
        <Overlay />
        <GoBack />
        <Header image="/images/kids_read.jpeg">
          <h3 className="flex-start w-full gap-1 text-center font-bold tracking-normal text-gray-500 capitalize">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="font-bold text-green-400"
            />
            <span className="text-[1.4rem] font-bold tracking-normal text-gray-500 capitalize">
              Lib Room
            </span>
          </h3>
        </Header>
        <MainContent>
          <div className="max-h-[30rem] w-[90%] overflow-hidden shadow-lg">
            <img
              src="../../public/images/image-1.jpeg"
              alt="images"
              className="h-full w-full rounded-md object-center"
            />
          </div>
        </MainContent>
        <MainContent>
          <Button_Action
            action="Get Started"
            b_style="bg-green-600/80 text-green-100"
            path="/login"
          />
          <Button_Action
            action="I already have an account"
            b_style="bg-gray-600/40 text-gray-500"
            path="/signup"
          />
          <Terms_Conditions />
        </MainContent>
      </LoginWelcome>
    </div>
  );
}

export default Login_SignUp;
