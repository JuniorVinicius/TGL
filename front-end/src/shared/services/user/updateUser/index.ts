import { IBodyUpdate, IUpdateResponse } from "@shared/interfaces";
import instance from "@shared/services/axios.config";
import { IUpdateUser } from "./interface";

const updateUser = (): IUpdateUser => {
  async function newDataUser(body: IBodyUpdate): Promise<IUpdateResponse> {
    return instance.put("/user/update", body);
  }

  return { newDataUser };
};

export default updateUser;
