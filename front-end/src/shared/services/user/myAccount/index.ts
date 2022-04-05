import { IAccountResponse } from "@shared/interfaces";
import instance from "@shared/services/axios.config";



const userData = () => {
    async function accountUser(): Promise<IAccountResponse> {
      return instance.get('/user/my-account');
    }
  
    return { accountUser};
  };
  
  export default userData;
  