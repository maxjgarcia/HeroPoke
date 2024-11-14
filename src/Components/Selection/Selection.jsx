import { Oak } from "../../assets";

const Selection = ({ pokemons }) => {
  return (
    <section className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="relative  bg-[#0c0b0e] p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-[35%] lg:py-10 lg:h-[80%] space-y-2">
        <button className="absolute top-2 right-2 text-white/30 text-md text-center bg-transparent hover:bg-red-700 hover:text-white rounded-[5px] pointer w-[30px] h-[30px]">
          ×
        </button>

        <div className="flex flex-col items-center space-y-5">
          <img
            src={Oak}
            alt="Professor Oak holding a pokeball"
            className="w-[350px] h-[220px] object-fill  lg:w-[400px] lg:h-[280px]"
          />

          <h2 className="text-center text-xl text-nowrap font-bold text-white py-4">
            Congratulations, you chose{" "}
            <span className={`text-[${pokemons.bgColor}]`}>
              {pokemons.name}
            </span>
            !
          </h2>

          <img
            src={pokemons.gif}
            alt={`Image of ${pokemons.name}`}
            className="w-[250px] h-[180px] object-fill lg:w-[350px] lg:h-[260px] rounded-[5px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Selection;
