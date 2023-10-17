import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { useAppDispatch } from "../../redux/hook";
import { clearAccessToken } from "../../redux/slices/accessTokenSlice";
import { clearUser } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";

const Actions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await dispatch(clearAccessToken());
    await dispatch(clearUser());
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <Link
          to={"/dashboard/edit-profile"}
          className=" flex items-center gap-3 bg-gradient bg-opacity-50 hover:bg-opacity-100  rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300"
        >
          <FaEdit className="text-2xl" />
          Edit Profile
        </Link>
        <Link
          to={"/dashboard/edit-profile"}
          className=" flex items-center gap-3 bg-gradient bg-opacity-50 hover:bg-opacity-100  rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300"
        >
          <FaEdit className="text-2xl" />
          Change Payment Method
        </Link>
        <Link
          to={"/dashboard/my-profile/change-password"}
          className=" flex items-center gap-3 bg-gradient bg-opacity-50 hover:bg-opacity-100  rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300"
        >
          <AiOutlineLock className="text-2xl" />
          Change Password
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className=" flex items-center justify-center gap-3 border-2 hover:bg-gradient border-gray-400 rounded-lg mt-10  p-2 px-5 text-[16px] font-semi  transition-all duration-300 text-red-500"
        >
          <MdOutlineLogout className="text-2xl" />
          Logout
        </button>
      </div>
    </>
  );
};

export default Actions;
