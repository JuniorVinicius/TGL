import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewBet from "../pages/NewBetPage";
import RegistrationPage from './../pages/RegistrationPage';
import ResetPage from './../pages/ResetPasswordPage';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newbet" element={<NewBet/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/reset" element={<ResetPage/>}/>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
