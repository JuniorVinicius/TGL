import instance from '@shared/services/axios.config';
import { IBodyEmail, ISendEmailResponse } from '@shared/interfaces';
import { IEmailAuth } from './interface';

const resetPasswordSendEmail = ():IEmailAuth => {
  async function send(body: IBodyEmail): Promise<ISendEmailResponse> {
    return instance.post("/reset", body);
  }

  return { send };
};

export default resetPasswordSendEmail;
