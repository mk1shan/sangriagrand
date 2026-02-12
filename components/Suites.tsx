import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Room images
import room1 from '../src/images/rooms/room-1.jpg';
import room2 from '../src/images/rooms/room-2.jpg';
import room3 from '../src/images/rooms/room-3.jpg';
import room4 from '../src/images/rooms/room-4.jpg';
import room5 from '../src/images/rooms/room-5.jpg';
import room6 from '../src/images/rooms/room-6.jpg';
import room7 from '../src/images/rooms/room-7.jpg';
import room8 from '../src/images/rooms/room-8.jpg';
import room9 from '../src/images/rooms/room-9.jpg';
import room10 from '../src/images/rooms/room-10.jpg';

const rooms = [
  {
    id: '1',
    name: 'Deluxe Double Room',
    description: 'Spacious and elegantly designed double room with modern amenities, perfect for couples and families seeking comfort and luxury.',
    images: [room2, room1, room3],
  },
  {
    id: '2',
    name: 'Premium Double Room',
    description: 'A beautifully appointed double room featuring contemporary furnishings, private balcony views, and premium bedding for an unforgettable stay.',
    images: [room4, room5, room6],
  },
  {
    id: '3',
    name: 'Classic Single Room',
    description: 'A cozy and refined single room offering all essential comforts with warm Sri Lankan hospitality — ideal for solo travelers.',
    images: [room7, room8, room9, room10],
  }
];

const RoomCard: React.FC<{ room: typeof rooms[0]; index: number }> = ({ room, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [room.images.length]);

  return (
    <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
      {/* Image Carousel Side */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-[1.5] w-full relative group cursor-pointer aspect-[16/10] overflow-hidden rounded-sm"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={room.images[currentImageIndex]}
            alt={room.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent pointer-events-none" />

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {room.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/80'
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows (visible on hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-stone-900"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-stone-900"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </motion.div>

      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 lg:max-w-md"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-stone-400 text-xs uppercase tracking-widest">0{index + 1}</span>
          <div className="h-[1px] w-12 bg-stone-300"></div>
        </div>

        <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">{room.name}</h3>

        <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
          {room.description}
        </p>

        <button className="px-10 py-4 bg-transparent border border-stone-300 text-stone-800 text-[10px] uppercase tracking-[0.25em] hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
          Reserve Suite
        </button>
      </motion.div>
    </div>
  );
};

const Suites: React.FC = () => {
  return (
    <section className="bg-stone-50 py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-200 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4 block">Accommodations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">The Collection</h2>
          </div>
        </div>

        <div className="space-y-32">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suites;
