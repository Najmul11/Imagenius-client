import { Link } from "react-router-dom";
import { useGetAllImagesQuery } from "../../redux/api/apiSlice";

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
const SimilarImages = () => {
  const { data } = useGetAllImagesQuery({ limit: 8 });

  return (
    <div className="mt-10 px-4">
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-2">
        {data?.data?.map((image: IImage) => (
          <Link to={`/images/${image._id}`}>
            <img src={image?.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarImages;
