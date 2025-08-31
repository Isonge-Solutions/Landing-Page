import React, { useState } from 'react';
import HeroSide from "../assets/images/Hero1.png";
import Contactform from "./Contactform"; // import your modal form

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='relative mt-20 m-12 '>
      <div className='flex items-center justify-between'>
        
        {/* Left Side */}
        <div>
          <div className='lg:w-[600px] w-[300px]'>
            <h1>Your Goals, Our Expertise - Financial Success</h1>
            <p className='text-neutral-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugit totam, enim voluptas ipsa iure similique vero quam possimus 
              atque laborum hic! Atque at cum repellendus excepturi consequatur 
              earum, molestiae minus.
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
