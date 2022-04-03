import auth from "./auth/login/index";
import resetPasswordSendEmail from "./auth/resetPassword/sendLink/index";
import resetPasswordSendNewPassword from "./auth/resetPassword/sendPassword/index";
import bets from "./bet/listbets/index";
import saveBet from "./bet/newbets/index";
import games from './games/listGames/index';
import createNewUser from "./user/createUser/index";
import userData from "./user/myAccount/index";
import updateUser from "./user/updateUser/index";


export {
  auth,
  resetPasswordSendEmail,
  resetPasswordSendNewPassword,
  bets,
  saveBet,
  games,
  createNewUser,
  userData,
  updateUser,
};
