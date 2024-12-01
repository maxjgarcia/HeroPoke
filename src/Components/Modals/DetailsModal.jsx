import { usePokedexContext } from "../../context/Pokedex-Context";

const DetailsModal = ({ onClose, pokemonDetails, isOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content animate-fade-in border-gradient bg-custom2 relative">
        <div className="pt-4">
          <button
            className="absolute top-0 right-4 text-slate-500/70 text-md font-semibold hover:text-red-500 hover:scale-125"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="flex items-start justify-between mb-4 px-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold first-letter:uppercase">
              {pokemonDetails.name}
            </h2>
            <img
              src={pokemonDetails.image}
              alt={pokemonDetails.name}
              className="sm:m-h-64 md:h-64 w-full object-cover"
            />
          </div>

          <div className="flex flex-col space-y-5 backdrop-blur-sm p-3 shadow-md rounded-xl">
            <p className="text-lg font-semibold pb-3">
              <strong>Type:</strong> {pokemonDetails.type.join(", ")}
            </p>
            <p>
              <strong>Abilities:</strong> {pokemonDetails.abilities.join(", ")}
            </p>

            <ul>
              <strong>Stats:</strong>
              {pokemonDetails.stats.map((stat) => (
                <li
                  key={stat.name}
                  className="first-letter:uppercase text-black"
                >
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
