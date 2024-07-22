import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx'
import PaketSection from '../components/PaketSection.jsx'
import TestimoniSection from '../components/TestimoniSection.jsx'
import FAQSection from '../components/FAQSection.jsx'
import DemoSection from '../components/DemoSection.jsx';
import Footer from '../components/Footer.jsx'
import Contacts from '../components/Contacts.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PaketSection />
      <TestimoniSection />
      <FAQSection />
      <DemoSection />
      <Footer />
      <Contacts />
    </>
  )
}

export default Home