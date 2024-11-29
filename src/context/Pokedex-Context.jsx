import { createContext, useContext, useState } from "react";
import useFetchPokemons from "../Components/Hooks/useFetchPokemons";
import usePokemonSearch from "../Components/Hooks/usePokemonSearch";
import usePokedex from "../Components/Hooks/usePokedex";
import useFetchPokemonsDetails from "../Components/Hooks/useFetchPokemonsDetails";

const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
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
    <PokedexContext.Provider
      value={{
        pokedex,
        searchTerm,
        filteredSuggestions,
        handleSearchChange,
        handleSuggestionClick,
        handleCardClick,
        closeModal,
        selectedPokemonName,
        pokemonDetails,
        loading,
        removeFromPokedex,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = () => useContext(PokedexContext);
