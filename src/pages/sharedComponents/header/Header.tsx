import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import brand from "../../../assets/brand.png";

const Header = () => {
  return (
    <div className=" bg-gradient-to-b   from-gradient to-white py-6">
      <div className=" flex justify-between items-center px-2">
        <label htmlFor="my-drawer" className="cursor-pointer">
          <div className="p-2 flex items-center gap-3">
            <AiOutlineMenu className="text-xl" />
            <span className="font-semi text-lg hidden lg:block">
              Browse Categories
            </span>
          </div>
        </label>
        <Link to={"/"}>
          <img src={brand} alt="" className="w-32 lg:w-44" />
        </Link>
        <Link
          to={"/login"}
          className="font-semi bg-black text-white px-5 py-1 rounded-full hover:shadow-lg hover:bg-opacity-80"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
