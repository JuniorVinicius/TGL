import { IAccountResponse } from "../../../interfaces";


export interface IUserCreate {
    accountUser: () => Promise<IAccountResponse>;
}