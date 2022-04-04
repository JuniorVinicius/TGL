import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FormAuth, AplicationTitle, Footer } from "../components";

import { Conteiner } from "../UI";
import { resetPasswordSendNewPassword } from "../shared/services";
import { IIputPassword } from "./interfaces";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const { send } = resetPasswordSendNewPassword();

  const handleBackPage = () => {
    navigate("/reset");
  };

  const handleResetPassword = async (props: IIputPassword) => {
    const { password } = props;

    try {
      await toast.promise(send({ password }), {
        pending: "Carregando...",
        success: "Senha alterada com sucesso",
        error: "Erro ao cadastrar a nova senha",
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
