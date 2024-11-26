import { useEffect, useState } from "react";

const usePokedex = () => {
    const [pokedex, setPokedex] = useState(() => {
        const savedPokedex = localStorage.getItem('pokedex');
        return savedPokedex ? JSON.parse(savedPokedex) : []
    });

    useEffect(() => {
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }, [pokedex]); // This effect runs when 'pokedex' state changes

    const addToPokedex = (pokemon) => {
        if (!pokedex.find((poke) => poke.name === pokemon.name)) {
            setPokedex((prevPokedex) => [...prevPokedex, pokemon]);
        }
    };

    const removeFromPokedex = (pokemonName) => {
        setPokedex((prevPokedex) =>
            prevPokedex.filter((pokemon) => pokemon.name !== pokemonName)
        );
    };

    return { pokedex, addToPokedex, removeFromPokedex };
};

export default usePokedex;
