import React from 'react'

const Partners = () => {
  return (
    <section className=' border-b-[1px] border-white/10 relative'>
      <img src="/assets/flare.png" className="absolute blend-mode
       top-[-24%] left-[-35%] lg:top-[-22%] lg:left-[-15%]" alt="flare image" />
       <img src="/assets/flare.png" className="absolute blend-mode
       bottom-[-40%] right-[-50%] lg:bottom-[-40%] lg:right-[-30%]" alt="flare image" />
       
      <div className='container mx-auto p-10 py-20 md:px-0 space-y-10 lg:space-y-20 relative'>
      <div className='max-w-md mx-auto text-center space-y-3 z-10'>
                <h2
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                className='font-CdSemiBold text-[20px] lg:text-4xl tracking-normal'>Partners and Sponsors</h2>
                <p
                 data-aos="fade-left"
                 data-aos-duration="1000"
                className='lg:text-[14px] lg:font-[200] leading-[28px]'>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
            </div>

            <div
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-offset="200"
            className="relative flex justify-center items-center">
            <img src="/assets/partner.png" className='object-contain rounded-md border-[1px] border-lightPurple' alt="Sponsors and Partners" />
            <img src="/assets/white star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-[90%] left-[85%] lg:top-[80%] lg:left-[55%]' alt="star" />
            <img src="/assets/purple star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-0 left-10 lg:top-[-10%] lg:left-20 ' alt="star" />
            <img src="/assets/gradient star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-[37%] lg:top-[16%] left-[55%]' alt="star" />
            </div>
            
      </div>
     
    </section>
  )
}

export default Partners