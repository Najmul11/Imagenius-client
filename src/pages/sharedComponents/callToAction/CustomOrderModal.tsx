/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppSelector } from "../../../redux/hook";
import { IUser } from "../../auth/Login";
import { ChangeEvent } from "react";

type IFormData = {
  service: string;
  image?: File | undefined;
  imagePreview?: string;
};

const CustomOrderModal = ({ user }: { user: IUser }) => {
  const { control, handleSubmit, reset, watch, setValue } =
    useForm<IFormData>();
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    if (!user) return toast.error("Please Login before ordering seervice");
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);
      setValue("imagePreview", previewURL);
    }
  };

  const imagePreview = watch("imagePreview");

  const services = ["Blur", "Remove Background"];

  return (
    <>
      <input type="checkbox" id="custom-order" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Custom Image Service</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4  flex-col pt-8  "
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-center flex-col lg:flex-row gap-3">
                <div className="relative  px-4">
                  <label
                    htmlFor="file-upload"
                    className="bg-gradient2 bg-opacity-40 transition-all duration-150 rounded-2xl px-4 py-1  cursor-pointer hover:bg-gradient2"
                  >
                    <span className="font-semi text-sm ">Select Image</span>
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
                  {imagePreview && (
                    <img
                      className="h-56 w-56 object-cover"
                      src={imagePreview ? imagePreview : ""}
                      alt="custom-image"
                    />
                  )}
                </div>
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Service*
                </label>
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full focus:outline-none"
                    >
                      {services.map((option: string, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="custom-order">
          Close
        </label>
      </div>
    </>
  );
};

export default CustomOrderModal;
