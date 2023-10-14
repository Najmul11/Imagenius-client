import { Link } from "react-router-dom";

interface IProps {
  category: number;
}
const SingleCategory = ({ category }: IProps) => {
  return (
    <Link
      to={`/categoris/${category}`}
      className={`relative group rounded-sm lg:h-[400px] group `}
    >
      <div className="overflow-hidden rounded-sm shadow-lg ">
        <img
          src="https://d3nn873nee648n.cloudfront.net/900x600/100234/300-ZM1024042.jpg"
          alt=""
          className={`w-full transition-transform transform group-hover:scale-110 duration-1000 rounded-sm h-[400px]`}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-4 py-2 bg-gradient-to-t from-black to-transparent to-60% opacity-80  transition-opacity group-hover:opacity-100 rounded-lg">
        <div className="">
          <h2 className="text-white text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Wedding
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
