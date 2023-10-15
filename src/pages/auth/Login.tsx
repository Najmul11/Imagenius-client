import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";
import useTitle from "../../hooks/useTitle";
const Login = () => {
  useTitle("Login");

  return (
    <div className="min-h-screen bg-auth bg-no-repeat bg-center  bg-cover">
      <div className=" flex justify-center lg:justify-end lg:mr-20">
        <div className="bg-white mt-24 lg:mt-32 px-10 pt-10 pb-5">
          <div className="flex justify-center">
            <img src={brand} alt="" />
          </div>
          <form action="" className="flex gap-4  flex-col pt-8  ">
            <p className="font-semibold text-lg px-2 pb-2">
              Continue with Sign In
            </p>
            <div className="flex flex-col gap-10">
              <div className="relative h-12 w-96">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  lg:w-96 focus:outline-none"
                />
              </div>
              <div>
                <div className="relative h-12 ">
                  <label
                    htmlFor=""
                    className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full  lg:w-96 focus:outline-none"
                  />
                </div>
                <div className="flex justify-end pt-2 ">
                  <Link
                    to={"/forget-password"}
                    className="font-semi hover:text-red-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi ">
                Sign In
              </button>
            </div>
            <div className="text-center font-semi flex justify-center gap-x-1">
              <p>Don't have an Account? </p>
              <Link to={"/signup"} className=" hover:text-red-500">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
