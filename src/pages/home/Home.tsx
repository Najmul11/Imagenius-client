import useTitle from "../../hooks/useTitle";
import WhyImagenius from "./whyImegeinus/WhyImagenius";
import Banner from "./banner/Banner";
import PopularCategories from "./popular/PopularCategories";
import PopularSearches from "./popularSearch/PopularSearches";
import Reviews from "./reviews/Reviews";
import Faq from "./faq/Faq";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <PopularCategories />
      <WhyImagenius />
      <PopularSearches />
      <Reviews />
      <Faq />
    </div>
  );
};

export default Home;
