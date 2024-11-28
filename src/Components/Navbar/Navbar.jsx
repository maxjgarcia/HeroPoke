import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <header className="w-full h-16 bg-black">
        <nav className=" w-full max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black text-white h-16 ">
          <div className="flex space-x-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/pokedex" className={linkClass}>
              Pokédex
            </NavLink>
            <NavLink to="/pokemons" className={linkClass}>
              Pokémons
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
    </>
  );
};

export default Navbar;
