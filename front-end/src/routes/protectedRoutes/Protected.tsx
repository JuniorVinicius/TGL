import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("token");
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
