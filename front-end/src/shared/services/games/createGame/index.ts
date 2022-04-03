import instance from "../../axios.config";
import { IGameBody } from './../../../interfaces';

const createGames = () => {
  async function create(body: IGameBody): Promise<any> {
    return instance.post("/admin/create-game", body);
  }
  return { create };
};

export default createGames;
