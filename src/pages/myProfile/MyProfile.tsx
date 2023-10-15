import { useAppSelector } from "../../redux/hook";
import bkash from "../../assets/bkash.png";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import avatar from "../../assets/avatar.png";

const MyProfile = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="w-1/2 mx-auto  my-20">
      <div className="flex flex-col gap-10 ">
        <div className="flex  w-1/2 mx-auto justify-center ">
          <img
            src={user?.photoUrl ? user.photoUrl : avatar}
            alt="profile"
            className="w-44 h-44 rounded-full"
          />
        </div>
        <div className="w-1/2 mx-auto">
          <p className="font-semi text-lg ">{user?.name}</p>
          <p className="  text-md ">{user?.email}</p>
          <div className="flex justify-between items-center mt-5 bg-gradient bg-opacity-40 p-2 rounded">
            <span className="text-sm font-semi">Payment Method:</span>
            <img src={bkash} alt="" className="w-20" />
          </div>
          <div className="flex justify-between items-center gap-3 mt-10">
            <Link
              to={"/dashboard/edit-profile"}
              className=" flex items-center gap-3 bg-gradient bg-opacity-50 hover:bg-opacity-100  rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300"
            >
              <FaEdit className="text-2xl" />
              Edit Profile
            </Link>
            <button className=" flex items-center gap-3 bg-gray-400 bg-opacity-50 hover:bg-opacity-100  hover:text-white rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300">
              <MdOutlineLogout className="text-2xl" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
