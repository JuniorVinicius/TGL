import { useNavigate } from "react-router-dom";

import { Conteiner } from "../UI/Conteiner/Conteiner";
import Footer from "../components/Footer";
import AplicationTitle from "../components/AplicationTitle";
import FormAuth from "../components/Form";
import resetPasswordSendNewPassword from "../shared/services/auth/resetPassword/sendPassword";

type Inputs = {
  name?: string
  email?: string
  password?: string
}

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const { send } = resetPasswordSendNewPassword()

  const handleBackPage = () => {
    navigate('/reset')
  }

  const handleResetPassword = async (props: Inputs) => {
    const { password } = props;

    try {
      const response = await send(JSON.stringify({ password }));
      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error);
    }

    navigate('/');
  }
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
          onSubmitForm={handleResetPassword}
          onGoTo={handleBackPage}
        />
      </Conteiner>

      <Footer />
    </>
  );
};

export default ResetPasswordPage;
