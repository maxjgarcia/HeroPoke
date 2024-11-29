import { iconDetails, iconTrash } from "../../../assets/index";
import { usePokedexContext } from "../../../context/Pokedex-Context";
import PokeFilter from "./PokeFilter";

const PokedexGrid = () => {
  const { pokedex, handleCardClick, removeFromPokedex } = usePokedexContext();

  return (
    <>
      <div className="relative">
        <PokeFilter />
      </div>

      <h2 className="px-12 mt-8 text-with-backdrop font-semibold ">
        My Pokedex
      </h2>

      <div className="pokedex-grid animate-blurred-fade-in p-12">
        {pokedex.map((pokemon) => (
          <div
            key={pokemon.name}
            className="border border-gray-300 text-center relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out bg-gradient-to-br from-pink-300/70 via-pink-100/70 to-pink-300/70 group"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => handleCardClick(pokemon.name)}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-slate-600 bg-opacity-50 text-white rounded-b-lg p-1 ">
              <h1 className="text-lg font-base p-[3px] group-hover:hidden absolute bottom-0 left-0 right-0 transition-opacity duration-700 first-letter:uppercase">
                {pokemon.name}
              </h1>

              <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                <button
                  className="w-8 bg-green-600 rounded"
                  onClick={() => handleCardClick(pokemon.name)}
                >
                  <img src={iconDetails} className="w-5 h-5 mx-[6px]" />
                </button>

                <button
                  className="w-8 bg-red-500 rounded"
                  onClick={() => removeFromPokedex(pokemon.name)}
                >
                  <img src={iconTrash} className="w-5 h-5 mx-[6px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokedexGrid;
