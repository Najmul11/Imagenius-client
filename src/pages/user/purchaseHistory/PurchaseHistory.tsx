import { useGetAllOrdersQuery } from "../../../redux/api/apiSlice";
import { Link } from "react-router-dom";
import { IOrder } from "../../admin/manageOrders/ManageOrders";

const PurchaseHistory = () => {
  const { data } = useGetAllOrdersQuery(undefined);

  return (
    <div className="overflow-x-auto w-3/5 mx-auto my-20">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th className="text-center">Status</th>
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
              <td className="">
                <p
                  className={`px-2 py-1 font-semi text-center ${
                    order.status === "completed"
                      ? "text-blue-500  rounded-xl"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
