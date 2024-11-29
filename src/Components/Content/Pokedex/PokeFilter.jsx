const PokeFilter = ({
  searchTerm,
  filteredSuggestions,
  handleSearchChange,
  handleSuggestionClick,
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex w-[25%] p-3 bg-white/50 px-5 text-black/50 placeholder-slate-500 rtl:text-right outline-none rounded-full text-sm"
        aria-expanded={filteredSuggestions.length > 0}
        aria-controls="suggestions-list"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      />

      {filteredSuggestions.length > 0 && (
        <ul
          className="absolute mt-1 w-[25%] bg-white shadow-lg z-50 max-h-60 overflow-y-auto origin-top-right"
          role="menu"
          id="suggestions-list"
        >
          {filteredSuggestions.map((pokemon, index) => (
            <li
              key={pokemon.name}
              onClick={() => handleSuggestionClick(pokemon.name)}
              className="flex cursor-pointer p-2 bg-slate-50 hover:bg-slate-200"
              role="menuitem"
              aria-selected={index}
            >
              {pokemon.name}
              <img
                src={pokemon.image}
                alt={`image of ${pokemon.name}`}
                className="w-6 h-6 rounded-full"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokeFilter;
