import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { clearAccessToken } from "../../../redux/slices/accessTokenSlice";
import { clearUser } from "../../../redux/slices/userSlice";
import toast from "react-hot-toast";

const ResponsiveHeader = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(clearAccessToken());
    await dispatch(clearUser());
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="px-5 py-2 fixed bottom-0 z-50  w-full lg:hidden shadow-sm border-t bg-gradient-to-t from-gradient to-white">
      <div
        className={`flex ${
          user ? "justify-between" : "justify-center"
        } text-white text-center`}
      >
        {user ? (
          <Link to={"/dashboard/my-profile"} className="text-[12px] text-black">
            <MdOutlineManageAccounts className="text-3xl text-black z-50 mx-auto" />
            Profile
          </Link>
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
