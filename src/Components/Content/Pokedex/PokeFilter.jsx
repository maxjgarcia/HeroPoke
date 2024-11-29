import { usePokedexContext } from "../../../context/Pokedex-Context";

const PokeFilter = () => {
  const {
    searchTerm,
    filteredSuggestions,
    handleSearchChange,
    handleSuggestionClick,
  } = usePokedexContext();

  return (
    <div className="flex flex-col items-center justify-center ">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex w-[275px] p-3 bg-white/50 px-5 text-black/50 placeholder-slate-500 rtl:text-right outline-none rounded-full text-sm "
      />

      {filteredSuggestions.length > 0 && (
        <ul
          className=" w-auto bg-transparent shadow-lg  max-h-44 overflow-y-auto origin-top-right rounded-b-2xl rounded-t-2xl mt-1  z-50"
          id="suggestions-list"
        >
          {filteredSuggestions.map((pokemon, index) => (
            <li
              key={pokemon.name}
              onClick={() => handleSuggestionClick(pokemon.name)}
              className="flex cursor-pointer p-2 bg-slate-50/70 hover:bg-white/85 space-x-8 items-center justify-between px-16 text-lg"
              aria-selected={index}
            >
              <p className="font-base first-letter:uppercase">{pokemon.name}</p>
              <img
                src={pokemon.image}
                alt={`image of ${pokemon.name}`}
                className="w-10 h-10 rounded-full"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokeFilter;
