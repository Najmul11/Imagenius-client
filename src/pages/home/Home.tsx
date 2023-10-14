import useTitle from "../../hooks/useTitle";
import WhyImagenius from "./WhyImagenius";
import Banner from "./banner/Banner";
import PopularCategories from "./popular/PopularCategories";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <PopularCategories />
      <WhyImagenius />
    </div>
  );
};

export default Home;
