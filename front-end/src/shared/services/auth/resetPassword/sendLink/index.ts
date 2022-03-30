import instance from './../../../axios.config';
import { IBodyEmail, ISendEmailResponse } from '../../../../interfaces';
import { IEmailAuth } from './interface';

const resetPasswordSendEmail = ():IEmailAuth => {
  async function send(body: IBodyEmail): Promise<ISendEmailResponse> {
    return instance.post("/reset", body);
  }

  return { send };
};

export default resetPasswordSendEmail;
