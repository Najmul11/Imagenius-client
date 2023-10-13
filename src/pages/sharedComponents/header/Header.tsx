import { menus } from "./Header.constant";
import { Link } from "react-router-dom";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  return (
    <>
      <div className=" fixed lg:w-4/6 lg:mx-[16.67%] hidden lg:block">
        <div className="flex justify-between items-center h-14">
          <h1 className="text-xl font-semi">Najmul</h1>

          <ul className="flex gap-10 font-semi text-sm ">
            {menus.map((menu, index) => {
              const { title, id, icon } = menu;
              return (
                <li key={index} className="hover:text-ts duration-200">
                  {title === "Home" ? (
                    <Link to="/">{title}</Link>
                  ) : title === "Journal" ? (
                    <Link to={id} className="flex items-center">
                      {icon} {title}
                    </Link>
                  ) : (
                    <a href={`#${id}`}>{title}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ResponsiveHeader />
    </>
  );
};

export default Header;
