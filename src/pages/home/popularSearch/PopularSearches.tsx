import { useGetAllCategoriesQuery } from "../../../redux/api/apiSlice";
import { ICategory } from "../popular/SingleCategory";
import SingleSearch from "./SingleSearch";

const PopularSearches = () => {
  const { data } = useGetAllCategoriesQuery({ sortBy: "createdAt", limit: 8 });

  return (
    <div className="flex flex-col gap-10 pb-10">
      <h2 className="text-center font-semi text-2xl ">Popular Searches</h2>
      <div className="grid lg:grid-cols-4  grid-cols-2 gap-5 lg:gap-8 px-4 lg:w-3/5 lg:mx-auto">
        {data?.data.map((search: ICategory) => (
          <SingleSearch key={search._id} category={search} />
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
