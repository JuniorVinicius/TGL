import React from "react";
import { useNavigate } from "react-router-dom";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle/AplicationTitle";
import FormAuth from "../components/Form/Form";

type Inputs = {
  name?: string
  email?: string
  password?: string
}

const ResetPage = () => {
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
          title="Reset password"
          buttonSubmitColor="var(--main-green)"
          buttonSubmitTitle="Send Link"
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

export default ResetPage;
