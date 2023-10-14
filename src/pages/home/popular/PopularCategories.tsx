import SingleCategory from "./SingleCategory";

const categories = [1, 2, 3, 4, 5, 6, 7, 8];

const PopularCategories = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center font-semi text-2xl ">Popular Collections</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 ">
        {categories.map((category, index) => (
          <SingleCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
