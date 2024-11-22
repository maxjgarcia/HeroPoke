import { useState } from "react";

const Filters = ({ onSearch, onTypeSelect, types }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    onTypeSelect(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-black">
        <div className="flex w-full mx-7 mt-7 lg:max-w-[500px] rounded-full text-black bg-slate-200 px-2">
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
