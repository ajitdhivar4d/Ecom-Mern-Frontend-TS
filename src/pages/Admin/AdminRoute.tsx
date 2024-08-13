import { Navigate, Outlet } from "react-router";

interface AdminProps {
  userInfo: boolean;
  isAdmin: boolean;
}

const AdminRoute = ({ isAdmin = true, userInfo = true }: AdminProps) => {
  return userInfo && isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
