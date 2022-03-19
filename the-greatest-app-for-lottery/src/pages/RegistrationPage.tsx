import React from "react";
import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";

import AplicationTitle from "../components/AplicationTitle/AplicationTitle";
import FormAuth from "../components/Form/Form";

const LoginPage = () => {
  return (
    <>
      <Conteiner>
        <AplicationTitle />
        <FormAuth
          marginTop={true}
          title="Registration"
          buttonSubmitColor="var(--main-green)"
          buttonSubmitTitle="Register"
          buttonActionTitle="Back"
          arrowSubmitRight={true}
          arrowActionLeft={true}
          sizeButton={56}
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default LoginPage;
