import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import brand from "../../../assets/brand.png";
import ResponsiveHeader from "./ResponsiveHeader";
import { useAppSelector } from "../../../redux/hook";

const Header = ({ menu }: { menu: string }) => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className=" bg-gradient-to-b   from-gradient to-white py-6">
      <div className=" flex justify-between items-center px-2">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <div className="p-2 flex items-center gap-3">
            <AiOutlineMenu className="text-xl" />
            <span className="font-semi text-lg hidden lg:block">{menu}</span>
          </div>
        </label>
        <Link to={"/"}>
          <img src={brand} alt="" className="w-32 lg:w-44" />
        </Link>
        {user ? (
          <Link
            to={"/dashboard/my-profile"}
            className="font-semi  px-3 py-1   hover:bg-opacity-80"
          >
            <img
              src={user?.photoUrl}
              alt=""
              className="w-10 h-10 rounded-full hover:shadow-xl"
            />
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="font-semi bg-black text-white px-5 py-1 rounded-full hover:shadow-lg hover:bg-opacity-80"
          >
            Sign In
          </Link>
        )}
      </div>
      <ResponsiveHeader />
    </div>
  );
};

export default Header;
