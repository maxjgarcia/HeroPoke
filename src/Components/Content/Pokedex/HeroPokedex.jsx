import pokedex1 from "../../../assets/pokedex1.png";

const HeroPokedex = () => {
  return (
    <>
      <div className="bg-black items-center justify-center ">
        <h1 className="text-2xl text-white text-center mb-8">Dex</h1>

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
            <button className="rounded-2xl bg-red-500 w-32">
              Open Pokedex
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPokedex;
