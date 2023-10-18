import { NavLink } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/apiSlice";
import { ICategory } from "../home/popular/SingleCategory";

const Filters = () => {
  const { data } = useGetAllCategoriesQuery(undefined);
  return (
    <div className=" bg-gradient2 mx-4 py-10 rounded-lg ">
      <div className="grid grid-cols-3 lg:grid-cols-4 lg:w-3/5 mx-auto  gap-5 justify-items-center">
        {data?.data.map((category: ICategory) => (
          <div key={category?._id}>
            <NavLink
              to={`/categories/${category?.category}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-black text-white font-semi px-2 py-1 text-sm rounded-xl"
                  : "text-sm hover:font-semi"
              }
            >
              {category?.category}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
