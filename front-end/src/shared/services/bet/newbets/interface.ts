import { IBetResponse, IBodyGame } from "../../../interfaces";



export interface IBetDatas {
    save: (body:IBodyGame)=>Promise<IBetResponse>;
}