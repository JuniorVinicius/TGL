import instance from "../../axios.config";

const createGames = () => {
  async function create(body: any) {
    return instance.post("/admin/create-game", body);
  }
  return { create };
};

export default createGames;
