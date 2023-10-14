import useTitle from "../../hooks/useTitle";
import Banner from "./banner/Banner";
import PopularCategories from "./popular/PopularCategories";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <PopularCategories />
    </div>
  );
};

export default Home;
