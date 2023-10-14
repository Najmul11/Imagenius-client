import banner from "../../../assets/banner.png";
import ParticlesContainer from "./ParticlesContainer";

const Banner = () => {
  return (
    <div className="hidden  lg:flex  py-10   overflow-hidden relative">
      {/* <ParticlesContainer /> */}
      <div className="h-banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
