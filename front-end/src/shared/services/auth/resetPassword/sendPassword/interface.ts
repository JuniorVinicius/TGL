import { IBodyPassword, IResetPasswordResponse } from "../../../../interfaces";


export interface IResetPasswordAuth {
  send: ({ password }: IBodyPassword) => Promise<IResetPasswordResponse>;
}