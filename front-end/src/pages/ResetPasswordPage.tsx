import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form/FormLogin";

import { Conteiner } from "../UI/Conteiner/Conteiner";

import { InputsResetEmail } from "./interfaces";
import resetPasswordSendEmail from "./../shared/services/auth/resetPassword/sendLink";

const ResetPage = () => {
  const navigate = useNavigate();
  const { send } = resetPasswordSendEmail();

  const handleBackPage = () => {
    navigate("/");
  };

  const handleResetPassword = async (props: InputsResetEmail) => {
    const { email } = props;

    try {
      await toast.promise(send({ email }), {
        pending: "Carregando...",
        success: "O link foi enviado para o seu email 👌",
        error: "Erro ao enviar o link, por favor cheque o email informado 🤯",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    navigate("/reset-password");
  };
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
