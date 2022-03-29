import React from "react";
import { useNavigate } from "react-router-dom";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";

type Inputs = {
  name?: string
  email?: string
  password?: string
}

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate('/')
  }

  const handleResetPassword = (props: Inputs) => {
    console.log(props);
  }
  return (
    <>
      <Conteiner>
        <AplicationTitle />
        <FormAuth
          marginTop={true}
          title="New password"
          buttonSubmitColor="var(--main-green)"
          buttonSubmitTitle="Reset password"
          buttonActionTitle="Back"
          arrowSubmitRight={true}
          arrowActionLeft={true}
          sizeButton={56}
          onSubmitForm={handleResetPassword}
          onGoTo={handleBackPage}
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default ResetPasswordPage;
