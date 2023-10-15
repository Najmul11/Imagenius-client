import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const Register = () => {
  useTitle("Register");
  const [agreeToTC, setAgreeToTC] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-auth bg-no-repeat bg-center  bg-cover">
      <div className=" flex justify-center lg:justify-end lg:mr-20">
        <div className="bg-white mt-16 lg:mt-20 px-10 pt-10 pb-5">
          <div className="flex justify-center">
            <img src={brand} alt="" />
          </div>
          <form action="" className="flex gap-4  flex-col pt-8  ">
            <p className="font-semibold text-lg px-2 pb-2">
              Continue with Sign Up
            </p>
            <div className="flex flex-col gap-10">
              <div className="flex items-center ">
                <div className="relative  px-4">
                  <label
                    htmlFor="file-upload"
                    className="bg-gradient2 bg-opacity-40 transition-all duration-150 rounded-2xl px-4 py-1  cursor-pointer hover:bg-gradient2"
                  >
                    <span className="font-semi text-sm ">Choose Avatar</span>
                    <input
                      type="file"
                      id="file-upload"
                      className="absolute  w-full h-full opacity-0 "
                    />
                  </label>
                </div>

                <div className="shrink-0 ">
                  <img
                    className="h-20 w-20 object-cover rounded-full"
                    src="https://res.cloudinary.com/dkzqs1nr6/image/upload/v1697273709/Imagenius/categories/Nature_brk09i.jpg"
                    alt="Current profile photo"
                  />
                </div>
              </div>
              <div className="relative h-12 w-96">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  focus:outline-none"
                />
              </div>
              <div className="relative h-12 w-96">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  lg:w-96 focus:outline-none"
                />
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Password*
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full  lg:w-96 focus:outline-none"
                />
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Confirm Password*
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full  lg:w-96 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center font-semi">
              <input
                onClick={() => setAgreeToTC(!agreeToTC)}
                type="checkbox"
                className="checkbox checkbox-xs rounded-sm"
              />
              <p>
                I agree to{" "}
                <Link
                  to={"/terms-and-conditions"}
                  className="hover:text-red-500 underline"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>

            <div className="">
              <button
                disabled={!agreeToTC}
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                Sign Up
              </button>
            </div>
            <div className="text-center font-semi flex justify-center gap-x-1">
              <p>Already have an account? </p>
              <Link to={"/login"} className=" hover:text-red-500">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
