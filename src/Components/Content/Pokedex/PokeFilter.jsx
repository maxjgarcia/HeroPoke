import { useState } from "react";
import useFetchPokemonDetails from "../../Hooks/useFetchPokemonsDetails";
import DetailsModal from "../../Modals/DetailsModal";
import PokedexGrid from "./PokedexGrid";
import usePokemonSearch from "../../Hooks/usePokemonSearch";
import useFetchPokemons from "../../Hooks/useFetchPokemons";

const PokeFilter = () => {
  const { pokemons } = useFetchPokemons();
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const { pokemonDetails, loading } =
    useFetchPokemonsDetails(selectedPokemonName);
  const { searchTerm, filteredSuggestions, handleSearchChange, setSearchTerm } =
    usePokemonSearch(pokemons);

  return (
    <>
      <div className="bg-custom2 min-h-[500px] pb-2">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex w-48 bg-white/50 px-3 text-black/50 placeholder-black rtl:text-right outline-none rounded-full text-sm"
        />

        {filteredSuggestions.length > 0 && (
          <ul>
            {filteredSuggestions.map((pokemon) => (
              <li
                key={pokemon.name}
                onClick={() => handleSuggestionClick(pokemon.name)}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        )}

        <h2>My Pokedex</h2>
        <PokedexGrid
          pokedex={pokedex}
          onCardClick={handleCardClick}
          onRemoveClick={removeFromPokedex}
        />

        {selectedPokemonName && useFetchPokemonDetails && !loading && (
          <DetailsModal
            onClose={closeModal}
            pokemonDetails={pokemonDetails}
            isOpen={!!selectedPokemonName}
          />
        )}
      </div>
    </>
  );
};

export default PokeFilter;
