import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const AdminRoutes = ({ children }: IProps) => {
  const { user } = useAppSelector((state) => state.user);

  const location = useLocation();
  if (user && (user.role === "super admin" || user.role === "admin")) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
