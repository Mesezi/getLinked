import React from "react";

const Timeline = () => {
  return (
    <section id="timeline" className="container mx-auto p-10 py-20">
      <div className="lg:max-w-xs mx-auto text-center space-y-3">
        <h2
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="font-CdSemiBold text-[20px] lg:text-4xl tracking-normal">
          Timeline
        </h2>
        <p className="lg:font-[200] text-[12px]  lg:text-sm ">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div>
        <div className="timeline_2 my-16 flex flex-col gap-3 relative">
          <img
            src="/assets/gray star.png"
            className="absolute twinkle-animation h-4 lg:h-auto bottom-[-4%] -left-6 lg:left-0 lg:bottom-0"
            alt=""
          />

          <div className="hidden lg:block h-[120px] w-[4px] bg-lightPurple"></div>
          <div data-aos="fade-right"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                1
              </span>
            </div>
            <span className="hidden lg:inline">1</span>
            <div className="flex flex-col gap-1 left lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl relative">
                Hackathon Announcemment
                <img
                  src="/assets/purple star.png"
                  className="absolute twinkle-animation h-4 lg:h-auto 
                            top-[-2rem] left-[10%] lg:top-[-7rem] lg:left-[45%]"
                  alt=""
                />
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl right lg:absolute">
              November 18, 2023
            </p>
          </div>

          <div
          className="line"></div>

          <div  data-aos="fade-left"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div  data-aos="fade-right"
          data-aos-duration="1500" className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                2
              </span>
            </div>
            <span className="hidden lg:inline">2</span>
            <div className="flex flex-col gap-1 right lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
                Teams Registration begins
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to registerr
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl left lg:absolute">
              November 18, 2023
            </p>
          </div>

          <div className="line"></div>

          <div  data-aos="fade-right"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                3
              </span>
            </div>
            <span className="hidden lg:inline">3</span>
            <div className="flex flex-col gap-1 left lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
                Teams Registration ends
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                Interested Participants are no longer Allowed to register
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
                <img
                  src="/assets/white star.png"
                  className="absolute twinkle-animation h-4 lg:h-auto bottom-0 right-[-70%]"
                  alt=""
                />
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl right lg:absolute">
              November 18, 2023
              <img
                src="/assets/white star.png"
                className="absolute twinkle-animation h-4 lg:h-auto  -top-10 right-[40%]"
                alt=""
              />
            </p>
          </div>

          <div className="line"></div>

          <div  data-aos="fade-left"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                4
              </span>
            </div>
            <span className="hidden lg:inline">4</span>
            <div className="flex flex-col gap-1 right lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl left lg:absolute">
              November 18, 2023
            </p>
          </div>

          <div className="line"></div>

          <div  data-aos="fade-right"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                5
              </span>
            </div>
            <span className="hidden lg:inline">5</span>
            <div className="flex flex-col gap-1 left lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl right lg:absolute">
              November 18, 2023
            </p>
          </div>

          <div className="line"></div>

          <div  data-aos="fade-left"
          data-aos-duration="1500"
            className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
          >
            <div className="flex lg:hidden self-stretch gap-2 items-center flex-col">
              <span className="w-[2px] grow bg-lightPurple"></span>
              <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
                6
              </span>
            </div>
            <span className="hidden lg:inline">6</span>
            <div className="flex flex-col gap-1 right lg:absolute">
              <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
                Demo Day
              </h3>
              <p className="lg:text-sm lg:font-[200]">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
                November 18, 2023
              </p>
            </div>
            <p className="text-lightPurple hidden lg:block font-bold text-xl left lg:absolute">
              November 18, 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
