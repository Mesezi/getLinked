import {useEffect, useRef} from "react";
import useTypewriter from "react-typewriter-hook"
import Typed from 'typed.js';

const HeroSection = () => {
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Igniting a Revolution in HR Innovation`],
      typeSpeed: 100,
      loop:true,
      fadeOut: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <section className="flex flex-col gap-10 lg:h-[calc(100vh-90px)] border-white/10 border-b-[1px]"> 
    <div className="pt-4 font-bold italic  container mx-auto z-10">
     
      <div className="flex justify-center lg:justify-end items-center relative">
<span ref={el} className="text-xl text-center lg:text-right lg:text-3xl font-bold lg:h-12"/>
      
          <span className="absolute text-xl text-center lg:text-right lg:text-3xl font-bold">
            <span className="opacity-0">Igniting a Revolution in</span>
          
           <span className="relative font-bold">
            <span className="opacity-0">HR Innovation</span>
            
            <svg
              className="absolute -bottom-4 right-0 w-full"
              height="17"
              viewBox="0 0 255 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                stroke="#FF26B9"
                stroke-width="5"
              />
            </svg>
            </span>
           
          </span>
      </div>
         
        </div>
    <div
      className="self-stretch max-w-[2700px] h-full  sm:pl-[calc((100%-640px)/2)] md:pl-[calc((100%-768px)/2)]
     lg:pl-[calc((100%-1024px)/2)] xl:pl-[calc((100%-1280px)/2)] grid-container relative"
    >

      <img src="/assets/flare.png" className="absolute blend-mode max-h-[49rem] w-full object-contain top-[-5rem] left-[-3rem] 
      lg:top-[-23rem] lg:left-[-16rem]" alt="" />
      
      <article className="h-full box1 relative flex flex-col gap-5 px-10 sm:px-0">
        <div className="hidden lg:block w-full h-[30vh] z-10 relative">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src="/assets/hero-title.png"
          className="h-full w-full object-contain object-left"
          alt=""
        />
        <img src="/assets/white star.png" className="twinkle-animation absolute h-8 object-contain top-[-10%] left-[9%]" alt="" />
        
        <img src="/assets/gray star.png" className="absolute twinkle-animation h-4 lg:h-8 object-contain top-0 right-0" alt="" />
        </div>

        {/* mobile hero */}
        <div className="lg:hidden mt-6 lg:mt-0 max-h-56 self-center relative">
        <img
         src="/assets/mobile-title.png"
          className="h-full w-full object-contain"
          alt=""
        />
        <img src="/assets/white star.png" className="twinkle-animation absolute h-4 object-contain top-[-13%] left-[24%]" alt="" />
        <img src="/assets/gray star.png" className="absolute twinkle-animation h-4 object-contain top-[-13%] right-0" alt="" />
        </div>

        <p className="max-w-md mx-auto lg:mx-0 text-center lg:text-start">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button className="gradient self-center lg:self-start w-40 py-3 relative">
          Register
          <img src="/assets/gray star.png" className="absolute twinkle-animation h-4 lg:h-8 object-contain top-[40%] -right-[20%] lg:top-[150%] lg:-right-[240%]" alt="" />
        </button>
        <img
          src="/assets/time.png"
          className="lg:mt-[3vh] object-contain self-center lg:self-start"
          alt=""
        />
      </article>

      <article className="relative box2 overflow-hidden lg:overflow-visible">
        <div className="grow h-full relative">
        <img src="/assets/flare.png" className="absolute hidden lg:block w-full object-contain 
        top-[-70%] scale-[.4] left-[35%]" alt="" />
          <img
            src="/assets/vr.png"
            className="lg:absolute lg:bottom-0 w-full h-full object-contain lg:object-right-bottom hero-image"
            alt=""
          />
          <img
            src="/assets/globe-tech.png"
            className="absolute bottom-0 globe-animation h-full lg:w-full object-right object-contain"
            alt=""
          />
         
        </div>
      </article>
    </div>
    </section>
   
  );
};

export default HeroSection;
