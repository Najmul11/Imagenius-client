import { useGetAllUsersQuery } from "../../../redux/api/apiSlice";
import { IUser } from "../../auth/Login";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const Users = () => {
  const { data } = useGetAllUsersQuery(undefined);

  return (
    <div className="overflow-x-auto w-3/5 mx-auto my-20">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((user: IUser, index: number) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td className={user?.role === "admin" ? "font-semi" : ""}>
                {user?.role}
              </td>
              <td>
                {user?.role === "admin" ? (
                  <button className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 bg-gradient2 bg-opacity-50 hover:text-red-500  px-2 py-1 ">
                    <FiDelete className="text-red-500" />
                    Remove Admin
                  </button>
                ) : (
                  <button className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 bg-gradient2 bg-opacity-50 hover:bg-opacity-90 px-2 py-1 ">
                    <MdOutlineAdminPanelSettings className="text-red-500" />
                    Make Admin
                  </button>
                )}
              </td>
              <td className="flex justify-end">
                <button className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 ">
                  <FiDelete className="text-red-500" />
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
