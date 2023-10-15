import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="hidden  lg:flex  py-10 ">
      <div className="h-banner  w-full">
        <img src={banner} alt="banner" className="h-banner w-full" />
      </div>
    </div>
  );
};

export default Banner;
