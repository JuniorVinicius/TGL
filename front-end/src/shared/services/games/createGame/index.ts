import instance from "@shared/services/axios.config";
import { IGameBody } from '@shared/interfaces';

const createGames = () => {
  async function create(body: IGameBody): Promise<any> {
    return instance.post("/admin/create-game", body);
  }
  return { create };
};

export default createGames;
