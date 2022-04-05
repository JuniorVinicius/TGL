import { IAllBet } from '@shared/interfaces';
import instance from '@shared/services/axios.config';
import { IUserBets } from './interface';


const bets = ():IUserBets => {
  async function listBets(filter?:string): Promise<IAllBet>{
    return instance.get(`/bet/all-bets${filter && '?type%5B%5D='+filter}`);
  }

  return { listBets };
};

export default bets;
