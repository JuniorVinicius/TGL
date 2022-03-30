import { IBodyEmail, ISendEmailResponse } from "../../../../interfaces";



export interface IEmailAuth{
    send: ({ email }: IBodyEmail) => Promise<ISendEmailResponse>;
  }