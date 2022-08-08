import { Navigate, useNavigate, Outlet } from "react-router-dom";

import Main from "./Main";

const ProtectedRoutes = ({ auth, user }) => {
  //   console.log(auth);
  //   If there isnt a signed-in user it will allow you to naviate to the Outlet>. If there is, it will redirect to the main page.""
  return !auth.currentUser ? <Outlet /> : <Navigate to="/" />;
  // return !auth.currentUser && <Outlet />;
};

export default ProtectedRoutes;
