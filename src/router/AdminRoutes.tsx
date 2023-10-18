import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";
import { useGetProfileQuery } from "../redux/api/apiSlice";

type IProps = {
  children: ReactNode;
};

const AdminRoutes = ({ children }: IProps) => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useGetProfileQuery(undefined);

  const location = useLocation();
  if (isLoading) return <></>;

  if (user && (user.role === "super admin" || user.role === "admin")) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
