
import React from 'react';
import { motion } from 'framer-motion';

const Catering: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-4/5 aspect-[4/5] rounded-sm overflow-hidden border-8 border-[#1a1c1e]"
          >
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
              alt="Gourmet Plating"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            className="absolute -bottom-10 -right-6 z-20 w-3/5 aspect-square rounded-sm overflow-hidden border-8 border-[#1a1c1e] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800"
              alt="Sri Lankan Fusion"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div>
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">
            Culinary Arts
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Catering Excellence for <br />
            <span className="italic">Discerning Tastes</span>
          </h2>
          <p className="text-gray-400 mb-8 font-light leading-relaxed">
            Our award-winning chefs blend traditional Sri Lankan flavors with international 
            culinary techniques. From royal banquets to intimate gatherings, every plate is 
            a masterpiece of taste and visual artistry.
          </p>
          <ul className="space-y-4 mb-10">
            {['Customizable Fusion Menus', 'Sommelier-selected Pairings', 'Artisanal Dessert Displays'].map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-300 gap-3">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catering;
