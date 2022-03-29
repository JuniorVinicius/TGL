import { useNavigate } from "react-router-dom";

import { Conteiner } from "./../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";
import { auth } from "../shared/services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = auth();

  const handleLogin = async (props: Inputs) => {
    const { email, password } = props;
    try {
      await toast.promise(
        login({ email, password }),
        {
          pending: "Carregando...",
          success: "Seja bem vindo 👌",
          error: "Erro ao autenticar 🤯",
        }
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
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
