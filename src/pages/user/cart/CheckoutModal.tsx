/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { useCreateOrderMutation } from "../../../redux/api/apiSlice";
import { clearCart } from "../../../redux/slices/cartSlice";
import checkout from "../../../assets/checkout.png";

const CheckoutModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  const { accessToken } = useAppSelector((state) => state.accessToken);
  const [createOrder] = useCreateOrderMutation();

  const handleCheckout = async () => {
    const response = (await createOrder({ payload: cart, accessToken })) as any;
    if (response.data) {
      toast.success("Your order is on process. Check pending Orders");
      await dispatch(clearCart());
    }

    if (response.error) toast.error("Something went weong. Try later");
    navigate("/dashboard/pending-orders");
  };
  return (
    <div>
      <input type="checkbox" id="checkout" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold ">Scan QR code to make payment</h3>
          <img src={checkout} alt="" className="w-52 h-52 " />
          <div className="relative h-12 mt-5">
            <label
              htmlFor=""
              className="absolute -top-3 left-5 z-30 bg-white px-3 text-sm font-semi"
            >
              TrxID
            </label>
            <input
              type="text"
              placeholder="Enter TrxID"
              className="absolute top-0 left-0 px-8 border bg-transparent rounded-lg  h-full w-full   focus:outline-none"
            />
          </div>
          <div className=" mt-5">
            <button
              onClick={handleCheckout}
              type="submit"
              className="px-8 py-3 text-white w-full bg-black bg-opacity-90 hover:bg-opacity-100 duration-200  rounded-lg font-semi "
            >
              Done
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="checkout">
          Close
        </label>
      </div>
    </div>
  );
};

export default CheckoutModal;
