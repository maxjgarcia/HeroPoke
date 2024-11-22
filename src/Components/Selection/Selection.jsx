import { usePokemon } from "../../context/Poke-Context";

const Selection = () => {
  const { isModalOpen, setIsModalOpen, activePoke } = usePokemon();

  return (
    <>
      {isModalOpen && (
        <section className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="relative  bg-[#0c0b0e] p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-[35%] lg:py-10 lg:h-[55%] space-y-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white/30 text-md text-center bg-transparent hover:bg-red-700 hover:text-white rounded-[5px] pointer w-[30px] h-[30px]"
            >
              ×
            </button>

            <div className="flex flex-col items-center space-y-5">
              <h2 className="text-center text-3xl text-nowrap font-bold text-white py-6">
                Congratulations, you chose{" "}
                <span style={{ color: activePoke.bgColor }}>
                  {activePoke.name}
                </span>
                !
              </h2>

              <img
                src={activePoke.gif}
                alt={`Image of ${activePoke.name}`}
                className="w-[250px] h-[180px] object-fill lg:w-[350px] lg:h-[260px] rounded-[5px]"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Selection;
