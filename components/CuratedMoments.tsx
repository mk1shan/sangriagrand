import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../src/images/wedding/wedding-1.jpg';
import img2 from '../src/images/wedding/wedding-2.jpg';
import img3 from '../src/images/wedding/wedding-3.jpg';
import img4 from '../src/images/wedding/wedding-4.jpg';
import img5 from '../src/images/wedding/wedding-5.jpg';
import img6 from '../src/images/wedding/wedding-6.jpg';

const gallery = [
    { src: img1, title: 'Morning Grace', category: 'Preparation' },
    { src: img2, title: 'Sacred Union', category: 'Ceremony' },
    { src: img3, title: 'Promised Forever', category: 'The Vows' },
    { src: img4, title: 'Heartfelt Tears', category: 'Emotion' },
    { src: img5, title: 'Golden Memories', category: 'Celebration' },
    { src: img6, title: 'Into the Night', category: 'First Dance' },
];

const CuratedMoments: React.FC = () => {
    return (
        <section className="bg-stone-900 text-stone-200 py-32 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Header — matches site pattern (label + serif heading with italic accent) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-amber-200/60 text-[10px] uppercase tracking-[0.4em] block mb-4">
                        Our Gallery
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white leading-none mb-6">
                        Curated <span className="italic text-stone-500">Moments</span>
                    </h2>
                    <p className="text-stone-500 font-light text-sm max-w-md mx-auto leading-relaxed">
                        Every frame tells a story. Every story begins at Sangria Grand.
                    </p>
                </motion.div>

                {/* Gallery Grid — 3 columns, consistent, tight */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="group relative overflow-hidden cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 brightness-[1.02] sepia-[0.03]"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Inner border — matches LoveStories pattern */}
                                <div className="absolute inset-0 border-[1px] border-white/10 m-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Text — always visible at bottom of image */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-amber-200/50 text-[9px] uppercase tracking-[0.35em] block mb-2">
                                    {item.category}
                                </span>
                                <h3 className="font-serif text-xl text-white leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA — matches site button patterns */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://www.facebook.com/profile.php?id=100064087303389&sk=photos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 border border-stone-700 text-white text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-stone-900 hover:border-white transition-all duration-300"
                    >
                        View Full Gallery
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CuratedMoments;
