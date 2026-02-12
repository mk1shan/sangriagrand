import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../src/images/about-venue-3.jpg';

const AboutVenue: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Content Side - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-stone-400"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">Est. 2024</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
            A Legacy of <br />
            <span className="italic text-stone-500">Luxury</span>
          </h2>

          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base mb-8">
            Sangria Grand isn't just a hotel; it is a destination defined by its attention to detail.
            From the grand marble foyer to the whisper-quiet gardens, every corner is curated to provide
            a backdrop of effortless elegance for your celebration.
          </p>

          <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base mb-12">
            We invite you to step into a world where hospitality is an art form, and your comfort is our sole masterpiece.
          </p>

          <button className="px-8 py-4 bg-stone-900 text-white text-[10px] uppercase tracking-widest hover:bg-stone-700 transition-all shadow-xl">
            Explore The Property
          </button>
        </motion.div>

        {/* Image Side - Right (Contained, Smaller) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[3/4] max-h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
            <img
              src={aboutImg}
              alt="Sangria Grand Architecture"
              className="w-full h-full object-cover brightness-[1.1] contrast-[1.05] sepia-[0.1]" // Consistently applied "pearly" grade
            />
            <div className="absolute inset-0 bg-stone-500/10 mix-blend-multiply" />
          </div>

          {/* Decorative Element to balance the smaller image */}
          <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-stone-200 -z-10 rounded-sm" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutVenue;
