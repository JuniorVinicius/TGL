
import { IBodyUser, ICreateUserResponse } from "../../../interfaces";
import instance from "../../axios.config";
import { IUserCreate } from "./interface";


const createNewUser = (): IUserCreate => {
  async function newUser(body: IBodyUser): Promise<ICreateUserResponse> {
    return instance.post("/user/create", body);
  }

  return { newUser };
};

export default createNewUser;
