import instance from './../../axios.config';

const bets = () => {
  async function listBets(filter?:string){
    return instance.get(`/bet/all-bets${filter && '?type%5B%5D='+filter}`);
  }

  return { listBets };
};

export default bets;
