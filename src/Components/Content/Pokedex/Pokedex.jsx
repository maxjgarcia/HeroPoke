import { useState } from "react";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import usePokemonSearch from "../../Hooks/usePokemonSearch";
import usePokedex from "../../Hooks/usePokedex";
import useFetchPokemonsDetails from "../../Hooks/useFetchPokemonsDetails";
import DetailsModal from "../../Modals/DetailsModal";
import PokedexGrid from "./PokedexGrid";
import HeroPokedex from "./HeroPokedex";
import useToggle from "../../Hooks/useToggle";
import PokeFilter from "./PokeFilter";

const Pokedex = () => {
  const { pokemons } = useFetchPokemons();
  const {
    searchTerm,
    filteredSuggestions,
    handleSearchChange,
    setSearchTerm,
    setFilteredSuggestions,
    resetSearch,
  } = usePokemonSearch(pokemons);
  const { pokedex, addToPokedex, removeFromPokedex } = usePokedex();
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const { pokemonDetails, loading } =
    useFetchPokemonsDetails(selectedPokemonName);

  const { isOpen, toggleSection } = useToggle();

  const handleSuggestionClick = (pokemonName) => {
    setSearchTerm(pokemonName);
    setFilteredSuggestions([]);
    const selected = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
    );
    if (selected) {
      addToPokedex(selected);
      resetSearch();
    }
  };

  const handleCardClick = (pokemonName) => {
    setSelectedPokemonName(pokemonName);
  };

  const closeModal = () => {
    setSelectedPokemonName(null);
  };

  return (
    <>
      <HeroPokedex isOpen={isOpen} toggleSection={toggleSection} />
      {isOpen && (
        <div className="bg-custom2 min-h-[500px] pb-2">
          <PokeFilter
            handleSuggestionClick={handleSuggestionClick}
            searchTerm={searchTerm}
            filteredSuggestions={filteredSuggestions}
            handleSearchChange={handleSearchChange}
          />

          <h2 className="px-12 mt-8 text-with-backdrop font-semibold ">
            My Pokedex
          </h2>
          <PokedexGrid
            pokedex={pokedex}
            onCardClick={handleCardClick}
            onRemoveClick={removeFromPokedex}
          />

          {selectedPokemonName && pokemonDetails && !loading && (
            <DetailsModal
              onClose={closeModal}
              pokemonDetails={pokemonDetails}
              isOpen={!!selectedPokemonName}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Pokedex;
