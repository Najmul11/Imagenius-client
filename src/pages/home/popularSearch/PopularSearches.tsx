import SingleSearch from "./SingleSearch";

const searches = [1, 2, 3, 4, 5, 6, 7, 8];
const PopularSearches = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <h2 className="text-center font-semi text-2xl ">Popular Collections</h2>
      <div className="grid lg:grid-cols-4  grid-cols-2 gap-8 px-4 lg:w-3/5 lg:mx-auto">
        {searches.map((search, index) => (
          <SingleSearch key={index} search={search} />
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
