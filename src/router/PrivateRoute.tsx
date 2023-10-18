import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";
import { useGetProfileQuery } from "../redux/api/apiSlice";

type IProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useGetProfileQuery(undefined);
  const location = useLocation();

  if (!user || isLoading) {
    return <></>;
  }
  if (user && !isLoading) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
