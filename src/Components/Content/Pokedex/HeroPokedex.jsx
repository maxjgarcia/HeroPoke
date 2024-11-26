import pokedex1 from "../../../assets/pokedex1.png";

const HeroPokedex = () => {
  return (
    <section className="bg-black">
      <div className="container bg-black grid grid-cols-1 min-h-[700px] md:grid-cols">
        <div className="flex w-full space-x-8">
          <img
            src={pokedex1}
            alt=""
            className="w-[50%] items-center justify-center mb-8"
          />
          <div className="space-y-8">
            <p className="text-white justify-center text-2xl">
              &ldquo;Start Your Pokémon Journey! <br />
              Create your own Pokédex and record every Pokémon you
              encounter!&rdquo;
            </p>
            <button className="px-8 py-4 inline-block font-bold rounded-full bg-red-600 text-white border border-black hover:scale-105 transition-all duration-300 hover:bg-white/70 hover:text-black hover:border hover:border-black/30">
              Open Pokedex
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
    </section>
  );
};

export default HeroPokedex;
