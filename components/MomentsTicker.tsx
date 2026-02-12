import React from 'react';
import { motion } from 'framer-motion';

const MomentsTicker: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="py-8 border-y border-stone-100 overflow-hidden bg-stone-50/50 backdrop-blur-sm">
      <div className="flex relative whitespace-nowrap overflow-hidden select-none">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="flex space-x-12 items-center"
        >
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-stone-400 font-medium">
                {text}
              </span>
              <span className="text-amber-300/60 text-[10px] transform rotate-45">♦</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-stone-400 font-medium">
                {text}
              </span>
              <span className="text-amber-300/60 text-[10px] transform rotate-45">♦</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MomentsTicker;
