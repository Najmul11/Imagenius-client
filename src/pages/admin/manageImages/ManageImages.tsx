/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetAllImagesQuery } from "../../../redux/api/apiSlice";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsCalendarPlus } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hook";
import AddImageModal from "./AddImageModal";
import EditImageModal from "./EditImageModal";
import { ChangeEvent, useState } from "react";
import DeleteModal from "./DeleteModal";
import Pagination from "../../sharedComponents/Pagination/Pagination";

export type ICategory = {
  _id: string;
  category: string;
  image: string;
  popular: boolean;
};

export type IImage = {
  _id: string;
  image: string;
  publicId: string;
  title: string;
  price: number;
  category: ICategory;
} | null;

const ManageImages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetAllImagesQuery({ limit: 24, page: currentPage });

  const { user: usingAs } = useAppSelector((state) => state.user);

  const [image, setImage] = useState<IImage>(null);

  const handleModalData = (image: IImage, e: ChangeEvent) => {
    e.stopPropagation();
    setImage(image);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="lg:w-4/5 mx-auto px-2 mb-10">
      <div className="mb-10 ">
        <h2 className="text-center rounded-lg py-2">
          <span className="bg-gradient2 px-2 font-semi rounded-lg text-red-500">
            {usingAs?.role}:
          </span>{" "}
          <span className="font-semi text-lg ">{usingAs?.name}</span>
        </h2>
      </div>
      <div className="mb-10 flex justify-center ">
        <label
          htmlFor="add-image"
          className=" flex items-center gap-3 bg-gradient bg-opacity-50 hover:bg-opacity-100  rounded-lg  p-2 px-5 text-[16px] font-semi  transition-all duration-300 cursor-pointer"
        >
          <BsCalendarPlus className="text-2xl" />
          Add Image
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-y-4 gap-1 ">
        {data?.data.map((image: IImage) => (
          <Link
            to={`/images/${image?._id}`}
            key={image?._id}
            className="relative hover:shadow-lg"
          >
            <img src={image?.image} alt="" className="h-40" />
            <div className="absolute bottom-0 bg-black bg-opacity-70 w-full text-white p-2 flex justify-between items-center">
              <div>
                <p className="text-sm">
                  Price: <span className="font-semi">{image?.price}$</span>
                </p>
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-3 font-semi text-gray-400 text-lg"
              >
                <label
                  htmlFor="edit-image"
                  onClick={(e) => handleModalData(image, e)}
                >
                  <FaEdit className="hover:text-white" />
                </label>
                <label
                  htmlFor="delete-image"
                  onClick={(e) => handleModalData(image, e)}
                >
                  <AiFillDelete className="hover:text-red-500" />
                </label>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-20  mx-auto w-3/5">
        <Pagination
          totalPages={Math.ceil(data?.meta?.total / 24)}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      <AddImageModal />
      {image && <EditImageModal image={image} />}
      {image && <DeleteModal image={image} />}
    </div>
  );
};

export default ManageImages;
