import { Link, Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";

const DashBoard = () => {
  return (
    <div>
      <Header menu="Dashboard" />
      <div className="min-h-screen">
        <div className="drawer z-20">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-20">
            <Outlet />
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full  bg-gradient-to-b   from-gradient2 to-white">
              <li className="font-semi hover:bg-gradient2">
                <Link to={`/dashboard/my-profile`}>Profile</Link>
              </li>
              <li className="font-semi hover:bg-gradient2">
                <Link to={`/dashboard/my-profile`}>Profile</Link>
              </li>
              <li className="font-semi hover:bg-gradient2">
                <Link to={`/dashboard/my-profile`}>Profile</Link>
              </li>
              <li className="font-semi hover:bg-gradient2">
                <Link to={`/dashboard/my-profile`}>Profile</Link>
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
