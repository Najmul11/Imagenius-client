import { Link, useParams } from "react-router-dom";
import { useGetAllImagesQuery } from "../../redux/api/apiSlice";
import { BiShoppingBag } from "react-icons/bi";

type ICategory = {
  _id: string;
  category: string;
  image: string;
  popular: boolean;
};

type IImage = {
  _id: string;
  image: string;
  publicId: string;
  title: string;
  price: number;
  category: ICategory;
};

const Images = () => {
  const { category } = useParams();
  const { data } = useGetAllImagesQuery(undefined);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 my-20">
        {data?.data?.map((image: IImage) => (
          <div>
            <Link to={`/images/${image?._id}`}>
              <img src={image?.image} alt="" />
            </Link>
            <div className="bg-black bg-opacity-90 h-10 flex justify-between items-center px-5">
              <Link
                to={`/images/${image?._id}`}
                className="text-sm text-white font-semi w-[48%]"
              >
                Price: <span className="text-lg">{image?.price}$</span>
              </Link>
              <Link
                to={`/images/${image?._id}`}
                className="text-sm text-white w-[48%]"
              >
                <span className="font-semi text-md capitalize">
                  {image?.title}
                </span>
              </Link>
              <button className="text-white text-2xl hover:text-blue-500 w-[4%]">
                <BiShoppingBag />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
