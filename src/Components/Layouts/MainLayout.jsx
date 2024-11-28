import { Outlet } from "react-router-dom";
import { PokemonProvider } from "../../context/Poke-Context";
import Content from "../Content/Main/Content";
import Footer from "../Footer/Footer";
import Hero from "../Content/Main/Hero";
import Navbar from "../Navbar/Navbar";
import Selection from "../Modals/Selection";

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
