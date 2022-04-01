import { IAccountResponse } from "../../../interfaces";
import instance from "../../axios.config";



const userData = () => {
    async function accountUser(): Promise<IAccountResponse> {
      return instance.get('/user/my-account');
    }
  
    return { accountUser};
  };
  
  export default userData;
  