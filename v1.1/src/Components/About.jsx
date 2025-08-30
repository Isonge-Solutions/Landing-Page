import React from 'react'
import Aboutimage from '../assets/images/About.jpg'

const About = () => {
  return (
    <section id='about' className='mt-12 mx-12'>
    <div className=''>
      <div>
        <h3>About Us</h3>
      </div>
      <div className='flex items-center   gap-12 justify-between'>
        <div className='w-2/5 tracking-wide'>
          <p className='text-4xl'>Empower Your Business's Financial Future Effortlessly</p>
        </div>
        <div className='w-1/2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aut incidunt excepturi, eaque deserunt itaque cupiditate aspernatur inventore nihil ipsa officia, nesciunt eligendi natus? Ex temporibus mollitia deserunt recusandae.</p>
        </div>

      </div>
      <div className='pt-6'>
        <button className='bg-slate rounded-full px-4 py-1 text-accent text-xl'>Get Started</button>
      </div>

    </div>
    <div className='pt-12'>
      <div className='flex justify-between items-center'>
        <div>
          <img src={Aboutimage} className='rounded-md h-[400px] w-[600px]' alt="" />
        </div>
        <div className='w-1/2'>
        <div className='flex flex-col gap-12'>
          <div className='bg-accent rounded-lg p-6'>
            <div className=''>
              <h4>Our Mission</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate pariatur adipisci quisquam necessitatibus facere iure animi quo quidem praesentium earum, laudantium corrupti, quos culpa magnam excepturi in nihil ipsam.</p>
            </div>
            </div>
          <div className='bg-slate rounded-lg p-6'>
              <div>
              <h4>Our Vision</h4>
              <p className='text-white opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate pariatur adipisci quisquam necessitatibus facere iure animi quo quidem praesentium earum, laudantium corrupti, quos culpa magnam excepturi in nihil ipsam.</p>
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