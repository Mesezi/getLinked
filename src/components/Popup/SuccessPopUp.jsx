import React from "react";
import FailurePopUp from "./FailurePopUp";

const SuccessPopUp = ({ setMessage, message }) => {
  const RegistrationSuccess = () => {
    return (
      <>
        <img
          src="/assets/congratulation.png"
          className="object-contain max-h-[250px]"
          alt=""
        />
        <h3 className="font-semibold text-xl lg:text-3xl">
          Congratulations <br />
          you have successfully Registered!
        </h3>
        <p className="text-sm">
          Yes, it was easy and you did it! <br />
          check your mail box for next step{" "}
          <img src="/assets/wink emoji.png" className="inline" alt="" />
        </p>
      </>
    );
  };


  const ContactSuccess = () => {
    return (
      <>
        <img
          src="/assets/congratulation.png"
          className="object-contain max-h-[250px]"
          alt=""
        />
        <h3 className="font-semibold text-xl lg:text-3xl">
          Message sent!
        </h3>
        <p className="text-sm">
        
          We will get back to you shortly
          <img src="/assets/wink emoji.png" className="inline" alt="" />
        </p>
      </>
    );
  };

  return (
    <div className="fixed bg-darkPurple/90 z-50 h-screen p-12 w-full grid place-items-center">
      <article
        className="w-full p-12 max-w-[699px] bg-[##ffffff03]
        border-[1px] rounded-[5px] border-lightPurple flex flex-col gap-5 justify-center text-center relative"
      >
        <img src="/assets/gray star.png" className="absolute twinkle-animation top-[34%] left-[20%] object-contain h-6 md:h-auto" alt="" />
        <img src="/assets/purple star.png" className="absolute twinkle-animation top-[-5%] right-[-5%] object-contain h-6" alt="" />
        <img src="/assets/gradient star.png" className="absolute twinkle-animation bottom-[-5%] right-10 object-contain h-6 md:h-auto" alt="" />
        {message.type === "registration" && <RegistrationSuccess />}
        {message.type === "contact" && <ContactSuccess />}
        <button
          onClick={() => setMessage(null)}
          className="gradient py-3 w-full"
        >
          Back
        </button>
      </article>
    </div>
  );
};

export default SuccessPopUp;
