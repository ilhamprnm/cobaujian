import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx'
import PaketSection from '../components/PaketSection.jsx'
import TestimoniSection from '../components/TestimoniSection.jsx'
import FAQSection from '../components/FAQSection.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PaketSection />
      <TestimoniSection />
      <FAQSection />
    </>
  )
}

export default Home