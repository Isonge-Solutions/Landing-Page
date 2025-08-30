import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";   // <-- Import Hero
import Heroimage from "./assets/images/Hero.png"; // simplified path
import About from "./Components/About.jsx"
const App = () => {
  return (
    <>
      <div>
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${Heroimage})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <About/>

        <Footer />
      </div>
    </>
  );
};

export default App;
