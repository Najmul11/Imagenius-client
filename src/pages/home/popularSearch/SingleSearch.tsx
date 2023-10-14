import { Link } from "react-router-dom";

interface IProps {
  search: number;
}
const SingleSearch = ({ search }: IProps) => {
  return (
    <Link
      to={`/search/${search}`}
      className="bg-gradient2 text-center py-3 rounded-full hover:shadow-xl shadow-black border-2 border-gray-500 transition-shadow duration-300"
    >
      <p className="font-bold ">Family</p>
    </Link>
  );
};

export default SingleSearch;
