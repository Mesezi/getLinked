import React from 'react'

const Rules = () => {
  return (
    <section className='border-b-[1px] border-white/10 relative'>

      <img src="/assets/flare.png" className="absolute blend-mode object-cover max-w-[50rem] top-[-25%] left-[-40%] lg:top-[-27%] lg:left-[1%]" alt="" />
      <img src="/assets/flare.png" className="absolute blend-mode object-cover max-w-[50rem] right-[-100%] bottom-[4%] lg:right-[-40%] lg:bottom-[-40%]" alt="" />

    <div className='container relative z-10 mx-auto p-10 lg:p-0 grid grid-cols-1 text-center lg:text-start gap-10 lg:grid-cols-2'>
    

    <div className='flex flex-col justify-center gap-3 order-last lg:-order-last relative'>
    <img src="/assets/gray star.png" className="absolute twinkle-animation h-4 lg:h-auto right-0 bottom-[80%] lg:right-[39%] lg:bottom-[79%]" alt="" />
            <h2 
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className='font-CdSemiBold text-[20px] lg:text-4xl tracking-normal'>Rules and
            <br/ ><span className='text-lightPurple font-CdBold'>Guidelines</span></h2>
            <p className='lg:text-[14px] lg:font-[200] leading-[28px] relative'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!
<img src="/assets/white star.png" className="absolute twinkle-animation h-4 lg:h-auto right-[80%] bottom-[-9%] lg:right-[-10%] lg:bottom-[-25%]" alt="" />
            </p>
        </div>

      <div className='flex justify-center relative'
      data-aos="zoom-in-up"
      data-aos-duration="1500">
          <img src="/assets/rules.png" 
          className='object-contain' alt="" />
          <img src="/assets/white star.png" className='absolute twinkle-animation top-[50%] lg:hidden h-4 md:h-auto left-0' alt="" />
      </div>

  </div>

  </section>
  )
}

export default Rules