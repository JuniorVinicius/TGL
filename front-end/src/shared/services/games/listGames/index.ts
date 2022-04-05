import { ICartGames } from "@shared/interfaces";
import instance from "@shared/services/axios.config";




const games = () => {
  async function listGames():Promise<ICartGames>{
    return instance.get('/cart_games');
  }

  return { listGames};
};

export default games;
