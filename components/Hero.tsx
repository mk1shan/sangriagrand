
import React from 'react';
import { motion } from 'framer-motion';

import heroBg from '../src/images/happy-brides-2026-01-06-08-45-52-utc.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            className="w-full h-full object-cover opacity-90"
            alt="Happy Brides at Sangria Grand"
          />
        </motion.div>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/40 to-stone-950/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 overflow-hidden">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block text-stone-300 text-xs md:text-sm uppercase tracking-[0.6em] font-medium border border-stone-400/30 px-6 py-2 backdrop-blur-sm rounded-sm"
            >
              The Beginning of Forever
            </motion.span>
          </div>

          <h1 className="text-6xl md:text-[130px] font-serif text-stone-200 mb-4 leading-[0.85] tracking-tight drop-shadow-2xl shadow-black">
            SANGRIA <br />
            <span className="italic font-light text-amber-100/90 drop-shadow-md">GRAND</span>
          </h1>

          <p className="max-w-2xl text-stone-200 font-light leading-relaxed mb-12 text-sm md:text-lg drop-shadow-xl tracking-wide shadow-black">
            Where iconic luxury meets your love story. <br className="hidden md:block" />
            Celebrate your union in Middeniya's most breathtaking wedding destination.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-stone-200 text-stone-900 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-300 shadow-amber-500/10"
            >
              Plan Your Wedding
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-stone-400/30 text-stone-200 text-[11px] uppercase tracking-[0.3em] font-medium backdrop-blur-md hover:border-white transition-colors duration-300"
            >
              View Our Suites
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default Hero;
