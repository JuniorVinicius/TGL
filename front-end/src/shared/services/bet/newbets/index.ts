
import instance from './../../axios.config';


const saveBet = () => {
  async function save(body:any) {
    return instance.post("/bet/new-bet", body);
  }

  return { save};
};

export default saveBet;
