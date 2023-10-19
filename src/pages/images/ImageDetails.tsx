import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleImageQuery } from "../../redux/api/apiSlice";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import SimilarImages from "./SimilarImages";
import Terms from "./Terms";
import Footer from "../sharedComponents/footer/Footer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IImage } from "./Images";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/slices/cartSlice";
import useTitle from "../../hooks/useTitle";
import Loader from "../sharedComponents/loader/Loader";

const ImageDetails = () => {
  useTitle("Image details");

  const { id } = useParams();
  const { data, isLoading } = useGetSingleImageQuery(id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  const handleAddToCart = async (image: IImage) => {
    const existInCart = cart.find((i) => i._id === image._id);
    if (existInCart) return toast.error("Image already in cart");
    await dispatch(addToCart(image));
    toast.success("Image added to cart");
  };

  return (
    <div>
      <div className="px-2 pt-3 flex flex-col gap-5">
        <div className="lg:px-20 ">
          <button
            onClick={goBack}
            className=" bg-black bg-opacity-75 text-white hover:bg-opacity-100 transition-all duration-100   p-4 text-3xl rounded-full  active:bg-gradient2"
          >
            <MdArrowBackIosNew />
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className=" lg:w-[92%] mx-auto rounded-lg">
            <img
              src={data?.data?.image}
              alt=""
              className=" w-full mx-auto rounded-t-lg"
            />
            <div className="bg-black bg-opacity-90 h-12 flex justify-between items-center px-5">
              <p className="text-lg text-white font-semi ">
                Price: <span className="text-3xl">{data?.data?.price}$</span>
              </p>
              <p className="text-sm text-white ">
                <span className="font-semi text-2xl capitalize">
                  {data?.data?.title}
                </span>
              </p>
              <button
                onClick={() => handleAddToCart(data)}
                className="text-white text-3xl hover:text-blue-500 active:text-gradient2"
              >
                <BiShoppingBag />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="py-10">
        <h3 className="font-bold text-sm lg:text-xl text-center">
          This Image is Copyrighted by Imegenius.
        </h3>
        <p className="text-center lg:w-3/5 mx-auto font-semi mt-5 text-gray-500">
          The use of this image is subject to payment and compliance with
          Imagenius's License Agreement. Any non-compliance amounts to copyright
          infringement, which is a very serious civil and criminal offence
          allowing court to sentence you for the imprisonment up to 3 years.
        </p>
      </div>
      <div>
        <div className="font-bold text-sm lg:text-xl text-center flex justify-center items-center gap-5 ">
          <hr className="border-2 w-20 border-black " />
          Similar Images
          <hr className="border-2 w-20 border-black " />
        </div>
        <SimilarImages />
        <Terms />
        <Footer />
      </div>
    </div>
  );
};

export default ImageDetails;
