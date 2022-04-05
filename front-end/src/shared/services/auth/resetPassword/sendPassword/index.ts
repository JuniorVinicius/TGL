
import { IBodyPassword, IResetPasswordResponse } from '@shared/interfaces';
import instance from '@shared/services/axios.config';
import { IResetPasswordAuth } from './interface';

const resetPasswordSendNewPassword = (): IResetPasswordAuth => {
  const token = localStorage.getItem('resetToken');
  async function send(body: IBodyPassword): Promise<IResetPasswordResponse> {
    return instance.post(`/reset/${token}`, body);
  }

  return { send };
};

export default resetPasswordSendNewPassword;
