import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import poke_list from "../../../Data/Poke";
import { usePokemon } from "../../../context/Poke-Context";
import confetti from "canvas-confetti";

const slideIn = (delay) => {
  return {
    hidden: { opacity: 0, y: -100, scale: 0.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, delay: delay, ease: easeInOut },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.5,
      transition: { duration: 0.2, ease: easeOut },
    },
  };
};

const Hero = () => {
  const { activePoke, handleActivePoke, setIsModalOpen } = usePokemon();

  return (
    <div>
      <section style={{ backgroundColor: activePoke.bgColor }}>
        <div className="container grid grid-cols-1 min-h-[700px] md:grid-cols-2">
          <div className="flex flex-col items-center justify-center order-first md:order-last py-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.9, x: 100, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
              key={activePoke.id}
              src={activePoke.image}
              alt={activePoke.name}
              className="w-[300px] md:w-[400px] xl:w-[550px] "
            />
          </div>

          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="text-center space-y-5 md:text-left">
              <AnimatePresence>
                <motion.h1
                  key={activePoke.id}
                  variants={slideIn(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-4xl font-bold lg:text-7xl"
                >
                  {activePoke.name}
                </motion.h1>
              </AnimatePresence>
              <p className="text-sm text-black/80 leading-loose font-semibold">
                {activePoke.description}
              </p>

              <span className="flex flex-col md:flex-row items-center md:space-x-3 space-y-2 md:space-y-0 pb-4">
                <img
                  src={activePoke.typeImage}
                  alt={`${activePoke.type} icon`}
                  className="w-8 h-8"
                />
                <p className="text-md text-black font-bold leading-loose">
                  {activePoke.type}
                </p>
              </span>
              <button
                onClick={() => {
                  setIsModalOpen(true);

                  confetti({
                    spread: 700,
                    particleCount: 150,
                    ticks: 60,
                  });
                }}
                className="px-8 py-4 inline-block font-bold rounded-full bg-black text-white border border-black hover:scale-105 transition-all duration-300 hover:bg-white/70 hover:text-black hover:border hover:border-black/30"
              >
                Choose {activePoke.name}
              </button>

              <div className="grid grid-cols-3 gap-10 items-center py-7 order-last md:order-first">
                {poke_list
                  .filter((item) => item.id !== activePoke.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 place-items-center cursor-pointer hover:animate-pop transition-all duration-100"
                      onClick={() => handleActivePoke(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[100px] h-[100px] object-contain"
                      />
                      <div className="flex flex-col md:flex-row items-center md:space-x-1 space-y-2 md:space-y-0 py-2">
                        <h3 className="font-bold text-base text-center">
                          {item.name}
                        </h3>
                        <img
                          src={item.typeImage}
                          alt={`${item.type} icon`}
                          className="w-6 h-6 md:w-4 md:h-4"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
      </section>
    </div>
  );
};

export default Hero;
