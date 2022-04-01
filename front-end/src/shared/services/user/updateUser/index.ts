
import { IBodyUpdate, IUpdateResponse } from '../../../interfaces';
import instance from './../../axios.config';
import { IUpdateUser } from './interface';



const updateUser = ():IUpdateUser => {
    async function newDataUser(body: IBodyUpdate): Promise<IUpdateResponse>{
      return instance.put("/user/update", body);
    }
  
    return { newDataUser };
  };
  
  export default updateUser;
  