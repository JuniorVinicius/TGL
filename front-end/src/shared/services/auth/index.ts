import { IBodyAuth } from "./../../interfaces";
import instance from "./../axios.config";
import { IAuth } from "./interface";
import { ILoginResponse } from './../../interfaces';

const auth = (): IAuth => {
  async function login(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }

  return { login };
};

export default auth;
