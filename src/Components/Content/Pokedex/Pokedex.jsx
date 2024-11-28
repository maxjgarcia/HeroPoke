import { useState } from "react";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import usePokemonSearch from "../../Hooks/usePokemonSearch";
import usePokedex from "../../Hooks/usePokedex";
import useFetchPokemonsDetails from "../../Hooks/useFetchPokemonsDetails";
import DetailsModal from "../../Modals/DetailsModal";
import PokedexGrid from "./PokedexGrid";
import HeroPokedex from "./HeroPokedex";

import useToggle from "../../Hooks/useToggle";

const Pokedex = () => {
  const { pokemons } = useFetchPokemons();
  const { searchTerm, filteredSuggestions, handleSearchChange, setSearchTerm } =
    usePokemonSearch(pokemons);
  const { pokedex, addToPokedex, removeFromPokedex } = usePokedex();
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const { pokemonDetails, loading } =
    useFetchPokemonsDetails(selectedPokemonName);

  const { isOpen, toggleSection } = useToggle();

  const handleSuggestionClick = (pokemonName) => {
    setSearchTerm(pokemonName);
    const selected = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
    );
    if (selected) {
      addToPokedex(selected);
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
          <input
            type="text"
            placeholder="Search Pokémon"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex w-48 bg-white/50 px-3 text-black/50 placeholder-black rtl:text-right outline-none rounded-full text-sm"
          />

          {filteredSuggestions.length > 0 && (
            <ul className="z-50">
              {filteredSuggestions.map((pokemon) => (
                <li
                  key={pokemon.name}
                  onClick={() => handleSuggestionClick(pokemon.name)}
                >
                  {pokemon.name}
                  <img src={pokemon.image} alt="" />
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
