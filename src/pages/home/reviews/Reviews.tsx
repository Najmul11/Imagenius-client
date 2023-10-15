import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "./Reviews.constant";
import { FaQuoteLeft } from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  const smSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="hidden lg:flex flex-col gap-10 pb-5">
        <h2 className="text-center font-semi text-2xl ">What Customers says</h2>
        <div className="container  mx-auto  rounded-md overflow-hidden h-[225px]">
          <SlickSlider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className=" py-10 px-5 text-md font-semi border-2 border-gray-400  h-[200px] mb-1 "
              >
                <div className="mb-5">
                  <FaQuoteLeft />
                </div>
                <p>{review}</p>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
      <div className="lg:hidden flex flex-col gap-10 mb-3 ">
        <h2 className="text-center font-semi text-2xl ">What Customers says</h2>
        <div className="w-96 md:w-[500px]  mx-auto  rounded-md overflow-hidden h-[250px] ">
          <SlickSlider {...smSettings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="  px-5 text-md font-semi  border-gray-400 border-2 py-10 mb-2 h-[216px]"
              >
                <div className="mb-5">
                  <FaQuoteLeft />
                </div>
                <p>{review}</p>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </>
  );
};

export default Reviews;
