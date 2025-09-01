import React from 'react'
import Aboutimage from '../assets/images/About1.jpg'

const About = () => {
  return (
    <section id='about' className='mt-12 mx-12'>
    <div className=''>
      <div>
        <h3>About Us</h3>
      </div>
      <div className='flex lg:flex-row flex-col items-center  gap-12 lg:justify-between'>
        <div className='lg:w-1/2 lg:tracking-wide'>
          <p className='lg:text-4xl text-2xl'>Empower Your Business's Financial Future Effortlessly</p>
        </div>
        <div className='lg:w-1/2 '>
          <p className='lg:text-base text-lg'>We exist to close the digital gap for SMEs by providing accessible, affordable, and future-ready technology that helps them thrive in a connected world.</p>
        </div>

      </div>
      {/* <div className='pt-6'>
        <button className='bg-slate rounded-full px-4 py-1 text-accent text-xl'>Get Started</button>
      </div> */}

    </div>
    <div className='pt-12'>
      <div className='flex lg:flex-row  gap-12 flex-col justify-between items-center'>
        <div>
          <img src={Aboutimage} className='rounded-md lg:h-[400px] lg:w-[600px] w-[400px] mt-10' alt="" />
        </div>
        <div className='lg:w-1/2 pt-12'>
        <div className='flex flex-col gap-12 items-center'>
          <div className='bg-accent rounded-lg p-6'>
            <div className=''>
              <h4>Our Vision</h4>
              <p>To empower SMEs across Africa with transformative digital solutions that drive growth, efficiency, and global competitiveness.</p>
            </div>
            </div>
          <div className='bg-slate rounded-lg p-6'>
              <div>
              <h4 className='!text-white'>Our Mission</h4>
              <p className='text-white opacity-90'>Empowering SMEs with innovative tech solutions that streamline operations and drive business growth.</p>
            </div>
            </div>

        </div>
        </div>

      </div>
      
    </div>
    </section>
  )
}

export default About