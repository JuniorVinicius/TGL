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

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleBackPage = () =>{
    navigate('/')
  }

  const handleRigister = (props: Inputs) => {
    console.log(props);
  }

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
          onSubmitForm={handleRigister}
          onGoTo={handleBackPage}

        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default RegistrationPage;
