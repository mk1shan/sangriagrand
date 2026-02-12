
import React from 'react';
import { motion } from 'framer-motion';

const StoryGrid: React.FC = () => {
  const items = [
    {
      title: 'THEIR AMAZING DAY',
      desc: 'The bride and groom’s hands gently clasped, a quiet yet powerful symbol of their love.',
      img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'I’LL BRING YOU FLOWERS',
      desc: 'The bride’s bouquet, a beautiful blend of soft roses and wildflowers, perfectly complements.',
      img: 'https://images.unsplash.com/photo-1522673607200-1645062cd95c?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'FOREVER AND EVER',
      desc: 'A candid shot of the bride and groom laughing during their rustic barn reception.',
      img: 'https://images.unsplash.com/photo-1511285560982-13512ee60b31?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 shadow-sm group hover:shadow-xl transition-all duration-500 rounded-sm cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-10 relative">
              <img
                src={item.img}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
            </div>
            <div className="text-center px-4">
              <h3 className="text-sm font-serif text-stone-900 tracking-[0.2em] mb-4 uppercase group-hover:text-stone-600 transition-colors">{item.title}</h3>
              <p className="text-[12px] text-stone-500 font-light leading-relaxed max-w-[200px] mx-auto italic">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryGrid;
