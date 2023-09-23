import React from "react";

const Judging = () => {
  return (
    <section className="border-b-[1px] border-white/10 relative">
      
      <div className=" p-10 py-12 pt-24 lg:pt-12 lg:pb-20 lg:px-5 grid grid-cols-1 text-center relative z-10 lg:text-start lg:gap-10 lg:grid-cols-2">
        <div 
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-offset="400"
        className="flex justify-center items-center relative">
          <div className="h-[7.5rem] w-[7.5rem] hidden lg:block rounded-full judge-circle absolute top-[10%] left-[14%]"></div>
          <img src="/assets/purple star.png" className="absolute twinkle-animation h-4 sm:h-auto top-[-17%] lg:top-[-3%] lg:left-[21%]" alt="star" />
          <img src="/assets/gray star.png" className="absolute twinkle-animation h-3 sm:h-auto top-[50%] left-[55%]" alt="star" />
          <img src="/assets/flare.png" className="absolute bottom-[-20%] lg:bottom-0 left-[-15%] blend-mode" alt="flare image" />
          <img src="/assets/judges.png" className="object-contain relative z-10" alt="Judges image" />
        </div>

        <div className="flex flex-col gap-5 lg:max-w-lg">
          <h2
          data-aos="zoom-in-down"
          data-aos-duration="1000" data-aos-offset="400"
          className="font-CdSemiBold text-[20px] lg:text-4xl tracking-normal">
            Judging Criteria
            <br />
            <span className="text-lightPurple font-CdBold">Key attributes</span>
          </h2>
          <div 
          className="lg:text-[14px] lg:font-[200] leading-[28px] flex flex-col gap-4">
            <article 
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400">
              <p className="lg:font-[200]">
                <span className="text-[#FF26B9] font-bold">
                  Innovation and Creativity:
                </span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
            </article>

            <article 
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400">
              <p className="lg:font-[200]">
                <span className="text-[#FF26B9] font-bold">Functionality:</span>{" "}
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
            </article>

            <article 
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400">
              <p className="lg:font-[200]">
                <span className="text-[#FF26B9] font-bold">
                  Impact and Relevance:
                </span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
            </article>

            <article 
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400">
              <p className="lg:font-[200]">
                <span className="text-[#FF26B9] font-bold">
                  Technical Complexity:
                </span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
            </article>

            <article 
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400">
              <p className="lg:font-[200]">
                <span className="text-[#FF26B9] font-bold">
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </article>

            <button
          data-aos="fade-left"
          data-aos-duration="1000" data-aos-offset="400"
            className="mx-auto lg:mx-0 w-40 py-2 font-semibold mt-5 gradient text-md relative">
            Read More
            <img src="/assets/white star.png" className="absolute twinkle-animation h-4 md:h-auto bottom-[56%]
             left-[165%] lg:bottom-0 lg:left-[-55%]" alt="star" />
            </button>

          </div>
        </div>
      </div>
      <img src="/assets/flare.png" className="absolute blend-mode object-cover max-w-[50rem] 
      right-[-100%] bottom-[-8%] lg:right-[-30%] lg:bottom-[-50%]" alt="flare image" />
    </section>
  );
};

export default Judging;
