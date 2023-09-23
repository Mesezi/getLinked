import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BigIdea from '../components/BigIdea'
import Rules from '../components/Rules'
import Judging from '../components/Judging'
import Faq from '../components/Faq'
import Timeline from '../components/Timeline'
import Prizes from '../components/Prizes'
import Partners from '../components/Partners'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <BigIdea />
    <Rules />
    <Judging />
    <Faq />
    <Timeline />
    <Prizes />
    <Partners />
    <Privacy />
    <Footer />
    </div>
    
  )
}

export default Landing