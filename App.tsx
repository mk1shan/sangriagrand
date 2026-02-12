import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MomentsTicker from './components/MomentsTicker';
import AboutVenue from './components/AboutVenue';
import Venues from './components/Venues';
import Suites from './components/Suites';
import LoveStories from './components/LoveStories';
import CuratedMoments from './components/CuratedMoments';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white text-stone-900">
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />

        <MomentsTicker text="THEIR FAVORITE MOMENTS" />

        <section id="sanctuary">
          <AboutVenue />
        </section>

        <section id="gallery">
          <CuratedMoments />
        </section>

        <section id="venue">
          <Venues />
        </section>

        <section id="catering">
          <LoveStories />
        </section>

        <section id="suites">
          <Suites />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
