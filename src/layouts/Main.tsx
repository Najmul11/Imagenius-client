import { Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";
import SearchBar from "../pages/sharedComponents/searchBar/SearchBar";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <SearchBar />
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
