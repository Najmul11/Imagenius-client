import { useState } from "react";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { menus } from "../header/Header.constant";
import { Link } from "react-router-dom";

const ResponsiveHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="relative lg:hidden z-50">
      <div className="flex justify-between items-center p-4 lg:hidden fixed bottom-0 w-full bg-gray-100 border-t  ">
        <h1 className="text-xl font-semi">{showMenu ? "" : "Najmul"}</h1>
        <div className="text-2xl" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose /> : <AiOutlineAppstore />}
        </div>
      </div>
      {showMenu && (
        <div className="fixed bottom-[57px] w-full ">
          <ul className="grid grid-cols-3 justify-items-center gap-y-10 px-4 py-8  font-semi text-sm bg-gray-100 rounded-t-3xl ">
            {menus.map((menu, index) => {
              const { title, id, icon } = menu;
              return (
                <li key={index}>
                  {title === "Home" ? (
                    <Link to="/" className="flex flex-col items-center">
                      {icon} {title}
                    </Link>
                  ) : title === "Journal" ? (
                    <Link to={id} className="flex flex-col items-center ">
                      {icon} {title}
                    </Link>
                  ) : (
                    <a href={`#${id}`} className="flex flex-col items-center">
                      {icon} {title}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveHeader;
