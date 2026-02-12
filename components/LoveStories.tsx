import React from 'react';
import { motion } from 'framer-motion';

import catering1 from '../src/images/catering/catering-1.jpg';
import catering2 from '../src/images/catering/catering-2.jpg';
import catering3 from '../src/images/catering/catering-3.jpg';
import catering4 from '../src/images/catering/catering-4.jpg';
import catering5 from '../src/images/catering/catering-5.jpg';
import catering6 from '../src/images/catering/catering-6.jpg';
import catering7 from '../src/images/catering/catering-7.jpg';

const cateringEvents = [
    { label: 'Weddings', icon: '💐' },
    { label: 'Birthday Parties', icon: '🎂' },
    { label: 'Corporate Events', icon: '🏢' },
    { label: 'Funerals', icon: '🕊️' },
    { label: 'Private Gatherings', icon: '✨' },
    { label: 'All Occasions', icon: '🎉' },
];

const LoveStories: React.FC = () => {
    return (
        <section className="bg-stone-900 text-stone-200 py-32 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left — Story Content */}
                <div className="space-y-12 order-2 lg:order-1">
                    <div className="space-y-2">
                        <span className="text-amber-200/60 text-[10px] uppercase tracking-[0.4em]">Our Expertise</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-white leading-none">
                            Catering <br />
                            <span className="italic text-stone-500">Service</span>
                        </h2>
                    </div>

                    <div className="space-y-6 font-light text-stone-400 text-sm leading-loose max-w-md">
                        <p>
                            Our dedicated catering team handles everything — from menu planning and food
                            preparation to elegant table setups and professional service staff. Whether you need
                            a lavish wedding buffet for 800 guests, a sit-down dinner for an intimate birthday,
                            or thoughtful refreshments for a funeral gathering, we take care of every detail.
                        </p>
                        <p>
                            Choose from authentic Sri Lankan rice & curry spreads, Western-style fine dining courses,
                            Chinese and Indian fusion menus, or fully customised menus designed around your preferences
                            and budget. We also provide dessert stations, live cooking counters, and beverage service
                            for any event — big or small.
                        </p>
                    </div>

                    {/* Event types with subtle animation */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {cateringEvents.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex items-center gap-2 py-2 px-3 border border-stone-800 hover:border-amber-200/30 transition-colors duration-500 group cursor-default"
                            >
                                <span className="text-sm">{event.icon}</span>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-stone-500 group-hover:text-stone-300 transition-colors duration-500">
                                    {event.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href="https://www.facebook.com/profile.php?id=100064087303389"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white border-b border-stone-600 pb-2 text-[10px] uppercase tracking-[0.3em] hover:text-amber-200 hover:border-amber-200 transition-all"
                    >
                        Explore Our Menu
                    </a>
                </div>

                {/* Right — Stacked Images Collage */}
                <div className="relative order-1 lg:order-2">
                    {/* Main large image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative aspect-[3/4] overflow-hidden"
                    >
                        <img
                            src={catering1}
                            alt="Fine Dining Catering"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 border-[1px] border-white/10 m-6 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/80 to-transparent h-1/3" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                                Every plate, a masterpiece
                            </span>
                        </div>
                    </motion.div>

                    {/* Small image thumbnails below */}
                    <div className="grid grid-cols-3 gap-1 mt-1">
                        {[catering2, catering3, catering4, catering5, catering6, catering7].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className="aspect-square overflow-hidden relative group"
                            >
                                <img
                                    src={src}
                                    alt={`Catering ${i + 1}`}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LoveStories;
