import PokeDisplay from "./Components/Content/PokeDisplay";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { MainLayout, Home } from "./Components/Layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pokemons" element={<PokeDisplay />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
