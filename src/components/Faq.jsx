import React from 'react'



const Faq = () => {

    const FaqDropdown =({text})=>{
        return(
            <article 
            data-aos="fade-right"
            data-aos-duration="1500" data-aos-offset="100" 
            className='group py-3 border-b-[1px] border-lightPurple cursor-pointer ease-in-out duration-300'>
                <div  className='flex justify-between items-center'>
                <p className='text-start'>{text}</p>
                <span className='text-lightPurple text-xl font-bold group-hover:rotate-45 ease-in-out duration-200'>+</span>
                </div>
               
                <div className='h-0 text-xs overflow-hidden group-hover:h-auto ease-in-out duration-300'>
                    <p className='pt-2 text-start'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, ducimus.
                    </p>
                </div>
               
            </article>
        )
    }
  return (
    <section id='faqs' className='border-b-[1px] border-white/10'>
    <div className='container mx-auto p-10 lg:py-12 md:px-0 flex gap-20 lg:gap-10 flex-col lg:flex-row text-center lg:text-start'>

    <div className='flex flex-col justify-center gap-3 lg:w-[440px] pt-10'>
          <h2
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className='font-CdSemiBold text-[20px] lg:text-4xl tracking-normal relative w-fit mx-auto lg:mx-0'>Frequently Ask 
          <br/ ><span className='text-lightPurple font-CdBold'>Question</span>
          <img src="/src/assets/purple star.png" className="absolute twinkle-animation h-6 lg:h-auto top-[-40%] left-[-40%] lg:top-[-70%] lg:left-[-10%]" alt="" />
          </h2>
          <p className='lg:text-[14px] font-[200] leading-[2rem] mx-auto lg:mx-0 lg:max-w-xs'>
          We got answers to the questions that you might
          want to ask <bold>about getlinked Hackathon 1.0</bold>
          </p>

          <div className='mt-5 text-sm space-y-4'>
           <FaqDropdown text={'Can I work on a project I started before the hackathon?'}/>
           <FaqDropdown text={'What happens if I need help during the hackathon?'}/>
           <FaqDropdown text={"What happens if I don't have an idea for a project?"}/>
           <FaqDropdown text={'Can I join a team or do I have to come with one?'}/>
            <FaqDropdown text={'What happens after the hackathon ends?'}/>
            <FaqDropdown text={'Can I work on a project I started before the hackathon?'}/>
            <FaqDropdown text={'Can I work on a project I started before the hackathon?'}/>
          </div>
      </div>

      <div 
      data-aos="zoom-in-left"
      data-aos-duration="1500"
      data-aos-offset="400"
      className='grow flex justify-center relative z-10'>
          <img src="/src/assets/man on cloud.png" className='object-contain pt-7' alt="" />
          <svg className='absolute top-[2%] right-[34%] lg:right-[39%] hover:rotate-10 h-14'  viewBox="0 0 43 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.424 70.248C17.392 70.248 14.032 66.888 14.032 62.76C14.032 58.728 17.392 55.368 21.424 55.368C25.552 55.368 28.912 58.728 28.912 62.76C28.912 66.888 25.552 70.248 21.424 70.248ZM21.424 56.232C17.872 56.232 14.896 59.208 14.896 62.76C14.896 66.408 17.872 69.384 21.424 69.384C25.072 69.384 28.048 66.408 28.048 62.76C28.048 59.208 25.072 56.232 21.424 56.232ZM27.664 47.208V47.592H15.376V47.208C15.376 38.856 19.696 34.248 23.536 30.216C26.512 27.048 29.104 24.264 29.104 20.328C29.104 15.432 25.936 12.456 20.656 12.456C14.896 12.456 13.072 16.872 12.496 19.464L12.4 19.944L0.592 16.968L0.688 16.584C2.992 6.6 10.864 0.647999 21.52 0.647999C32.656 0.647999 42.064 8.904 42.064 18.6C42.064 26.472 38.128 30.504 34.384 34.344C30.928 37.896 27.664 41.16 27.664 47.208ZM16.24 46.728H26.896C26.992 40.68 30.256 37.32 33.808 33.768C37.456 30.024 41.296 26.088 41.296 18.6C41.296 9.288 32.272 1.512 21.52 1.512C11.344 1.512 3.952 7.08 1.648 16.392L11.728 18.888C12.88 14.28 16.144 11.592 20.656 11.592C26.416 11.592 29.968 14.952 29.968 20.328C29.968 24.552 27.184 27.624 24.112 30.792C20.464 34.632 16.336 39.048 16.24 46.728Z" fill="#A866FD"/>
</svg>

<svg className='absolute top-[-8%] left-[33%] lg:top-[-4%] h-20' viewBox="0 0 56 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.232 93.664C22.856 93.664 18.376 89.184 18.376 83.68C18.376 78.304 22.856 73.824 28.232 73.824C33.736 73.824 38.216 78.304 38.216 83.68C38.216 89.184 33.736 93.664 28.232 93.664ZM28.232 74.976C23.496 74.976 19.528 78.944 19.528 83.68C19.528 88.544 23.496 92.512 28.232 92.512C33.096 92.512 37.064 88.544 37.064 83.68C37.064 78.944 33.096 74.976 28.232 74.976ZM36.552 62.944V63.456H20.168V62.944C20.168 51.808 25.928 45.664 31.048 40.288C35.016 36.064 38.472 32.352 38.472 27.104C38.472 20.576 34.248 16.608 27.208 16.608C19.528 16.608 17.096 22.496 16.328 25.952L16.2 26.592L0.456 22.624L0.584 22.112C3.656 8.8 14.152 0.863998 28.36 0.863998C43.208 0.863998 55.752 11.872 55.752 24.8C55.752 35.296 50.504 40.672 45.512 45.792C40.904 50.528 36.552 54.88 36.552 62.944ZM21.32 62.304H35.528C35.656 54.24 40.008 49.76 44.744 45.024C49.608 40.032 54.728 34.784 54.728 24.8C54.728 12.384 42.696 2.016 28.36 2.016C14.792 2.016 4.936 9.43999 1.864 21.856L15.304 25.184C16.84 19.04 21.192 15.456 27.208 15.456C34.888 15.456 39.624 19.936 39.624 27.104C39.624 32.736 35.912 36.832 31.816 41.056C26.952 46.176 21.448 52.064 21.32 62.304Z" fill="#D434FE"/>
</svg>

<svg className='absolute top-[2%] right-[79%] h-14' viewBox="0 0 43 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.424 70.248C17.392 70.248 14.032 66.888 14.032 62.76C14.032 58.728 17.392 55.368 21.424 55.368C25.552 55.368 28.912 58.728 28.912 62.76C28.912 66.888 25.552 70.248 21.424 70.248ZM21.424 56.232C17.872 56.232 14.896 59.208 14.896 62.76C14.896 66.408 17.872 69.384 21.424 69.384C25.072 69.384 28.048 66.408 28.048 62.76C28.048 59.208 25.072 56.232 21.424 56.232ZM27.664 47.208V47.592H15.376V47.208C15.376 38.856 19.696 34.248 23.536 30.216C26.512 27.048 29.104 24.264 29.104 20.328C29.104 15.432 25.936 12.456 20.656 12.456C14.896 12.456 13.072 16.872 12.496 19.464L12.4 19.944L0.592 16.968L0.688 16.584C2.992 6.6 10.864 0.647999 21.52 0.647999C32.656 0.647999 42.064 8.904 42.064 18.6C42.064 26.472 38.128 30.504 34.384 34.344C30.928 37.896 27.664 41.16 27.664 47.208ZM16.24 46.728H26.896C26.992 40.68 30.256 37.32 33.808 33.768C37.456 30.024 41.296 26.088 41.296 18.6C41.296 9.288 32.272 1.512 21.52 1.512C11.344 1.512 3.952 7.08 1.648 16.392L11.728 18.888C12.88 14.28 16.144 11.592 20.656 11.592C26.416 11.592 29.968 14.952 29.968 20.328C29.968 24.552 27.184 27.624 24.112 30.792C20.464 34.632 16.336 39.048 16.24 46.728Z" fill="#A866FD"/>
</svg>

<img src="/src/assets/gradient star.png" className='absolute twinkle-animation h-4 md:h-auto top-[-3%] right-[48%] lg:top-[2%] lg:right-[52%]' alt="" />
<img src="/src/assets/gradient star.png" className='absolute twinkle-animation h-2 md:h-auto top-[36%] lg:top-[22%] right-[75%]' alt="" />
<img src="/src/assets/gray star.png" className='absolute twinkle-animation h-4 md:h-auto top-[52%] right-[88%]' alt="" />
<img src="/src/assets/white star.png" className='absolute twinkle-animation h-4 md:h-auto top-[97%] right-[20%]' alt="" />
      </div>

  </div>

  </section>
  )
}

export default Faq