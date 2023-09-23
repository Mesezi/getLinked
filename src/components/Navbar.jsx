import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    
    useEffect(()=>{
        const nav = document.querySelector('nav')
        if(menuToggle){
           return nav.classList.add('show')
        }
        return nav.classList.remove('show')
    }, [menuToggle])


  return (
    <header className='border-b-[1px] border-white/10 w-full relative z-10'>
        <div className='container z-50 px-10 sm:px-0 mx-auto h-20 lg:h-[90px] flex justify-between items-center'>
            <NavLink to={'/'}> <img src={"/assets/logo.png"} className='h-6 object-contain' alt="" /></NavLink>
           
            <nav className='fixed h-full lg:h-auto bg-darkPurple lg:bg-transparent lg:static top-0 left-0 w-full lg:w-auto z-[9999]'>
                <ul className='flex flex-col lg:flex-row w-full lg:w-auto p-12 lg:p-0
                 gap-8 lg:bg-transparent lg:gap-12 text-lg lg:text-sm lg:items-center'>
                    <li className='flex lg:hidden justify-end mb-5'>
                    <svg onClick={()=>setMenuToggle(false)}  width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_181_74)"/>
<path d="M6.3075 16.6925C6.50446 16.8894 6.77155 17 7.05005 17C7.32854 17 7.59563 16.8894 7.79259 16.6925L11.5063 12.9787L15.2201 16.6925C15.4182 16.8838 15.6835 16.9897 15.9589 16.9873C16.2342 16.9849 16.4977 16.8744 16.6924 16.6797C16.8871 16.485 16.9976 16.2216 17 15.9462C17.0024 15.6708 16.8965 15.4055 16.7052 15.2074L12.9914 11.4937L16.7052 7.77991C16.8965 7.58182 17.0024 7.31652 17 7.04114C16.9976 6.76577 16.8871 6.50235 16.6924 6.30762C16.4977 6.11289 16.2342 6.00243 15.9589 6.00004C15.6835 5.99765 15.4182 6.10351 15.2201 6.29482L11.5063 10.0086L7.79259 6.29482C7.5945 6.10351 7.3292 5.99765 7.05383 6.00004C6.77845 6.00243 6.51503 6.11289 6.3203 6.30762C6.12557 6.50235 6.01511 6.76577 6.01272 7.04114C6.01033 7.31652 6.11619 7.58182 6.3075 7.77991L10.0213 11.4937L6.3075 15.2074C6.11061 15.4044 6 15.6715 6 15.95C6 16.2284 6.11061 16.4955 6.3075 16.6925Z" fill="#F8F8F8"/>
<defs>
<linearGradient id="paint0_linear_181_74" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="#903AFF"/>
<stop offset="1" stop-color="#FF26B9"/>
</linearGradient>
</defs>
</svg>

</li>
                    <li>
                    <Link to={'/#timeline'}>
                    Timeline
                    </Link></li>
                    <li>
                    <Link to={'/#overview'}>
                    Overview
                       </Link></li>

                    <li>
                       <Link to={'/#faqs'}>
                       FAQs
                       </Link> </li>
                    <li>
                    <NavLink to={'/contact'}  className={({ isActive }) =>isActive ? "gradient-text" : ""}>
                    Contact
                       </NavLink>
                       </li>
                    {
                        location.pathname !== '/register' ?
                        <li className='lg:ml-20 py-3 w-[172px] gradient text-center'>
                             <Link to={'/register'}  className={({ isActive }) =>isActive ? "gradient-text" : ""}>
                             Register
                       </Link>
                       </li> :
                        <li className='lg:ml-20 w-[172px] p-1 gradient text-center block'>
                            <span className='bg-darkPurple h-full py-3 w-full inline-block'>Register</span>
                            </li>
                    }
                    
                </ul>
            </nav>

<svg onClick={()=>setMenuToggle(true)} className='lg:hidden' width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
        </svg>  

           
        </div>
    </header>
  )
}

export default Navbar
