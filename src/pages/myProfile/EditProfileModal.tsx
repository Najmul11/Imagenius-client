import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";

type IFormData = {
  email: string;
  name: string;
};
const EditProfileModal = () => {
  const { user } = useAppSelector((state) => state.user);
  const { control, handleSubmit } = useForm<IFormData>();

  return (
    <>
      <input type="checkbox" id="edit-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Profile</h3>
          <form className="mt-10 flex flex-col gap-5">
            <div className="relative h-12">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                Name
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
            <div className="relative h-12 ">
              <label
                htmlFor=""
                className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
              >
                Email
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
                    className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
                  />
                )}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="edit-profile">
          Close
        </label>
      </div>
    </>
  );
};

export default EditProfileModal;
