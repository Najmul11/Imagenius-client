/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useMakeAdminMutation,
  useRemoveAdminMutation,
} from "../../../redux/api/apiSlice";
import { IUser } from "../../auth/Login";
import { MdOutlineAdminPanelSettings, MdOutlineDelete } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useAppSelector } from "../../../redux/hook";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../sharedComponents/loader/Loader";

const ManageUsers = () => {
  useTitle("Manage users");

  const { data, isLoading } = useGetAllUsersQuery(undefined);

  const [makeAdmin] = useMakeAdminMutation();
  const [removeAdmin] = useRemoveAdminMutation();
  const [deleteUser] = useDeleteUserMutation();

  const { user: usingAs } = useAppSelector((state) => state.user);
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const makeAdminHandler = async (userId: string) => {
    const data = {
      userId: userId,
    };

    const response = (await makeAdmin({
      data,
      accessToken: accessToken,
    })) as any;
    if (response.data) toast.success("User promoted as admin ");
    if (response.error) toast.error("Operation failed ");
  };

  const removeAdminHandler = async (userId: string) => {
    const data = {
      userId: userId,
    };

    const response = (await removeAdmin({
      data,
      accessToken: accessToken,
    })) as any;
    if (response.data) toast.success("User demoted from admin ");
    if (response.error) toast.error("Operation failed ");
  };

  const deleteUserHandler = async (userId: string) => {
    const data = {
      userId: userId,
    };

    const response = (await deleteUser({
      data,
      accessToken: accessToken,
    })) as any;
    if (response.data) toast.success("User deleted ");
    if (response.error) toast.error("Operation failed ");
  };

  return (
    <div className="overflow-hidden">
      <div className="mb-20 ">
        <h2 className="text-center rounded-lg py-2">
          <span className="bg-gradient2 px-2 font-semi rounded-lg text-red-500">
            {usingAs?.role}:
          </span>{" "}
          <span className="font-semi text-lg ">{usingAs?.name}</span>
        </h2>
      </div>
      <div className="overflow-x-scroll w-[95%]  lg:w-4/5 mx-auto my-10">
        {isLoading ? (
          <Loader />
        ) : (
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
                <tr key={user?._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td
                    className={
                      user?.role === "admin" || user?.role === "super admin"
                        ? "font-semi"
                        : ""
                    }
                  >
                    {user?.role}
                  </td>
                  <td>
                    {usingAs?.role === "super admin" &&
                      (user?.role === "admin" ? (
                        <button
                          onClick={() => removeAdminHandler(user._id)}
                          className="flex items-center gap-3 rounded-xl font-semi transition-all duration-300 bg-gradient2 bg-opacity-50 hover:text-red-500 px-2 py-1"
                        >
                          <FiDelete className="text-red-500" />
                          Remove Admin
                        </button>
                      ) : user?.role === "user" ? (
                        <button
                          onClick={() => makeAdminHandler(user!._id)}
                          className="flex items-center gap-3 rounded-xl font-semi transition-all duration-300 bg-gradient2 bg-opacity-50 hover:bg-opacity-90 px-2 py-1"
                        >
                          <MdOutlineAdminPanelSettings className="text-blue-500" />
                          Make Admin
                        </button>
                      ) : null)}
                  </td>
                  <td className="flex justify-end">
                    {(usingAs?.role === "super admin" &&
                      user?.role !== "super admin") ||
                    (usingAs?.role === "admin" &&
                      user?.role !== "admin" &&
                      user?.role !== "super admin") ? (
                      <button
                        onClick={() => deleteUserHandler(user!._id)}
                        className="flex items-center gap-3 rounded-xl font-semi transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1"
                      >
                        <MdOutlineDelete className="text-red-500" />
                        Delete User
                      </button>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
