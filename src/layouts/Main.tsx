import { Link, Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";
import SearchBar from "../pages/sharedComponents/searchBar/SearchBar";
import { useGetAllCategoriesQuery } from "../redux/api/apiSlice";
import { ICategory } from "../pages/home/popular/SingleCategory";

const Main = () => {
  const { data } = useGetAllCategoriesQuery(undefined);

  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="drawer z-20">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content z-20">
            <SearchBar />
            <Outlet />
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full  bg-gradient-to-b   from-gradient2 to-white">
              {data?.data.map((category: ICategory) => (
                <li className="font-semi hover:bg-gradient2">
                  <Link
                    to={`/categories/${category.category}`}
                    key={category._id}
                  >
                    {category.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
