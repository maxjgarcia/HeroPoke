import { useEffect, useState } from "react";

const URL_API = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;

const useFetchPokemons = () => {
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

  return { pokemons, types, loading };
};

export default useFetchPokemons;
