import { useEffect, useState } from "react";
import PokeCards from "./PokeCards";
import Filters from "./Filters";
import usePokemonFilter from "../../Hooks/useFilters";
import Spinner from "./Spinner";

const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

const PokeDisplay = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // Hook
  const { filteredPokemons, handleSearch, handleTypeSelect } =
    usePokemonFilter(pokemons);

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

      {loading && <Spinner loading={loading} />}

      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 items-center pb-20 bg-black xl:mx-12 pt-2">
        {filteredPokemons.map((pokemon) => {
          return <PokeCards key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default PokeDisplay;
