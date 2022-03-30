import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";

import { Conteiner } from "../UI/Conteiner/Conteiner";

import { Inputs } from "./interfaces";
import resetPasswordSendEmail from "./../shared/services/auth/resetPassword/sendLink";

const ResetPage = () => {
  const navigate = useNavigate();
  const { send } = resetPasswordSendEmail();

  const handleBackPage = () => {
    navigate("/");
  };

  const handleResetPassword = async (props: Inputs) => {
    const { email } = props;

    try {
      const response = await send(JSON.stringify({ email }));
      await toast.promise(send(JSON.stringify({ email })), {
        pending: "Carregando...",
        success: "O link foi enviado para o seu email 👌",
        error: "Erro ao enviar o link, por favor cheque o email informado 🤯",
      });
      localStorage.setItem("token", response?.data.token);
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
