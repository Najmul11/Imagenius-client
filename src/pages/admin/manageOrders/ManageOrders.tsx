/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiDelete } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";
import {
  useCancelOrderMutation,
  useDeliverOrderMutation,
  useGetAllOrdersQuery,
} from "../../../redux/api/apiSlice";
import { IUser } from "../../auth/Login";
import { Link } from "react-router-dom";
import { IImage } from "../manageImages/ManageImages";
import toast from "react-hot-toast";
import { useAppSelector } from "../../../redux/hook";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../sharedComponents/loader/Loader";

export type IOrder = {
  _id: string;
  image: Partial<IImage>;
  customer: Partial<IUser>;
  status: string;
  createdAt: string;
};

const ManageOrders = () => {
  useTitle("Manage orders");

  const { data, isLoading } = useGetAllOrdersQuery({ status: "pending" });
  const [cancelOrder] = useCancelOrderMutation();
  const [deliverOrder] = useDeliverOrderMutation();
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const handleCancel = async (orderId: string) => {
    const response = (await cancelOrder({ orderId, accessToken })) as any;
    if (response.data) toast.success("Order cancelled");
    if (response.error) toast.error("Something went wrong");
  };
  const handleDeliver = async (orderId: string) => {
    const response = (await deliverOrder({ orderId, accessToken })) as any;
    if (response.data) toast.success("Order delivered");
    if (response.error) toast.error("Something went wrong");
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
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((order: IOrder, index: number) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <Link to={`/images/${order.image?._id}`}>
                    <img
                      src={order?.image?.image}
                      alt="category"
                      className="w-20 h-20 rounded-sm"
                    />
                  </Link>
                </td>
                <td>{order?.customer?.email}</td>
                <td>{order?.createdAt}</td>
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
                        onClick={() => handleDeliver(order?._id)}
                        className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 bg-gradient2 bg-opacity-50 hover:bg-opacity-100 px-2 py-1 "
                      >
                        <MdOutlineDownloadDone className="text-blue-500" />
                        Mark as Delivered
                      </button>
                      <button
                        onClick={() => handleCancel(order?._id)}
                        className=" flex items-center  gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 "
                      >
                        <FiDelete className="text-red-500" />
                        Cancel Order
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

export default ManageOrders;
