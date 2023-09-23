import React from "react";

const Timeline = () => {
  const TitleFromLeft = ({ title, date, info, number }) => {
    return (
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
      >
        <div 
         data-aos="fade-left"
         data-aos-duration="1000"
        className="flex lg:hidden self-stretch gap-2 items-center flex-col">
          <span className="w-[2px] grow bg-lightPurple"></span>
          <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
            {number}
          </span>
        </div>
        <span className="hidden lg:inline">{number}</span>
        <div className="flex flex-col gap-1 left lg:absolute">
          <h3 className="text-lightPurple  font-bold text-lg lg:text-xl relative">
            {title}
            <img
              src="/assets/purple star.png"
              className="absolute twinkle-animation h-4 lg:h-auto 
                            top-[-2rem] left-[10%] lg:top-[-7rem] lg:left-[45%]"
              alt=""
            />
          </h3>
          <p className="lg:text-sm lg:font-[200]">{info}</p>
          <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
            {date}
          </p>
        </div>
        <p className="text-lightPurple hidden lg:block font-bold text-xl right lg:absolute">
          {date}
        </p>
      </div>
    );
  };

  const TitleFromRight = ({ title, date, info, number }) => {
    return (
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="step_circle lg:h-10 lg:w-10 relative lg:text-sm lg:font-semibold 
            flex lg:justify-center gap-3 lg:gap-0 lg:items-center lg:rounded-full"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex lg:hidden self-stretch gap-2 items-center flex-col"
        >
          <span className="w-[2px] grow bg-lightPurple"></span>
          <span className="gradient-bg h-7 w-7 leading-[1.75rem] text-sm rounded-full flex justify-center">
            {number}
          </span>
        </div>
        <span className="hidden lg:inline">{number}</span>
        <div className="flex flex-col gap-1 right lg:absolute">
          <h3 className="text-lightPurple  font-bold text-lg lg:text-xl">
            {title}
          </h3>
          <p className="lg:text-sm lg:font-[200]">{info}</p>
          <p className="text-lightPurple lg:hidden  font-bold text-lg mt-auto">
            {date}
          </p>
        </div>
        <p className="text-lightPurple hidden lg:block font-bold text-xl left lg:absolute">
          {date}
        </p>
      </div>
    );
  };

  return (
    <section id="timeline" className="container mx-auto p-10 py-20">
      <div className="lg:max-w-xs mx-auto text-center space-y-3">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="font-CdSemiBold text-[20px] lg:text-4xl tracking-normal"
        >
          Timeline
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:font-[200] text-[12px]  lg:text-sm "
        >
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div>
        <div className="timeline my-16 flex flex-col gap-3 relative">
          <img
            src="/assets/gray star.png"
            className="absolute twinkle-animation h-4 lg:h-auto bottom-[-4%] -left-6 lg:left-0 lg:bottom-0"
            alt=""
          />

          <div className="hidden lg:block h-[120px] w-[4px] bg-lightPurple"></div>

          <TitleFromLeft
            title={"Hackathon Announcemment"}
            number={"1"}
            info={`
          The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register`}
            date={"November 18, 2023"}
          />

          <div className="line"></div>

          <TitleFromRight
            title={"Teams Registration begins"}
            number={"2"}
            info={`interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register`}
            date={"November 18, 2023"}
          />

          <div className="line"></div>
          <TitleFromLeft
            title={"Teams Registration ends"}
            number={"3"}
            info={`Interested Participants are no longer Allowed to register`}
            date={"November 18, 2023"}
          />

          <div className="line"></div>
          <TitleFromRight
            title={"Announcement of the accepted teams and ideas"}
            number={"4"}
            info={`All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced`}
            date={"November 18, 2023"}
          />

          <div className="line"></div>
          <TitleFromLeft
            title={"Getlinked Hackathon 1.0 Offically Begins"}
            number={"5"}
            info={`
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions`}
            date={"November 18, 2023"}
          />

          <div className="line"></div>

          <TitleFromRight
            title={"Demo Day"}
            number={"6"}
            info={`Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day`}
            date={"November 18, 2023"}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
