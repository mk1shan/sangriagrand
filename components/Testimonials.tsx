
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-semibold mb-12 block">
        Happy Couples
      </span>

      <div className="relative h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center justify-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-8 border-2 border-[#D4AF37]/30">
              <img src={TESTIMONIALS[activeIdx].image} alt={TESTIMONIALS[activeIdx].name} className="w-full h-full object-cover" />
            </div>
            <p className="text-2xl md:text-3xl font-serif text-white italic mb-8 leading-relaxed">
              "{TESTIMONIALS[activeIdx].quote}"
            </p>
            <h4 className="text-lg font-serif text-[#D4AF37]">{TESTIMONIALS[activeIdx].name}</h4>
            <span className="text-xs uppercase tracking-widest text-gray-500">{TESTIMONIALS[activeIdx].event}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIdx === idx ? 'bg-[#D4AF37] w-8' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
