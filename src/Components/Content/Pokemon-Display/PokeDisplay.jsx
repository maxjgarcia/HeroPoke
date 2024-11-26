import PokeCards from "./PokeCards";
import Filters from "./Filters";
import usePokemonFilter from "../../Hooks/useFilters";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import useFetchPokemonsDetails from "../../Hooks/useFetchPokemonsDetails";
import { useState } from "react";
import DetailsModal from "../../Modals/DetailsModal";

const PokeDisplay = () => {
  // Hook
  const { pokemons, types } = useFetchPokemons();

  const { filteredPokemons, handleSearch, handleTypeSelect } =
    usePokemonFilter(pokemons);

  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const { pokemonDetails, loading } =
    useFetchPokemonsDetails(selectedPokemonName);

  const handleCardClick = (pokemonName) => {
    setSelectedPokemonName(pokemonName);
  };

  const closeModal = () => {
    setSelectedPokemonName(null);
  };
  return (
    <div className="pt-8 bg-black">
      <h1 className="text-white text-center mb-5 text-[45px] underline">
        Explore the original Pokémons!
      </h1>
      <div className="sticky top-0 z-10 bg-black p-2.5 bg-transparent">
        <Filters
          onSearch={handleSearch}
          onTypeSelect={handleTypeSelect}
          types={types}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 items-center pb-20 bg-black xl:mx-12 pt-2">
        {filteredPokemons.map((pokemon) => {
          return (
            <PokeCards
              key={pokemon.name}
              pokemon={pokemon}
              onClick={handleCardClick}
            />
          );
        })}
      </div>

      {selectedPokemonName && pokemonDetails && !loading && (
        <DetailsModal
          onClose={closeModal}
          pokemonDetails={pokemonDetails}
          isOpen={!!selectedPokemonName}
        />
      )}
    </div>
  );
};

export default PokeDisplay;
