
import { IBodyUpdate, IUpdateResponse } from './../../../interfaces';



export interface IUpdateUser {
    newDataUser: ({ email, name }: IBodyUpdate) => Promise<IUpdateResponse>;
}