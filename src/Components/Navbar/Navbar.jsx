import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import pokeparade from "../../assets/navbarparade.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full h-16 bg-black">
        <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 bg-black text-white h-16">
          <img
            src={pokeparade}
            alt="Logo"
            className="h-8 order-first md:order-last"
          />

          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div
            className={`absolute top-16 left-0 w-full bg-black text-white flex flex-col space-y-2 pb-1 px-6 md:relative md:top-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
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
      <div className="w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </>
  );
};

export default Navbar;
