import { useEffect, useState } from "react";
import PokeCards from "./PokeCards";
import Filters from "./Filters";
import usePokemonFilter from "../Hooks/useFilters";

const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

const PokeDisplay = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await fetch(URL_API);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const detailsData = await detailsResponse.json();
          return {
            name: detailsData.name,
            image: detailsData.sprites.front_default,
            type: detailsData.types.map(
              (typeInfo) =>
                typeInfo.type.name[0].toUpperCase() +
                typeInfo.type.name.slice(1).toLowerCase()
            ),
          };
        })
      );

      setPokemons(pokemonDetails);

      // Fetch the types for the selector
      const types = pokemonDetails
        .map((pokemon) => pokemon.type)
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index);
      setTypes(types);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Hook
  const { filteredPokemons, handleSearch, handleTypeSelect } =
    usePokemonFilter(pokemons);

  return (
    <div className="pt-8 space-y-3 bg-black">
      <Filters
        onSearch={handleSearch}
        onTypeSelect={handleTypeSelect}
        types={types}
      />
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 items-center  pb-20 bg-black xl:mx-12">
        {filteredPokemons.map((pokemon) => (
          <PokeCards key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokeDisplay;
