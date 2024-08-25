import { Navigate, Outlet } from "react-router";

const userInfo = true;
const PrivateRoute = () => {
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
