import { Navigate, useNavigate, Outlet } from "react-router-dom";

import Main from "./Main";

const ProtectedRoutes = ({ auth, user }) => {
  console.log(auth);
  return !auth.currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;