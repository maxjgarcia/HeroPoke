import DetailsModal from "../../Modals/DetailsModal";
import PokedexGrid from "./PokedexGrid";
import HeroPokedex from "./HeroPokedex";

import useToggle from "../../Hooks/useToggle";
import { usePokedexContext } from "../../../context/Pokedex-Context";

const Pokedex = () => {
  const { selectedPokemonName, pokemonDetails, loading, closeModal } =
    usePokedexContext();

  const { isOpen, toggleSection } = useToggle();

  return (
    <>
      <HeroPokedex isOpen={isOpen} toggleSection={toggleSection} />
      {isOpen && (
        <div className="bg-custom2 min-h-[500px] pb-2">
          <PokedexGrid />

          {selectedPokemonName && pokemonDetails && !loading && (
            <DetailsModal
              onClose={closeModal}
              pokemonDetails={pokemonDetails}
              isOpen={!!selectedPokemonName}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Pokedex;
