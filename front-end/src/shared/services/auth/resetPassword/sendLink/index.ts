
import instance from './../../../axios.config';

const resetPasswordSendEmail = () => {
  async function send(body: any){
    return instance.post("/reset", body);
  }

  return { send };
};

export default resetPasswordSendEmail;
