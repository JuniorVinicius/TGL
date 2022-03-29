import React from "react";
import { useNavigate } from "react-router-dom";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";
import { toast } from 'react-toastify';
import createNewUser from './../shared/services/user/index';


type Inputs = {
  name?: string
  email?: string
  password?: string
}

const RegistrationPage = () => {

  const {newUser} = createNewUser()
  const navigate = useNavigate();

  const handleBackPage = () =>{
    navigate('/')
  }

  const handleRigister = async (props: Inputs) => {
      const { name, email, password } = props;
      try {
        await toast.promise(
          newUser({name, email, password }),
          {
            pending: 'Carregando...',
            success: 'Cadastrado com sucesso👌',
            error: 'Erro ao cadastrar 🤯'
          }
      );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  

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
