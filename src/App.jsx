import { div } from "framer-motion/client";

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
};

export default App;
