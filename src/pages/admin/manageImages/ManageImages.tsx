import { Link } from "react-router-dom";
import { useGetAllImagesQuery } from "../../../redux/api/apiSlice";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export type IImage = {
  _id?: string;
  image: string;
  publicId: string;
  title: string;
  price: number;
  category: string;
};

const ManageImages = () => {
  const { data } = useGetAllImagesQuery(undefined);
  return (
    <div className="lg:w-4/5 mx-auto my-20">
      <div className="grid grid-cols-2 md:grid lg:grid-cols-6 justify-items-center gap-y-4 ">
        {data?.data.map((image: IImage) => (
          <Link
            to={`/images/${image._id}`}
            key={image._id}
            className="relative hover:shadow-lg"
          >
            <img src={image.image} alt="" className="h-40" />
            <div className="absolute bottom-0 bg-black bg-opacity-70 w-full text-white p-2 flex justify-between items-center">
              <div>
                <p className="text-sm">
                  Price: <span className="font-semi">{image.price}$</span>
                </p>
              </div>
              <div className="flex items-center gap-3 font-semi text-gray-400 text-lg">
                <FaEdit className="hover:text-white" />
                <AiFillDelete className="hover:text-red-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManageImages;
