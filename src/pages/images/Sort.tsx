import { FaSort } from "react-icons/fa";
import { options } from "./Sort.constant";
import { useState } from "react";

type IProps = {
  selectedSortOption: string;
  setSelectedSortOption: (sortOption: string) => void;
};

const Sort = ({ selectedSortOption, setSelectedSortOption }: IProps) => {
  const [openSort, setOpenSort] = useState<boolean>(false);
  return (
    <div className="relative ">
      <button
        onClick={() => setOpenSort(!openSort)}
        className=" flex gap-2 items-center bg-black text-white py-3 transition-all duration-100  px-4 text-sm font-semi rounded-3xl  active:bg-gradient2"
      >
        <FaSort />
        Sort
      </button>
      {openSort && (
        <div className="w-48  bg-gradient2 absolute mt-1 rounded-lg   flex flex-col  text-black">
          {options.map((option) => (
            <div key={option.value}>
              <label className="block  font-semibold cursor-pointer hover:bg-gray-400 px-5 py-2">
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedSortOption === option.value}
                  onChange={(e) => setSelectedSortOption(e.target.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
