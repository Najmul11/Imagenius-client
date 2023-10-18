import { BiShoppingBag } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { MdOutlineFeed, MdOutlineLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { clearAccessToken } from "../../../redux/slices/accessTokenSlice";
import { clearUser } from "../../../redux/slices/userSlice";
import toast from "react-hot-toast";

const CallToActions = () => {
  const { cart } = useAppSelector((state) => state.cart);
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
    <div className="fixed bottom-[70px] lg:bottom-5 right-5 z-[110] flex  gap-3">
      {user && (
        <Link to={"/dashboard/cart"} className="indicator ">
          <span className="indicator-item badge bg-gray-600 text-white ">
            {cart.length}
          </span>
          <button className=" flex items-center justify-center  bg-black active:bg-gradient2 text-white  rounded-full h-[50px] w-[50px]  shadow-line cursor-pointer ">
            <BiShoppingBag className="text-3xl" />
          </button>
        </Link>
      )}

      {user && user.role === "user" && (
        <div className="flex justify-end ">
          <label
            htmlFor="feedback"
            className=" flex items-center justify-center  bg-black active:bg-gradient2 text-white  rounded-full h-[50px] w-[50px]  shadow-line cursor-pointer "
          >
            <MdOutlineFeed className="text-3xl" />
          </label>
        </div>
      )}

      {user && (
        <div className=" ">
          <button
            onClick={handleLogout}
            className=" flex items-center justify-center  bg-black active:bg-gradient2 text-white  rounded-full h-[50px] w-[50px]  shadow-line cursor-pointer "
          >
            <MdOutlineLogout className="text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CallToActions;

// fixed bottom-[70px] right-36 z-[111]

// fixed bottom-[70px] right-5 z-[111]

// fixed bottom-[70px] right-16 z-[110]
