import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="hidden  lg:flex  py-10    overflow-hidden relative">
      <div className="h-banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
