/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiDelete } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { IImage } from "../../images/Images";
import { clearCart, removeFromCart } from "../../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import CheckoutModal from "./CheckoutModal";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = async (image: IImage) => {
    const newCart = cart.filter((i) => i._id !== image._id);
    await dispatch(removeFromCart(newCart));
    toast.success("Image removed from cart");
  };
  const handleClearCart = async () => {
    await dispatch(clearCart());
    toast.success("All items removed from cart");
  };

  const totalPrice = cart.reduce((total, image) => total + image.price, 0);

  return (
    <div className="w-2/5  my-20 mx-auto">
      {cart.map((image: IImage) => (
        <div
          key={image._id}
          className="flex items-center justify-between mb-5  rounded-lg border-2 border-gray-400 "
        >
          <img src={image.image} alt="" className="w-36 rounded-lg" />
          <p>
            Price: <span className="font-semi">{image?.price}$</span>
          </p>
          <button
            onClick={() => handleRemoveFromCart(image)}
            className=" flex items-center   gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 mr-2 "
          >
            <FiDelete className="text-red-500" />
            Remove from cart
          </button>
        </div>
      ))}
      <div className="flex justify-between items-end ">
        <div className="p-2">
          <button
            onClick={handleClearCart}
            className=" flex items-center gap-3  rounded-lg font-semi text-sm  transition-all duration-300 hover:bg-blue-100 bg-gradient2 bg- px-2 py-1 hover:text-red-500"
          >
            <MdOutlineDelete className="text-red-500" />
            Clear Cart
          </button>
        </div>
        <div className="flex flex-col gap-2   p-2">
          <p className="text-sm">
            Total - <span className="font-semi ">{totalPrice}$</span>{" "}
          </p>
          <label
            htmlFor="checkout"
            className=" flex items-center gap-3  rounded-lg font-semi text-sm  transition-all duration-300 hover:bg-blue-100 bg-gradient2 bg- px-2 py-1 "
          >
            <IoBagCheckOutline className="text-blue-500" />
            Checkout
          </label>
        </div>
      </div>
      <CheckoutModal />
    </div>
  );
};

export default Cart;
