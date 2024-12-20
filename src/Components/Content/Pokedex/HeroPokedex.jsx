import { pokedex2 } from "../../../assets/index";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";

const slideIn = (delay) => {
  return {
    hidden: { opacity: 0, y: -100, scale: 0.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: delay, ease: easeInOut },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.5,
      transition: { duration: 0.2, ease: easeOut },
    },
  };
};

const HeroPokedex = ({ isOpen, toggleSection }) => {
  return (
    <section className="bg-gradient-to-b from-[#0672b6] via-[#308cc2] to-[#79C9F9] pb-10 lg:pb-0">
      <div className="container grid lg:grid-cols-2 min-h-[600px] md:grid-cols-1 space-x-2 bg-transparent pt-16">
        <motion.div
          initial={{ opacity: 0.01, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.1, 0.71, 0.2, 1.01],
          }}
        >
          <img src={pokedex2} alt="image of Pokedex" className="px-10" />
        </motion.div>

        <div className="space-y-8 pt-6 flex flex-col items-center">
          <AnimatePresence>
            <motion.h1
              variants={slideIn(0.8)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white text-center text-bold text-5xl  lg:text-6xl text-with-backdrop"
            >
              Gotta catch &apos;em all
            </motion.h1>
            <motion.p
              variants={slideIn(1)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-white text-2xl lg:text-3xl text-center text-with-backdrop pb-12"
            >
              &ldquo;Start Your Pokémon Journey! <br />
              Create your own Pokédex, <br /> record every Pokémon you
              find!&rdquo;
            </motion.p>
          </AnimatePresence>
          <motion.button
            className={`px-12 py-6  font-bold rounded-full text-slate-100 border border-white/70 hover:scale-105 transition-all duration-300 hover:bg-white/70 hover:text-black hover:border hover:border-black/30 ${
              isOpen ? "bg-red-500" : "animate-pulse bg-custom-gradient"
            } `}
            onClick={toggleSection}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{
              duration: 0.6,
              delay: 1.5,
              ease: easeInOut,
            }}
          >
            {isOpen ? "Close Pokedex" : "Open Pokedex"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroPokedex;
