
import React from 'react';
import { motion } from 'framer-motion';

const Ballroom: React.FC = () => {


  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-stone-500 uppercase tracking-[0.4em] text-xs font-semibold mb-4 block"
          >
            Celebrate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            Weddings & Events
          </motion.h2>
          <p className="text-stone-600 font-light leading-relaxed">
            From intimate garden ceremonies to grand ballroom receptions, our venues are bathed in natural light
            and designed to create unforgettable memories. Experience the perfect blend of luxury and nature.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hidden md:block"
        >
          <button className="text-stone-900 border-b border-stone-300 pb-1 uppercase tracking-widest text-xs font-medium hover:text-stone-600 hover:border-stone-900 transition-all">
            View Floor Plans
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Grand Ballroom', desc: 'Capacity: 800+ | Luxury Interiors', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800' },
          { title: 'Garden Veranda', desc: 'Capacity: 300 | Open Air Elegance', img: 'https://images.unsplash.com/photo-1587271407850-8d4389245c85?auto=format&fit=crop&q=80&w=800' },
          { title: 'Signature Catering', desc: 'Exquisite Culinary Experiences', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-serif text-white mb-2">{feature.title}</h3>
              <p className="text-stone-200 text-sm font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ballroom;
