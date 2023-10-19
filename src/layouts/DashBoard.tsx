import { Link, Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";
import { adminMenus, userMenus } from "./Layout.constant";
import { useAppSelector } from "../redux/hook";

const DashBoard = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div>
      <Header menu="Dashboard" />
      <div className="min-h-screen">
        <div className="drawer z-20 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-20">
            <Outlet />
          </div>
          <div className="drawer-side z-20 ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full  bg-gradient-to-b   from-gradient2 to-white">
              {user?.role === "user" &&
                userMenus.map((menu, index) => (
                  <li key={index} className="font-semi hover:bg-gradient2">
                    <Link to={menu.to}>{menu.tag}</Link>
                  </li>
                ))}
              {user?.role === "admin" || user?.role === "super admin"
                ? adminMenus.map((menu, index) => (
                    <li key={index} className="font-semi hover:bg-gradient2">
                      <Link to={menu.to}>{menu.tag}</Link>
                    </li>
                  ))
                : null}
            </ul>

            <ul className="lg:flex justify-center items-center absolute bottom-0 py-5 px-8 gap-16 hidden w-80">
              <li className="">
                <Link
                  to={"/dashboard/my-profile"}
                  className="cursor-pointer bg-red-300"
                >
                  <img
                    src={user?.photoUrl}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
