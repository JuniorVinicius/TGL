import React from "react";
import { useNavigate } from "react-router-dom";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";
import { Inputs } from "./interfaces";


const ResetPage = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate('/')
  }

  const handleResetPassword = (props: Inputs) => {
    navigate('/reset-password');
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
