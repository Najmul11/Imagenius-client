/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  useEditImageMutation,
  useGetAllCategoriesQuery,
} from "../../../redux/api/apiSlice";
import { useEffect } from "react";
import { ICategory, IImage } from "./ManageImages";
import { useAppSelector } from "../../../redux/hook";
import toast from "react-hot-toast";

type IFormData = {
  title: string;
  price: number;
  category: ICategory;
};

type IOption = {
  _id: string;
  title: string;
  category: string;
};

const EditImageModal = ({ image }: { image: IImage }) => {
  const { control, handleSubmit, setValue } = useForm<IFormData>();

  const { data } = useGetAllCategoriesQuery(undefined);
  const [editImage] = useEditImageMutation();

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      setValue("category", data.data[0]._id);
    }
  }, [data, setValue]);

  const { accessToken } = useAppSelector((state) => state.accessToken);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await editImage({
      data,
      accessToken: accessToken,
      imageId: image?._id,
    })) as any;
    if (response.data) toast.success("Image Data Updated successfully");
    if (response.error) toast.error("Something went wrong");
  };
  return (
    <>
      <input type="checkbox" id="edit-image" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Image</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4  flex-col pt-8  "
          >
            <div className="flex flex-col gap-8">
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Title
                </label>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={image?.title}
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
                  Price
                </label>
                <Controller
                  name="price"
                  control={control}
                  defaultValue={image?.price}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      placeholder="Enter Price"
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
                  Category*
                </label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full focus:outline-none"
                    >
                      {data?.data.map((option: IOption) => (
                        <option key={option._id} value={option?._id}>
                          {option?.category}
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
                Update
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="edit-image">
          Close
        </label>
      </div>
    </>
  );
};

export default EditImageModal;
