// src/hooks/useFetchPokemonDetails.js
import { useState, useEffect } from "react";

const useFetchPokemonDetails = (pokemonName) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonName) return;

    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching details for ${pokemonName}`);
        }
        const data = await response.json();
        setPokemonDetails({
          name: data.name,
          image: data.sprites.front_default,
          type: data.types.map(
            (typeInfo) =>
              typeInfo.type.name[0].toUpperCase() +
              typeInfo.type.name.slice(1).toLowerCase()
          ),
          abilities: data.abilities.map(
            (ability) =>
              ability.ability.name[0].toUpperCase() +
              ability.ability.name.slice(1).toLowerCase()
          ),

          stats: data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  return { pokemonDetails, loading, error };
};

export default useFetchPokemonDetails;
