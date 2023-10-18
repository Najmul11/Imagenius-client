import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [py, setPy] = useState<number>(5);
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };

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
      className={`sticky top-0 bg-white  transition-all duration-200 z-10 ${
        py === 3 ? "bg-gradient" : ""
      }`}
    >
      <div className="flex justify-center py-4 px-2 lg:px-0">
        <div className="w-full lg:w-1/2 relative ">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => handleSearch(e)}
            placeholder="Search the largest collection of Bangladeshi images"
            className={`border border-black py-${py} bg-white w-full px-8  lg:px-12 focus:outline-none text-md transition-all duration-400 ease-in-out placeholder:text-gray-500 placeholder:font-semi placeholder:text-sm  `}
          />
          <div
            className={`absolute ${
              py === 3 ? "top-[25%]" : "top-[30%]"
            } ml-1 lg:ml-3`}
          >
            <AiOutlineSearch className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
