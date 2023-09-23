import React from 'react'

const Prizes = () => {
  return (
    <section className='bg-[#110b20] relative'>

        <div className="container p-10 py-20 md:px-0 mx-auto flex flex-col lg:flex-row gap-12">

            <article className='flex flex-col gap-6 lg:justify-center'>
            <div className='space-y-5 lg:hidden text-center '>
                <h2
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                className="font-CdSemiBold leading-7 text-[20px] lg:text-4xl tracking-normal relative">
            Prizes and
            <br />
            <span className="text-lightPurple font-CdBold">Rewards</span>
            <img src="/assets/gradient star.png" className='absolute twinkle-animation h-4 sm:h-auto top-[40%] lg:top-[23%] right-[20%] lg:right-28' alt="" />
          </h2>
          <p
           data-aos="fade-left"
           data-aos-duration="1000" 
          className='lg:font-[200] text-[14px] lg:text-sm'>Highlight of the prizes or rewards for winners and
for participants.
</p>
                </div>

<div 
data-aos="zoom-in-up"
data-aos-duration="1000"
data-aos-offset="400"
className='relative'>
<img src="/assets/trophy.png" className='object-contain relative z-10' alt="Trophy image" />
<img src="/assets/gradient star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-[-55%] left-0 lg:top-[-30%] lg:left-[30%]' alt="" />
<img src="/assets/white star.png" className='object-contain twinkle-animation absolute h-6 bottom-[-3%] left-[10%]' alt="" />
<img src="/assets/white star.png" className='hidden twinkle-animation lg:inline-block object-contain absolute h-6 bottom-[16%] right-[10%]' alt="" />
<img src="/assets/flare.png" className='object-contain blend-mode absolute top-[-30%] left-[29%] scale-[1.3]' alt="flare image" />
</div>
                
            </article>

            <article className='grow flex flex-col gap-16'>

                <div className='w-[60%] hidden lg:block mx-auto space-y-5'>
                <h2
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                 className="font-CdSemiBold text-[20px] lg:text-4xl tracking-normal relative">
            Prizes and
            <br />
            <span className="text-lightPurple font-CdBold">Rewards</span>
            <img src="/assets/gradient star.png" className='object-contain twinkle-animation absolute top-[110%] left-[74%]' alt="" />
          </h2>
          <p
           data-aos="fade-left"
           data-aos-duration="1000"
          className='text-sm relative z-10'>Highlight of the prizes or rewards for winners and
for participants.
</p>
                </div>

                  <div className="relative flex justify-center items-center">
                  <img
                  data-aos="fade-up"
                  data-aos-duration="1000" data-aos-offset="200" 
                  src="/assets/rewards.png" className='object-contain z-10' alt="Prizes and rewards image" />
                  <img src="/assets/white star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-[10%] left-[92%] 
                  lg:top-[19%] lg:left-[98%]' alt="" />
                  
                  <img src="/assets/white star.png" className='hidden twinkle-animation lg:inline-block object-contain absolute top-[-5%] left-[9%]' alt="" />
                  <img src="/assets/gray star.png" className='h-3 twinkle-animation md:h-auto object-contain absolute top-[117%] left-[66%] lg:top-[103%]' alt="" />
                  </div>
            </article>
        </div>
        <img src="/assets/flare.png" className='object-contain blend-mode absolute bottom-[-10%] lg:bottom-[-20%]
         right-[-70%] lg:right-[-60%]' alt="flare image" />
    </section>
  )
}

export default Prizes