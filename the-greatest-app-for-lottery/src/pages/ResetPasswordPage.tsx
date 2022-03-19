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
          title="Reset password"
          buttonSubmitColor="var(--main-green)"
          buttonSubmitTitle="Send Link"
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
