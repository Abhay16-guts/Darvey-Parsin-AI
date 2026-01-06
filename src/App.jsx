import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import GridCanvas from './components/gridCanvas.jsx'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
     
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled}/>
      <GridCanvas className="z-0"/>
      <Hero className="z-1"/>
      <Features className="z-1"/>
      <Pricing className="z-1"/>
      <Testimonials className="z-1"/>
      <Footer className="z-1"/>
    </div>
  )
}

export default App
