import { useGetAllCategoriesQuery } from "../../../redux/api/apiSlice";
import Loader from "../../sharedComponents/loader/Loader";
import SingleCategory, { ICategory } from "./SingleCategory";

const PopularCategories = () => {
  const { data, isLoading } = useGetAllCategoriesQuery({ popular: true });

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center font-semi text-2xl ">Popular Collections</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 ">
          {data?.data.map((category: ICategory) => (
            <SingleCategory key={category._id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularCategories;
