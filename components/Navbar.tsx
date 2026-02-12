import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'The Sanctuary', link: '#sanctuary' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Venues', link: '#venue' },
    { name: 'Catering', link: '#catering' },
    { name: 'Suites', link: '#suites' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isOpen ? 'bg-white' : (isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-gradient-to-b from-black/60 to-transparent py-6')
        }`}
    >
      <div className="max-w-[1800px] mx-auto px-10 flex justify-between items-center">
        {/* Left Side: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a key={item.name} href={item.link} className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-colors ${isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className={`text-2xl md:text-3xl font-serif tracking-[0.2em] font-light uppercase transition-colors ${isScrolled || isOpen ? 'text-stone-900' : 'text-stone-100'}`}>SANGRIA GRAND</span>
          <div className="w-12 h-[1px] bg-[#D4AF37] mt-1 opacity-50 group-hover:w-24 transition-all duration-500" />
        </a>

        {/* Right Side: Socials & CTA */}
        <div className="flex items-center space-x-8">
          <a
            href="#contact"
            className={`hidden sm:block px-6 py-2 border text-[10px] uppercase tracking-[0.2em] transition-all font-medium ${isScrolled || isOpen ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-stone-200 text-stone-200 hover:bg-stone-200 hover:text-stone-900'}`}
          >
            Inquire for your date
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-50 p-2 transition-colors ${isScrolled || isOpen ? 'text-stone-900' : 'text-stone-100'}`}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col justify-center items-center lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-stone-900 text-xl font-serif uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-900 hover:text-white transition-all"
                >
                  Inquire for your date
                </a>
              </motion.div>

            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
              <span className="text-stone-300 text-[10px] uppercase tracking-[0.3em] font-light italic">Sangria Grand Hotel</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
