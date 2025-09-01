import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Heroimage from "./assets/images/Hero.png";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import CTA from "./Components/CTA.jsx";
import Contactform from "./Components/Contactform.jsx";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <div
          className="bg-cover bg-center "
          style={{ backgroundImage: `url(${Heroimage})` }}
        >
          <Navbar onContactClick={() => setOpenModal(true)} />
          <Hero onContactClick={() => setOpenModal(true)} />
        </div>

        <About />
        <Services />
        <CTA onContactClick={() => setOpenModal(true)} />
        <Footer />

        {/* Shared Modal */}
        <Contactform open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
};

export default App;
