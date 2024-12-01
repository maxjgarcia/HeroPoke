import { AnimatePresence, easeInOut, motion } from "framer-motion";
import PikaHero from "../../../assets/pikajump.png";

const HeroPokeDisplay = ({ handleScrollTop }) => {
  return (
    <section className="bg-custom   ">
      <div className=" min-h-[700px] container grid lg:grid-cols-2 justify-center items-center px-24">
        <div className="mt-6 ">
          <motion.img
            src={PikaHero}
            alt="Image of Pikachu jumping"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="xl:h-[500px] object-contain"
          />
        </div>
        <div className=" flex flex-col   bg-transparent items-center ">
          <AnimatePresence>
            <motion.h1
              className="text-white text-center justify-center text-bold text-5xl :text-6xl xl:text-7xl text-with-backdrop"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{
                duration: 0.4,
                delay: 0.5,
                ease: easeInOut,
              }}
            >
              Explore the World of 150 Timeless Pokémon!
            </motion.h1>
          </AnimatePresence>
          <motion.button
            className="px-8 py-4 mt-12 font-bold rounded-full bg-custom-gradient text-white border border-white/30 hover:scale-105 transition-all duration-300 hover:border items-center justify-center"
            onClick={handleScrollTop}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: easeInOut,
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
    </section>
  );
};

export default HeroPokeDisplay;
