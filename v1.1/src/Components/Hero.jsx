import React from 'react'
import HeroSide from "../assets/images/Hero1.png"

const Hero = () => {
  return (
    <div className='relative mt-20 m-12 bg-'>
      <div className='flex items-center justify-between'>
       <div>
       <div className='w-[600px]'>
        <h1>Your Goals, Our Expertise - Financial Success</h1>
        <p className='text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam, enim voluptas ipsa iure similique vero quam possimus atque laborum hic! Atque at cum repellendus excepturi consequatur earum, molestiae minus.</p>
       </div>
       <div className='pt-6'>
        <button className='bg-light px-4 py-1 rounded-md text-white text-2xl'>Contact Us</button>
       </div>
       </div>
       <div>
        <img src={HeroSide} alt="" />
       </div>
      </div>
      
    </div>
  )
}

export default Hero