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
import { server } from "../Axios/api";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

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
          <MainInputs path="/login">
            <Input icon={faUser} placeholder="Full name" name="fullName" />
            <Input
              icon={faEnvelope}
              placeholder="Email"
              type="email"
              name="email"
            />
            <Input
              icon={faUserGroup}
              placeholder="Department(eg. Computer Engineering)"
              name="department"
            />
            <Input
              icon={faKey}
              placeholder="password"
              type="password"
              name="password"
            />
            <Input
              icon={faKey}
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
            />

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

export async function actionFormLogin({ request, params }) {
  const data = await request.formData();
  const userInput = Object.fromEntries(data.entries());

  console.log("your input data ", userInput);

  try {
    const { data } = await server.post("/user/register", userInput);
    console.log(data);
    toast.success(data.message);
    return redirect("/");
  } catch (error) {
    toast.error(error?.message || "Failed to logged in");
    throw new Response(JSON.stringify(error?.message), { status: 404 });
  }

  // console.log(userInput);
}

export default Login;
