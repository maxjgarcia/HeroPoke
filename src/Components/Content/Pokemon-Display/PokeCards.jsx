import { typeColors } from "../../../Data/CardColors";

const PokeCards = ({ pokemon, onClick }) => {
  const primaryType = pokemon.type[0];

  const colorClass = typeColors[primaryType] || "transparent";

  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          className={`block hover:scale-110 transition-transform duration-200 rounded-xl w-72 mt-12 border-8 border-yellow-400/90 hover:shadow-2xl hover:shadow-slate-500 ${colorClass}/70 cursor-pointer text-black animate-slide-in-bottom hover:border-slate-50`}
          onClick={() => onClick(pokemon.name)}
        >
          <div className="relative overflow-hidden ">
            <img
              className="sm:m-h-64 md:h-64 w-full object-cover pb-1 b"
              src={pokemon.image}
              alt=""
            />
          </div>

          <div className={`py-6 text-center `}>
            <h5 className="mb-2 text-2xl font-bold leading-tight  first-letter:uppercase text-center">
              {pokemon.name}
            </h5>
            <p className={`mt-2 mb-3 font-semibold text-base`}>
              {pokemon.type.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeCards;
