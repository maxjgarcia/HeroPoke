import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const Filters = ({ onSearch, onTypeSelect, types }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedText] = useDebounce(searchTerm, 500);
  const [selectedType, setSelectedType] = useState("");

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term as user types
  };

  // Handle search term after debounce and trigger the onSearch callback
  useEffect(() => {
    if (debouncedText !== "") {
      onSearch(debouncedText); // Pass the debounced search term to parent component
    } else {
      // If debouncedText is empty, show all results
      onSearch(""); // This triggers showing all results
    }
  }, [debouncedText, onSearch]); // Effect runs when debouncedText changes

  // Handle type selection change
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    onTypeSelect(e.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-center  bg-transparent">
        <div className="flex w-full mx-7 lg:max-w-[500px] rounded-full text-black bg-slate-200 px-2 border-2 border-white/70">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
            className="flex w-full bg-transparent px-3 text-black/50 placeholder-black rtl:text-right outline-none rounded-full text-sm"
          />
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="text-black rounded-full p-1 bg-transparent outline-none border-none text-sm "
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
