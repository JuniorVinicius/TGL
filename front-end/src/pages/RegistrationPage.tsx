import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import FormAuth from "../components/Form";
import AplicationTitle from "../components/AplicationTitle";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import createNewUser from "./../shared/services/user/index";
import { InputsCreateUser } from "./interfaces";

const RegistrationPage = () => {
  const { newUser } = createNewUser();
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate("/");
  };

  const handleRigister = async (props: InputsCreateUser) => {
    const { name, email, password } = props;
    try {
      await toast.promise(newUser({ name, email, password }), {
        pending: "Carregando...",
        success: "Cadastrado com sucesso👌",
        error: "Erro ao cadastrar 🤯",
      });
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
