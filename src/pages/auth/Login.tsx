/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import brand from "../../assets/brand.png";
import useTitle from "../../hooks/useTitle";
import { useUserLoginMutation } from "../../redux/api/apiSlice";
import { useAppDispatch } from "../../redux/hook";
import { setAccessToken } from "../../redux/slices/accessTokenSlice";
import jwtDecode from "jwt-decode";
import { setUser } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";

type IFormData = {
  email: string;
  password: string;
};

export type IUser = {
  _id: string;
  email: string;
  name: string;
  photoUrl?: string;
  role: string;
} | null;

const Login = () => {
  useTitle("Login");
  const [userLogin] = useUserLoginMutation();

  const { handleSubmit, control } = useForm<IFormData>();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard/my-profile";

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await userLogin(data)) as any;
    if (response.data) {
      const accessToken = response.data?.data?.accessToken;
      await dispatch(setAccessToken(accessToken));
      const decodedToken: IUser = jwtDecode(accessToken);
      await dispatch(setUser(decodedToken));
      toast.success(`Welcome Back ${decodedToken?.name}`);
      navigate(from, { replace: true });
    }
    if (response.error) toast.error(response.error.data.message);
  };

  return (
    <div className="min-h-screen bg-auth bg-no-repeat bg-center bg-cover">
      <div className="flex justify-center lg:justify-end lg:mr-20">
        <div className="bg-white mt-16 lg:mt-20 px-10 pt-10 pb-5">
          <div className="flex justify-center">
            <img src={brand} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4 flex-col pt-8"
          >
            <p className="font-semibold text-lg px-2 pb-2">
              Continue with Sign In
            </p>
            <div className="flex flex-col gap-10">
              <div className="relative h-12 w-96">
                <label className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi">
                  Email*
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Email Address"
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full lg:w-96 focus:outline-none"
                    />
                  )}
                />
              </div>
              <div>
                <div className="relative h-12">
                  <label className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi">
                    Password*
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full lg:w-96 focus:outline-none"
                      />
                    )}
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    to="/forget-password"
                    className="font-semi hover:text-red-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200 rounded-lg font-semi"
              >
                Sign In
              </button>
            </div>
            <div className="text-center font-semi flex justify-center gap-x-1">
              <p>Don't have an Account? </p>
              <Link to="/signup" className="hover:text-red-500">
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
