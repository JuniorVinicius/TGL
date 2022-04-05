import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer, AplicationTitle, FormAuth } from "@components/index";

import { Conteiner } from "@ui/index";

import { InputsLogin } from "./interfaces";
import { auth } from "@shared/services";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = auth();

  const handleLogin = async (props: InputsLogin) => {
    const { email, password } = props;
    try {
      await toast.promise(login({ email, password }), {
        pending: "Carregando...",
        success: "Sucesso👌",
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
