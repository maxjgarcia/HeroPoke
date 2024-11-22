import { useState, useEffect } from "react";

const usePokemonFilter = (pokemons) => {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const applyFilters = () => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.type.includes(selectedType)
      );
    }

    setFilteredPokemons(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedType, pokemons]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleTypeSelect = (type) => setSelectedType(type);

  return {
    filteredPokemons,
    handleSearch,
    handleTypeSelect,
  };
};

export default usePokemonFilter;
