import React from "react";
import { Conteiner } from "./../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";

import AplicationTitle from "../components/AplicationTitle/AplicationTitle";
import FormAuth from "../components/Form/Form";

const LoginPage = () => {
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
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default LoginPage;
