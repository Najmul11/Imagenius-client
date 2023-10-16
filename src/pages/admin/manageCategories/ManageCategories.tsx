import { FiDelete } from "react-icons/fi";
import { useGetAllCategoriesQuery } from "../../../redux/api/apiSlice";
import { ICategory } from "../../home/popular/SingleCategory";
import { Link } from "react-router-dom";

const ManageCategories = () => {
  const { data } = useGetAllCategoriesQuery(undefined);

  return (
    <div className="overflow-x-auto w-3/5 mx-auto my-20">
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
            <tr>
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
                  <FiDelete className="text-red-500" />
                  Delete category
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategories;
