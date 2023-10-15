import { Link } from "react-router-dom";
import { ICategory } from "../popular/SingleCategory";

const SingleSearch = ({ category }: { category: ICategory }) => {
  return (
    <Link
      to={`/search/${category?.category}`}
      className="bg-gradient2 text-center py-3 rounded-full hover:shadow-xl shadow-black border-2 border-gray-500 transition-shadow duration-300"
    >
      <p className="font-bold ">{category?.category}</p>
    </Link>
  );
};

export default SingleSearch;
