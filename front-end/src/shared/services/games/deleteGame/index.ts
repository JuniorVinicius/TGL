import instance from "@shared/services/axios.config";

const deleteGames = () => {
  async function remove(id: number) {
    return instance.delete(`/admin/delete-game/${id}`);
  }

  return { remove };
};

export default deleteGames;
