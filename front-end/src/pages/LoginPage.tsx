import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form/FormLogin";

import { Conteiner } from "./../UI/Conteiner/Conteiner";

import { InputsLogin } from "./interfaces";
import auth from "../shared/services/auth/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = auth();

  const handleLogin = async (props: InputsLogin) => {
    const { email, password } = props;
    try {
      await toast.promise(login({ email, password }), {
        pending: "Loading...",
        success: "Sucess👌",
      });
      navigate("/home");
    } catch (error: any) {
      toast.error(error.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleForgetPassword = () => {
    navigate("/reset");
  };
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <Conteiner>
        <AplicationTitle />
        <FormAuth
          title="Authentication"
          buttonSubmitColor="var(--main-green)"
          buttonSubmitTitle="Log In"
          buttonActionTitle="Sign Up"
          arrowSubmitRight={true}
          arrowActionRight={true}
          onSubmitForm={handleLogin}
          onForgetPassword={handleForgetPassword}
          onGoTo={handleSignUp}
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default LoginPage;
