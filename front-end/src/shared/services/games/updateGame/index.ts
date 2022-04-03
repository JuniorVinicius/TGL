import instance from "../../axios.config";

const updateGames = () => {
  async function update(body: any, id: number) {
    return instance.put(`/admin/update-game/${id}`, body);
  }
  return { update };
};

export default updateGames;
