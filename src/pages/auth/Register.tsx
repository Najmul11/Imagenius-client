/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import brand from "../../assets/brand.png";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import avatar from "../../assets/avatar.png";
import { useCreateUserMutation } from "../../redux/api/apiSlice";
import toast from "react-hot-toast";
import { registerSchema } from "../../yup/Schemas";

type IFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  image?: File | undefined;
  name: string;
  imagePreview?: string;
};

const Register = () => {
  useTitle("Register");
  const [agreeToTC, setAgreeToTC] = useState<boolean>(false);
  const { control, handleSubmit, setValue, watch, formState } =
    useForm<IFormData>({ resolver: yupResolver(registerSchema) });
  const [createUser, { isLoading }] = useCreateUserMutation();

  const navigate = useNavigate();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);
      setValue("imagePreview", previewURL);
    }
  };
  const imagePreview = watch("imagePreview");

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const formData = new FormData();
    if (data.image) formData.append("file", data.image);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const response = (await createUser(formData)) as any;

    if (response.data) {
      navigate("/");
      toast.success("You have signed up successfully! Now login");
    }
    if (response.error) toast.error(response.error.data.message);
  };

  return (
    <div className="min-h-screen bg-auth bg-no-repeat bg-center  bg-cover">
      <div className=" flex justify-center lg:justify-end lg:mr-20">
        <div className="bg-white mt-16 lg:mt-20 px-10 pt-10 pb-5">
          <div className="flex justify-center">
            <img src={brand} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4  flex-col pt-8  "
          >
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
                      name="image"
                      onChange={(e) => handleFileChange(e)}
                      type="file"
                      id="file-upload"
                      className="absolute  w-full h-full opacity-0 "
                    />
                  </label>
                </div>

                <div className="shrink-0 ">
                  <img
                    className="h-20 w-20 object-cover rounded-full"
                    src={imagePreview ? imagePreview : avatar}
                    alt="Current profile photo"
                  />
                </div>
              </div>
              <div className="relative h-12 w-96">
                <label
                  htmlFor=""
                  className={`absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi ${
                    formState.errors.name ? "text-red-500" : ""
                  }`}
                >
                  {formState.errors.name
                    ? formState.errors.name.message
                    : "Name*"}
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Name"
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  focus:outline-none"
                    />
                  )}
                />
              </div>
              <div className="relative h-12 w-96">
                <label
                  htmlFor=""
                  className={`absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi ${
                    formState.errors.email ? "text-red-500" : ""
                  }`}
                >
                  {formState.errors.email
                    ? formState.errors.email.message
                    : "Email*"}
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
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  lg:w-96 focus:outline-none"
                    />
                  )}
                />
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className={`absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi ${
                    formState.errors.password ? "text-red-500" : ""
                  }`}
                >
                  {formState.errors.password
                    ? formState.errors.password.message
                    : "Password*"}
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
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full  lg:w-96 focus:outline-none"
                    />
                  )}
                />
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className={`absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi ${
                    formState.errors.confirmPassword ? "text-red-500" : ""
                  }`}
                >
                  {formState.errors.confirmPassword
                    ? formState.errors.confirmPassword.message
                    : "Confirm Password*"}
                </label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full  lg:w-96 focus:outline-none"
                    />
                  )}
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
                type="submit"
                disabled={!agreeToTC || isLoading}
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sign Up"
                )}
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
