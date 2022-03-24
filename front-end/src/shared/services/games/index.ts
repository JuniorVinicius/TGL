
import instance from './../axios.config';



const games = () => {
  async function listGames(){
    return instance.get('/cart_games');
  }

  return { listGames};
};

export default games;
