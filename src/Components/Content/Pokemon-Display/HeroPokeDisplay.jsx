import {
  AnimatePresence,
  delay,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";

const slideIn = (delay) => {
  return {
    hidden: { opacity: 0, y: -100, scale: 0.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: delay, ease: easeInOut },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.5,
      transition: { duration: 0.2, ease: easeOut },
    },
  };
};

const HeroPokeDisplay = ({ handleScrollTop }) => {
  return (
    <section className="bg-custom">
      <div className="container  min-h-[700px]  bg-transparent pt-8 items-center">
        <AnimatePresence>
          <motion.h1
            variants={slideIn(0.3)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-white text-center justify-center text-bold text-[4rem] text-with-backdrop"
          >
            Explore the 150 original Pokémons!
          </motion.h1>
        </AnimatePresence>
        <button
          className="px-8 py-4 inline-block font-bold rounded-full bg-custom-gradient text-white border border-white/30 hover:scale-105 transition-all duration-300 hover:border "
          onClick={handleScrollTop}
        >
          Learn More
        </button>
      </div>
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
    </section>
  );
};

export default HeroPokeDisplay;
