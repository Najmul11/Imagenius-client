import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [py, setPy] = useState<number>(5);

  const updatePadding = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setPy(3);
    } else {
      setPy(5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePadding);
    return () => {
      window.removeEventListener("scroll", updatePadding);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 bg-white -z-10 transition-all duration-200 ${
        py === 3 ? "bg-gradient2" : ""
      }`}
    >
      <div className="flex justify-center py-4">
        <div className="w-1/2 relative mt-6">
          <input
            type="text"
            placeholder="Search the largest collection of Bangladeshi images"
            className={`border border-black py-${py} bg-white w-full lg:px-12 focus:outline-none text-lg transition-all duration-400 ease-in-out placeholder:text-gray-500 placeholder:font-semi`}
          />
          <div
            className={`absolute ${
              py === 3 ? "top-[25%]" : "top-[30%]"
            } lg:ml-3`}
          >
            <AiOutlineSearch className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
