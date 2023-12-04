/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdOutlineDownloadDone } from "react-icons/md";
import {
  useGetCustomOrdersQuery,
  useProcessImageMutation,
} from "../../../redux/api/apiSlice";
import { IUser } from "../../auth/Login";
import { Link } from "react-router-dom";
import { IImage } from "../manageImages/ManageImages";
import { useAppSelector } from "../../../redux/hook";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../sharedComponents/loader/Loader";
import toast from "react-hot-toast";

export type IOrder = {
  _id: string;
  image: Partial<IImage>;
  customer: Partial<IUser>;
  status: string;
  createdAt: string;
};

const ManageCustomOrders = () => {
  useTitle("Manage custom orders");
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const { data, isLoading } = useGetCustomOrdersQuery(accessToken);
  const [processImage] = useProcessImageMutation();

  const handleProcess = async (order: any) => {
    const response = (await processImage({ data: order, accessToken })) as any;

    if (response.data) {
      toast.success("Image processing successfull");
    }
    if (response.error) {
      toast.error("Image processing failed");
    }
  };

  return (
    <div className="overflow-x-auto w-3/5 mx-auto my-20">
      {isLoading ? (
        <Loader />
      ) : (
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Customer Email</th>
              <th>Service</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((order: any, index: number) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <Link to={`/images/${order.image?._id}`}>
                    <img
                      src={order?.image?.photoUrl}
                      alt="category"
                      className="w-20 h-20 rounded-sm"
                    />
                  </Link>
                </td>
                <td>{order?.user?.email}</td>
                <td>{order?.service}</td>
                <td className="">
                  <div className="flex">
                    <p
                      className={`px-2 py-1 ${
                        order.status === "completed"
                          ? "text-blue-500 font-semi rounded-xl"
                          : order.status === "cancelled"
                          ? "text-red-500 font-semi rounded-xl"
                          : ""
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </td>
                <td>
                  {order.status === "pending" && (
                    <div className="flex justify-between ">
                      <button
                        onClick={() => handleProcess(order)}
                        className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 bg-gradient2 bg-opacity-50 hover:bg-opacity-100 px-2 py-1 "
                      >
                        <MdOutlineDownloadDone className="text-blue-500" />
                        Process
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCustomOrders;
