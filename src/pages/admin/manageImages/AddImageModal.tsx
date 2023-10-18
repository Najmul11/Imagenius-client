/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import avatar from "../../../assets/avatar.png";
import {
  useAddImageMutation,
  useGetAllCategoriesQuery,
} from "../../../redux/api/apiSlice";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hook";
import toast from "react-hot-toast";

type IFormData = {
  title: string;
  price: number;
  category: string;
  image?: File | undefined;
  imagePreview?: string;
};

type IOption = {
  _id: string;
  title: string;
  price: number;
  category: string;
};

const AddImageModal = () => {
  const { control, handleSubmit, setValue, watch } = useForm<IFormData>();

  const { data } = useGetAllCategoriesQuery(undefined);
  const [addImage] = useAddImageMutation();

  const { accessToken } = useAppSelector((state) => state.accessToken);

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      setValue("category", data.data[0].category);
    }
  }, [data, setValue]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);
      setValue("imagePreview", previewURL);
    }
  };
  const imagePreview = watch("imagePreview");
  const category = watch("category");

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const formData = new FormData();
    if (data.image) formData.append("file", data.image);
    formData.append("title", data.title);
    formData.append("price", data.price.toString());
    formData.append("category", data.category);

    const response = (await addImage({
      data: formData,
      accessToken: accessToken,
    })) as any;

    if (response.data) toast.success("Image added Successfully");
    if (response.error) toast.error("Something went wrong!");
  };
  return (
    <>
      <input type="checkbox" id="add-image" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add Image</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4  flex-col pt-8  "
          >
            <div className="flex flex-col gap-8">
              <div className="flex items-center ">
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
                  <img
                    className="h-20 w-20 object-cover"
                    src={imagePreview ? imagePreview : avatar}
                    alt="Current profile photo"
                  />
                </div>
              </div>
              <div className="relative h-12 ">
                <label
                  htmlFor=""
                  className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
                >
                  Title*
                </label>
                <Controller
                  name="title"
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
                  Price*
                </label>
                <Controller
                  name="price"
                  control={control}
                  defaultValue={5}
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
                  defaultValue={category}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg h-full w-full focus:outline-none"
                    >
                      {data?.data.map((option: IOption) => (
                        <option key={option._id} value={option?.category}>
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
                Add
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="add-image">
          Close
        </label>
      </div>
    </>
  );
};

export default AddImageModal;
