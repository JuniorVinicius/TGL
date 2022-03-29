
import instance from './../../../axios.config';

const resetPasswordSendNewPassword = () => {
  async function send(body: any){
    return instance.post("/reset", body);
  }

  return { send };
};

export default resetPasswordSendNewPassword;
