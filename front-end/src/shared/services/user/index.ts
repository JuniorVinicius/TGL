import instance from "./../axios.config";


const createNewUser = () => {
  async function newUser(body: any){
    return instance.post("/user/create", body);
  }

  return { newUser };
};

export default createNewUser;
