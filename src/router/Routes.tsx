import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/notFound/NotFound";
import App from "../App";
import Main from "../layouts/Main";
import MyProfile from "../pages/myProfile/MyProfile";
import DashBoard from "../layouts/DashBoard";
import ManageImages from "../pages/admin/manageImages/ManageImages";
import ManageUsers from "../pages/admin/manageUsers/ManageUsers";
import ManageCategories from "../pages/admin/manageCategories/ManageCategories";
import ManageOrders from "../pages/admin/manageOrders/ManageOrders";
import PurchaseHistory from "../pages/user/purchaseHistory/PurchaseHistory";
import PendingOrders from "../pages/user/pendingOrders/PendingOrders";
import Cart from "../pages/user/cart/Cart";
import Images from "../pages/images/Images";
import ImageDetails from "../pages/images/ImageDetails";
import SearchImages from "../pages/images/SearchImages";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";

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
          {
            path: "/categories/:category",
            element: <Images />,
          },
          {
            path: "/search/:search",
            element: <SearchImages />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/my-profile",
            element: <MyProfile />,
          },
          {
            path: "/dashboard/purchase-history",
            element: <PurchaseHistory />,
          },
          {
            path: "/dashboard/pending-orders",
            element: <PendingOrders />,
          },
          {
            path: "/dashboard/cart",
            element: <Cart />,
          },

          {
            path: "/dashboard/admin/order-management",
            element: (
              <AdminRoutes>
                <ManageOrders />
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/admin/category-management",
            element: (
              <AdminRoutes>
                <ManageCategories />
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/admin/image-management",
            element: (
              <AdminRoutes>
                <ManageImages />
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/admin/user-management",
            element: (
              <AdminRoutes>
                <ManageUsers />
              </AdminRoutes>
            ),
          },
        ],
      },

      {
        path: "/images/:id",
        element: <ImageDetails />,
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
