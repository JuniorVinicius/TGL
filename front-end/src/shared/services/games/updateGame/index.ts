import instance from "@shared/services/axios.config";
import { IGameBody } from '@shared/interfaces';

const updateGames = () => {
  async function update(body: IGameBody, id: number): Promise<any> {
    return instance.put(`/admin/update-game/${id}`, body);
  }
  return { update };
};

export default updateGames;
