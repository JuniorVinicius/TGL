
import { IBetResponse, IBodyGame } from '@shared/interfaces';
import instance from '@shared/services/axios.config';
import { IBetDatas } from './interface';


const saveBet = ():IBetDatas => {
  async function save(body:IBodyGame):Promise<IBetResponse> {
    return instance.post("/bet/new-bet", JSON.stringify(body));
  }

  return { save};
};

export default saveBet;
