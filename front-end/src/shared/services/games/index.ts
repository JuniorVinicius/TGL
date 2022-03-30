
import { ICartGames } from '../../interfaces';
import instance from './../axios.config';



const games = () => {
  async function listGames():Promise<ICartGames>{
    return instance.get('/cart_games');
  }

  return { listGames};
};

export default games;
