import useTitle from "../../hooks/useTitle";
import WhyImagenius from "./whyImegeinus/WhyImagenius";
import Banner from "./banner/Banner";
import PopularCategories from "./popular/PopularCategories";
import PopularSearches from "./popularSearch/PopularSearches";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <PopularCategories />
      <WhyImagenius />
      <PopularSearches />
    </div>
  );
};

export default Home;
