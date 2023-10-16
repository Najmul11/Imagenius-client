import { FiDelete } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

const fakeData = [1, 2, 3, 4];

const Cart = () => {
  return (
    <div className="w-2/5  my-20 mx-auto">
      {fakeData.map((d, i) => (
        <div
          key={i}
          className="flex items-center justify-between mb-5  rounded-lg border-2 border-gray-400 "
        >
          <img
            src="https://res.cloudinary.com/dkzqs1nr6/image/upload/v1697436207/Imagenius/images/tgfid1e11dazvvial8ev.jpg"
            alt=""
            className="w-36 rounded-lg"
          />
          <p>
            Price: <span className="font-semi">10$</span>
          </p>
          <button className=" flex items-center   gap-3  rounded-xl    font-semi  transition-all duration-300 hover:text-red-500 bg-gradient2 bg-opacity-50 px-2 py-1 mr-2 ">
            <FiDelete className="text-red-500" />
            Remove from cart
          </button>
        </div>
      ))}
      <div className="flex justify-between items-end ">
        <div className="p-2">
          <button className=" flex items-center gap-3  rounded-lg font-semi text-sm  transition-all duration-300 hover:bg-blue-100 bg-gradient2 bg- px-2 py-1 hover:text-red-500">
            <MdOutlineDelete className="text-red-500" />
            Clear Cart
          </button>
        </div>
        <div className="flex flex-col gap-2   p-2">
          <p className="text-sm">
            Total - <span className="font-semi ">50$</span>{" "}
          </p>
          <button className=" flex items-center gap-3  rounded-lg font-semi text-sm  transition-all duration-300 hover:bg-blue-100 bg-gradient2 bg- px-2 py-1 ">
            <IoBagCheckOutline className="text-blue-500" />
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
