import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./protectedRoutes/Protected";

import {
  HomePage,
  LoginPage,
  NewBet,
  RegistrationPage,
  ResetPage,
  ResetPasswordPage,
  Profile,
} from "../pages";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/newbet" element={<NewBet />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
