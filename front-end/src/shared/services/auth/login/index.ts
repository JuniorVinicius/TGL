import { IBodyAuth, ILoginResponse } from "@shared/interfaces";
import instance from "@shared/services/axios.config";
import  { IAuth }  from "./interface";



const auth = (): IAuth => {
  async function login(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }

  return { login };
};

export default auth;
