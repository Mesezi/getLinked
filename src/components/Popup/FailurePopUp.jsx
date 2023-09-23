import React from 'react'

const FailurePopUp = ({ setMessage }) => {
  return (
    <div className="fixed bg-darkPurple/90 z-50 h-screen p-12 w-full grid place-items-center">
    <article
      className="w-full p-12 max-w-[699px] bg-[##ffffff03]
      border-[1px] rounded-[5px] border-lightPurple flex flex-col gap-5 justify-center text-center relative"
    >
      <img src="/src/assets/gray star.png" className="absolute twinkle-animation top-[34%] left-[20%] object-contain h-6 md:h-auto" alt="" />
      <img src="/src/assets/purple star.png" className="absolute twinkle-animation top-[-5%] right-[-5%] object-contain h-6" alt="" />
      <img src="/src/assets/gradient star.png" className="absolute twinkle-animation bottom-[-5%] right-10 object-contain h-6 md:h-auto" alt="" />
      <h2 className='font-bold text-lg'>Unable to complete request</h2>
      <p>Try again later</p>
      <button
          onClick={() => setMessage(null)}
          className="gradient py-3 w-full"
        >
          Back
        </button>
    </article>
  </div>
  )
}

export default FailurePopUp