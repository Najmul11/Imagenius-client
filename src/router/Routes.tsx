import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/notFound/NotFound";
import App from "../App";
import Main from "../layouts/Main";
import MyProfile from "../pages/myProfile/MyProfile";
import DashBoard from "../layouts/DashBoard";
import EditProfile from "../pages/editProfile/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          {
            path: "/dashboard/my-profile",
            element: <MyProfile />,
          },
          {
            path: "/dashboard/edit-profile",
            element: <EditProfile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
