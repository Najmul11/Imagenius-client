import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";

import { Link } from "react-router-dom";

const ResponsiveHeader = () => {
  const user = " ";

  const handleLogout = () => {};
  return (
    <div className="px-5 py-2 fixed bottom-0  w-full lg:hidden shadow-sm border-t bg-gradient-to-t from-gradient to-white">
      <div
        className={`flex ${
          user ? "justify-between" : "justify-center"
        } text-white text-center`}
      >
        {user ? (
          <button className="text-[12px] text-black">
            <MdOutlineManageAccounts className="text-3xl text-black z-50 mx-auto" />
            Profile
          </button>
        ) : (
          <Link to={"/account/login"} className="text-[12px] text-black">
            <MdOutlineManageAccounts className="text-3xl text-black z-50 mx-auto" />
            Account
          </Link>
        )}

        {user && (
          <button onClick={handleLogout} className="text-[12px] text-black">
            <MdOutlineLogout className="text-3xl text-black z-50 mx-auto" />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default ResponsiveHeader;
