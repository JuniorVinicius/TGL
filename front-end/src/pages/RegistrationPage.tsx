import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AplicationTitle, FormAuth, Footer } from "../components";

import { Conteiner } from "../UI";
import { createNewUser } from "../shared/services";
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
        success: "Sucesso",
      });
      navigate("/");
    } catch (error: any) {
      toast.error(error.data.error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
