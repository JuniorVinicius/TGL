import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FormAuth, AplicationTitle, Footer } from "@components/index";

import { Conteiner } from "@ui/index";

import { InputsResetEmail } from "./interfaces";
import { resetPasswordSendEmail } from "@shared/services";

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
        success: "O link foi enviado para o seu email",
      });
      navigate("/reset-password");
    } catch (error: any) {
      toast.error(error.data.message, {
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
