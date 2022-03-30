
import instance from './../../../axios.config';

const resetPasswordSendNewPassword = () => {
  const token = localStorage.getItem('token');
  async function send(body: any){
    return instance.post(`/reset/${token}`, body);
  }

  return { send };
};

export default resetPasswordSendNewPassword;
