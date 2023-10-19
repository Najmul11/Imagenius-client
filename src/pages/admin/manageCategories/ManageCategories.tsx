import { useGetAllCategoriesQuery } from "../../../redux/api/apiSlice";
import { ICategory } from "../../home/popular/SingleCategory";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../sharedComponents/loader/Loader";

const ManageCategories = () => {
  useTitle("Manage category");
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);

  return (
    <div className="overflow-x-auto mx-4 lg:w-3/5 lg:mx-auto my-20">
      {isLoading ? (
        <Loader />
      ) : (
        <table className="table table-xs ">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Category</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((category: ICategory, index: number) => (
              <tr key={category._id}>
                <th>{index + 1}</th>
                <td>
                  <Link to={`/categories/${category.category}`}>
                    <img
                      src={category?.image}
                      alt="category"
                      className="w-20 h-20 rounded-sm"
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/categories/${category.category}`}
                    className="underline"
                  >
                    {category?.category}
                  </Link>
                </td>
                <td>
                  <button className="mx-auto flex items-center gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 ">
                    <MdOutlineDelete className="text-red-500" />
                    Delete category
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCategories;
