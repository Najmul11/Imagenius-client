import { Link, useParams } from "react-router-dom";
import { useGetAllImagesQuery } from "../../redux/api/apiSlice";
import { BiShoppingBag } from "react-icons/bi";
import { AiFillFilter } from "react-icons/ai";
import { useState } from "react";
import Filters from "./Filters";
import Sort from "./Sort";
import Pagination from "../sharedComponents/Pagination/Pagination";

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

const SearchImages = () => {
  const { search } = useParams();
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("newest");

  const sortOrderMap: { [key: string]: string } = {
    newest: "desc",
    lowToHigh: "asc",
    highToLow: "desc",
  };

  const sortOrder = sortOrderMap[selectedSortOption] || "desc";

  const { data } = useGetAllImagesQuery({
    searchTerm: search,
    sortBy: selectedSortOption === "newest" ? "createdAt" : "price",
    sortOrder: sortOrder,
    page: currentPage,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-10 flex flex-col gap-5">
      <div className="px-4 flex justify-between">
        <Sort
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={setSelectedSortOption}
        />
        <div className="lg:flex gap-5 items-center hidden">
          <hr className="w-20 border-2 border-black rounded" />
          <p className="font-bold text-lg">
            {data?.data.length} Images For "{search}"
          </p>
          <hr className="w-20 border-2 border-black rounded" />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className=" flex gap-2 items-center bg-black text-white  transition-all duration-100 py-3 px-4 text-sm font-semi rounded-3xl  active:bg-gradient2"
        >
          <AiFillFilter className /> Filters
        </button>
      </div>
      {showFilters && <Filters />}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 min-h-screen">
        {data?.data?.map((image: IImage) => (
          <div key={image._id}>
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
      <div className="pt-20  mx-auto w-3/5">
        <Pagination
          totalPages={Math.ceil(data?.meta?.total / 12)}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default SearchImages;
