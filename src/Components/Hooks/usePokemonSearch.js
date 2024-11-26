import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const usePokemonSearch = (pokemons) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedText] = useDebounce(searchTerm, 500);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    useEffect(() => {
        if (!debouncedText) {
            setFilteredSuggestions([]);
            return;
        }

        const filtered = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(debouncedText.toLowerCase())
        );
        setFilteredSuggestions(filtered);
    }, [debouncedText, pokemons]);

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchTerm(input);
    };

    return { searchTerm, debouncedText, filteredSuggestions, handleSearchChange, setSearchTerm };
};

export default usePokemonSearch;
