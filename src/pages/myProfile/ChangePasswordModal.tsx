/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import toast from "react-hot-toast";

type IFormData = {
  oldPassword: string;
  newPassword: string;
};
const ChangePasswordModal = () => {
  const { control, handleSubmit } = useForm<IFormData>();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const { accessToken } = useAppSelector((state) => state.accessToken);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await changePassword({
      data,
      accessToken: accessToken,
    })) as any;

    if (response.data) toast.success("Password has been changed Successfully");
    if (response.error) toast.error("Incorrect Old Password");
  };

  return (
    <>
      <input type="checkbox" id="change-password" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Change Password</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-5"
          >
            <div className="relative h-12">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                Old Password*
              </label>
              <Controller
                name="oldPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Old Password"
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full  focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="relative h-12 ">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                New Passwoed*
              </label>
              <Controller
                name="newPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="New Password"
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="">
              <button
                disabled={isLoading}
                type="submit"
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="change-password">
          Close
        </label>
      </div>
    </>
  );
};

export default ChangePasswordModal;
