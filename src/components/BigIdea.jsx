import React from 'react'

const BigIdea = () => {
  return (
    <section id='overview' className='border-b-[1px] border-white/10 z-10 relative'>
      <div className='container mx-auto p-10 lg:py-16 md:px-0 grid grid-cols-1 text-center lg:text-start gap-16 lg:grid-cols-2'>

        <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        data-aos-offset="400"
         className='flex justify-center relative'>
            <img
             src="/src/assets/idea.png" className='object-contain' alt="" />
            <img src="/src/assets/gradient star.png" className='h-6 twinkle-animation absolute top-[30%] left-0' alt="" />
            <img src="/src/assets/spiral arrow.png" className='absolute h-6 sm:h-auto 
            lg:bottom-[-5%] lg:left-[85%] bottom-[-6%] left-1/2 transform -translate-x-1/2 lg:translate-x-0' alt="" />
        </div>

        <div className='flex flex-col justify-center gap-3 '>
            <h2
            data-aos="zoom-in-down"
            data-aos-duration="1500"
             className='font-CdSemiBold relative text-[20px] lg:text-4xl tracking-normal'>Introduction to getlinked 
            <br/ ><span className='text-lightPurple font-CdBold'>tech Hackathon 1.0</span>
            <img src="/src/assets/purple star.png" className='absolute twinkle-animation h-4 sm:h-auto top-[40%] lg:top-[23%] right-0' alt="" />
            </h2>
            <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className='lg:text-[14px] lg:font-[200] leading-[28px]'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!
            </p>
        </div>

    </div>
  
    </section>
  )
}

export default BigIdea