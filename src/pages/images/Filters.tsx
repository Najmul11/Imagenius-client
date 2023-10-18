import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/apiSlice";
import { ICategory } from "../home/popular/SingleCategory";

const Filters = () => {
  const { data } = useGetAllCategoriesQuery(undefined);
  return (
    <div className=" bg-gradient2 mx-4 py-10 rounded-xl ">
      <div className="grid lg:grid-cols-4 lg:w-3/5 mx-auto gap-5">
        {data?.data.map((category: ICategory) => (
          <div key={category?._id}>
            <Link to={`/categories/${category?.category}`}>
              {category?.category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
