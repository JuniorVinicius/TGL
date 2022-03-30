import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";

import { Conteiner } from "../UI/Conteiner/Conteiner";

import resetPasswordSendNewPassword from "../shared/services/auth/resetPassword/sendPassword";

type Inputs = {
  name?: string;
  email?: string;
  password?: string;
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const { send } = resetPasswordSendNewPassword();

  const handleBackPage = () => {
    navigate("/reset");
  };

  const handleResetPassword = async (props: Inputs) => {
    const { password } = props;

    try {
      await toast.promise(send(JSON.stringify({ password })), {
        pending: "Carregando...",
        success: "Senha alterada com sucesso 👌",
        error: "Erro ao cadastrar a nova senha 🤯",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };
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
          fontSizeButton={28}
          onSubmitForm={handleResetPassword}
          onGoTo={handleBackPage}
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default ResetPasswordPage;
