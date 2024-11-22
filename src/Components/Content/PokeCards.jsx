const PokeCards = ({ pokemon }) => {
  const typeColors = {
    Fire: "bg-gradient-to-t from-red-500 from-5% via-red-400 via-15% to-slate-100 to-80%",
    Water:
      "bg-gradient-to-t from-blue-500 from-5% via-blue-400 via-15% to-slate-100 to-80%",
    Grass:
      "bg-gradient-to-t from-green-600 from-5% via-green-500 via-15% to-slate-100 to-80%",
    Electric:
      "bg-gradient-to-t from-yellow-300 from-5% via-yellow-200 via-15% to-slate-100 to-80%",
    Bug: "bg-gradient-to-t from-purple-400 from-5% via-purple-400 via-15% to-green-200 to-80%",
    Poison:
      "bg-gradient-to-t from-fuchsia-700 from-5% via-fuchsia-600 via-15% to-slate-100 to-80%",
    Normal:
      "bg-gradient-to-t from-teal-300 from-5% via-teal-200 via-15% to-slate-100 to-80%",
    Fairy:
      "bg-gradient-to-t from-pink-300 from-5% via-pink-200 via-15% to-pink-100 to-80%",
    Ground:
      "bg-gradient-to-t from-amber-900 from-5% via-amber-800 via-15% to-slate-100 to-80%",
    Fighting:
      "bg-gradient-to-t from-orange-500 from-5% via-orange-400 via-15% to-zinc-400 to-80%",
    Rock: "bg-gradient-to-t from-gray-600 from-5% via-gray-500 via-15% to-slate-200 to-80%",
    Psychic:
      "bg-gradient-to-t from-fuchsia-300 from-5% via-fuchsia-300 via-15% to-indigo-300 to-80%",
    Ghost:
      "bg-gradient-to-t from-indigo-600 from-5% via-indigo-500 via-15% to-slate-200 to-80%",
    Ice: "bg-gradient-to-t from-cyan-500 from-5% via-cyan-400 via-15% to-slate-100 to-80%",
    Dragon:
      "bg-gradient-to-t from-orange-400 from-5% via-orange-400 via-15% to-red-400 to-80%",
    Dark: "bg-gradient-to-t from-indigo-950 from-10% via-indigo-950 via-15% to-indigo-900 to-80% text-white/80",
    Steel:
      "bg-gradient-to-t from-gray-400 from-5% via-gray-300 via-15% to-slate-200 to-80%",
  };

  const primaryType = pokemon.type[0];

  const colorClass = typeColors[primaryType] || "transparent";

  return (
    <>
      <div className="flex justify-center items-center  ">
        <div
          className={`block rounded-xl w-72 mt-12 border-8 border-yellow-400/90 hover:border-slate-100 shadow-xl ${colorClass} cursor-pointer text-black`}
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat ">
            <img
              className="rounded-lg  sm:m-h-64 md:h-64 w-full object-cover pb-1"
              src={pokemon.image}
              alt=""
            />
          </div>

          <div className={`py-6 text-center `}>
            <h5 className="mb-2 text-2xl font-bold leading-tight  first-letter:uppercase text-center">
              {pokemon.name}
            </h5>
            <p className={`mt-2 mb-1 font-semibold text-base`}>
              {pokemon.type.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeCards;