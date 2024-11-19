import { div } from "framer-motion/client";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Selection from "./Components/Selection/Selection";
import { PokemonProvider } from "./context/Poke-Context";

const App = () => {
  return (
    <>
      <Navbar />
      <PokemonProvider>
        <Hero />
        <Selection />
      </PokemonProvider>
      <Content />
      <Footer />
    </>
  );
};

export default App;
