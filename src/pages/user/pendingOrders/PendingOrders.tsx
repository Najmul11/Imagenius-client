/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  useCancelOrderMutation,
  useGetAllOrdersQuery,
} from "../../../redux/api/apiSlice";
import { IOrder } from "../../admin/manageOrders/ManageOrders";
import { FiDelete } from "react-icons/fi";
import { useAppSelector } from "../../../redux/hook";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import Loader from "../../sharedComponents/loader/Loader";

const PendingOrders = () => {
  useTitle("Pending orders");
  const { data, isLoading } = useGetAllOrdersQuery({ status: "pending" });
  const [cancelOrder] = useCancelOrderMutation();

  const { accessToken } = useAppSelector((state) => state.accessToken);

  const handleCancel = async (orderId: string) => {
    const response = (await cancelOrder({ orderId, accessToken })) as any;
    if (response.data) toast.success("Order cancelled");
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
              <th>Order Date</th>
              <th>Status</th>
              <th className=" text-center">Action</th>
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
                <td>{order?.createdAt}</td>
                <td>
                  <p className={`font-semi`}>{order.status}</p>
                </td>
                <td>
                  <div className=" flex justify-center">
                    <button
                      onClick={() => handleCancel(order._id)}
                      className=" flex items-center   gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 "
                    >
                      <FiDelete className="text-red-500" />
                      Cancel Order
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingOrders;
