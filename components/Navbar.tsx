
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-gradient-to-b from-black/60 to-transparent py-6'
        }`}
    >
      <div className="max-w-[1800px] mx-auto px-10 flex justify-between items-center">
        {/* Left Side: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { name: 'Home', link: '#home' },
            { name: 'The Sanctuary', link: '#sanctuary' },
            { name: 'Gallery', link: '#gallery' },
            { name: 'Venues', link: '#venue' },
            { name: 'Catering', link: '#catering' },
            { name: 'Suites', link: '#suites' },
          ].map((item) => (
            <a key={item.name} href={item.link} className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-colors ${isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className={`text-2xl md:text-3xl font-serif tracking-[0.2em] font-light uppercase transition-colors ${isScrolled ? 'text-stone-900' : 'text-stone-100'}`}>SANGRIA GRAND</span>
          <div className="w-12 h-[1px] bg-[#D4AF37] mt-1 opacity-50 group-hover:w-24 transition-all duration-500" />
        </a>

        {/* Right Side: Socials & CTA */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-4">
            {/* Simple social text placeholders */}
            <a href="#" className={`text-[10px] tracking-widest hover:text-stone-900 transition-colors ${isScrolled ? 'text-stone-500' : 'text-stone-300 hover:text-white'}`}>FB</a>
            <a href="#" className={`text-[10px] tracking-widest hover:text-stone-900 transition-colors ${isScrolled ? 'text-stone-500' : 'text-stone-300 hover:text-white'}`}>IG</a>
            <a href="#" className={`text-[10px] tracking-widest hover:text-stone-900 transition-colors ${isScrolled ? 'text-stone-500' : 'text-stone-300 hover:text-white'}`}>TT</a>
          </div>
          <a
            href="#contact"
            className={`hidden sm:block px-6 py-2 border text-[10px] uppercase tracking-[0.2em] transition-all font-medium ${isScrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-stone-200 text-stone-200 hover:bg-stone-200 hover:text-stone-900'}`}
          >
            Inquire for your date
          </a>
          <button className={`lg:hidden ${isScrolled ? 'text-stone-900' : 'text-stone-100'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
