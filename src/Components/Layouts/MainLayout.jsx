import { Outlet } from "react-router-dom";

import Content from "../Content/Main/Content";
import Footer from "../Footer/Footer";
import Hero from "../Content/Main/Hero";
import Navbar from "../Navbar/Navbar";
import Selection from "../Modals/Selection";
import { PokedexProvider } from "../../context/Pokedex-Context";
import Pokedex from "../Content/Pokedex/Pokedex";
import { PokemonProvider } from "../../context/Poke-Context";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const Home = () => {
  return (
    <>
      <PokemonProvider>
        <Hero />
        <Selection />
      </PokemonProvider>
      <Content />
    </>
  );
};

export const PokedexPage = () => {
  return (
    <>
      <PokedexProvider>
        <Pokedex />
      </PokedexProvider>
    </>
  );
};
