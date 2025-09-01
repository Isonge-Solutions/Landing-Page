import React, { useState } from 'react';
import HeroSide from "../assets/images/Hero1.png";
import Contactform from "./Contactform"; // import your modal form

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='relative mt-18 lg:m-12 m-6 lg:text-start text-center '>
      <div className='flex items-center justify-between'>
        
        {/* Left Side */}
        <div>
          <div className='md:w-[500px] sm:w-[400px] w-[300px]  '>
            <h2>Your Goals, Our Expertise - Financial Success</h2>
            <p className='text-neutral-600'>
              Empowering Africa’s SMEs with future-ready digital solutions. From websites to enterprise systems, we help businesses grow smarter, faster, and stronger in a connected world.
            </p>
          </div>

          <div className='pt-6'>
            <button 
              onClick={() => setOpenModal(true)} 
              className='bg-light px-4 py-1 rounded-md text-white text-2xl hover:bg-accent hover:text-black transition'
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className='hidden lg:block'>
          <img src={HeroSide} alt="Hero Section" />
        </div>
      </div>

      {/* Contact Form Modal */}
      <Contactform open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Hero;
