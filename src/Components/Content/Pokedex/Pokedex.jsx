import { useState } from "react";
import useFetchPokemons from "../../Hooks/useFetchPokemons";
import usePokemonSearch from "../../Hooks/usePokemonSearch";
import usePokedex from "../../Hooks/usePokedex";
import useFetchPokemonsDetails from "../../Hooks/useFetchPokemonsDetails";
import DetailsModal from "../../Modals/DetailsModal";
import PokedexGrid from "./PokedexGrid";
import HeroPokedex from "./HeroPokedex";

const Pokedex = () => {
  const { pokemons } = useFetchPokemons();
  const { searchTerm, filteredSuggestions, handleSearchChange, setSearchTerm } =
    usePokemonSearch(pokemons);
  const { pokedex, addToPokedex, removeFromPokedex } = usePokedex();
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const { pokemonDetails, loading } =
    useFetchPokemonsDetails(selectedPokemonName);

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
      <HeroPokedex />
      <div>
        <h1>Pokémon Search</h1>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={handleSearchChange}
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

        {selectedPokemonName && pokemonDetails && !loading && (
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

export default Pokedex;
