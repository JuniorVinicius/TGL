import React from "react";
import { useNavigate } from "react-router-dom";

import { Conteiner } from "./../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle/AplicationTitle";
import FormAuth from "../components/Form/Form";

type Inputs = {
  name?: string
  email?: string
  password?: string
}

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (props: Inputs) => {
    // navigate('/home');
    console.log(props);
  }
  const handleForgetPassword = () => {
    navigate('/reset');
  }
  const handleSignUp = () => {
    navigate('/register');
  }

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
