import { createContext, useContext, useState } from "react";
import poke_list from "../Data/Poke";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [activePoke, setActivePoke] = useState(poke_list[0]);
  const handleActivePoke = (data) => setActivePoke(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PokemonContext.Provider
      value={{
        activePoke,
        setActivePoke,
        handleActivePoke,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
