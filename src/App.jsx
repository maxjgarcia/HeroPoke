import PokeDisplay from "./Components/Content/Pokemon-Display/PokeDisplay";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { MainLayout, Home, PokedexPage } from "./Components/Layouts/MainLayout";

import { PokemonProvider } from "./context/Poke-Context";
import { PokedexProvider } from "./context/Pokedex-Context";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pokemons" element={<PokeDisplay />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Route>
    )
  );
  return (
    <PokemonProvider>
      <PokedexProvider>
        <RouterProvider router={router} />
      </PokedexProvider>
    </PokemonProvider>
  );
};

export default App;
