import { useGetAllCategoriesQuery } from "../../../redux/api/apiSlice";
import SingleCategory, { ICategory } from "./SingleCategory";

const PopularCategories = () => {
  const { data } = useGetAllCategoriesQuery(undefined);

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center font-semi text-2xl ">Popular Collections</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 ">
        {data?.data.map((category: ICategory) => (
          <SingleCategory key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
