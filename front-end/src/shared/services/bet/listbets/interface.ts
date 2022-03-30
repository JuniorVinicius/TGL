import { IAllBet } from "../../../interfaces";


export interface IUserBets {
    listBets: (filter?:string) => Promise<IAllBet>;
}