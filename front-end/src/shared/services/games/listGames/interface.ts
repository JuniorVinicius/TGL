import { ICartGames } from "../../../interfaces";


export interface IUserCreate {
    listGames: () => Promise<ICartGames>;
}