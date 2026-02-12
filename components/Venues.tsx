import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hall images
import hall1 from '../src/images/hall/hall-1.jpg';
import hall3 from '../src/images/hall/hall-3.jpg';
import hall4 from '../src/images/hall/hall-4.jpg';
import hall5 from '../src/images/hall/hall-5.jpg';

// Wedding images
import wedding1 from '../src/images/wedding/wedding-1.jpg';
import wedding2 from '../src/images/wedding/wedding-2.jpg';
import wedding3 from '../src/images/wedding/wedding-3.jpg';
import wedding4 from '../src/images/wedding/wedding-4.jpg';
import wedding5 from '../src/images/wedding/wedding-5.jpg';
import wedding6 from '../src/images/wedding/wedding-6.jpg';
import wedding7 from '../src/images/wedding/wedding-7.jpg';
import wedding8 from '../src/images/wedding/wedding-8.jpg';
import wedding9 from '../src/images/wedding/wedding-9.jpg';
import wedding10 from '../src/images/wedding/wedding-10.jpg';
import wedding11 from '../src/images/wedding/wedding-11.jpg';
import wedding12 from '../src/images/wedding/wedding-12.jpg';
import wedding13 from '../src/images/wedding/wedding-13.jpg';
import wedding14 from '../src/images/wedding/wedding-14.jpg';

// Dining images
import dining1 from '../src/images/dining/dining-1.jpg';
import dining2 from '../src/images/dining/dining-2.jpg';
import dining3 from '../src/images/dining/dining-3.jpg';
import dining4 from '../src/images/dining/dining-4.jpg';
import dining5 from '../src/images/dining/dining-5.jpg';
import dining6 from '../src/images/dining/dining-6.jpg';
import dining7 from '../src/images/dining/dining-7.jpg';
import dining8 from '../src/images/dining/dining-8.jpg';
import dining9 from '../src/images/dining/dining-9.jpg';

// Party images
import party1 from '../src/images/party/party-1.jpg';
import party2 from '../src/images/party/party-2.jpg';
import party3 from '../src/images/party/party-3.jpg';
import party4 from '../src/images/party/party-4.jpg';
import party5 from '../src/images/party/party-5.jpg';
import party6 from '../src/images/party/party-6.jpg';

const partyTypes = [
    { img: party3, label: 'Birthday Parties' },
    { img: party1, label: 'Office Celebrations' },
    { img: party4, label: 'Anniversary Events' },
    { img: party5, label: 'Corporate Gatherings' },
    { img: party6, label: 'Private Parties' },
];

const Venues: React.FC = () => {
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    // Auto-cycling carousel for Grand Ballroom
    const ballroomImages = [
        { src: hall1, label: 'Crystal Chandeliers' },
        { src: hall3, label: 'Grand Interiors' },
        { src: hall4, label: 'Elegant Seating' },
        { src: hall5, label: 'Stage & Décor' },
        { src: wedding1, label: 'Wedding Ceremony' },
        { src: wedding2, label: 'Bridal Moments' },
        { src: wedding3, label: 'Wedding Décor' },
        { src: wedding4, label: 'Reception Setup' },
        { src: wedding5, label: 'Table Arrangement' },
        { src: wedding6, label: 'Floral Design' },
        { src: wedding7, label: 'Sacred Vows' },
        { src: wedding8, label: 'First Dance' },
        { src: wedding9, label: 'Guest Celebrations' },
        { src: wedding10, label: 'Golden Hour' },
        { src: wedding11, label: 'Grand Entrance' },
        { src: wedding12, label: 'Couple Portraits' },
        { src: wedding13, label: 'Celebration Joy' },
        { src: wedding14, label: 'Magical Moments' },
    ];
    const [carouselIndex, setCarouselIndex] = useState(0);
    const visibleCount = 3;
    const totalSlides = Math.ceil(ballroomImages.length / visibleCount);

    useEffect(() => {
        const timer = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [totalSlides]);

    // Auto-cycling carousel for Party Suite
    const partyImages = [
        { src: party1, label: 'Office Celebrations' },
        { src: party2, label: 'Grand Events' },
        { src: party3, label: 'Birthday Parties' },
        { src: party4, label: 'Anniversary Events' },
        { src: party5, label: 'Corporate Gatherings' },
        { src: party6, label: 'Private Parties' },
    ];
    const [partyCarouselIndex, setPartyCarouselIndex] = useState(0);
    const partyVisibleCount = 3;
    const partyTotalSlides = Math.ceil(partyImages.length / partyVisibleCount);

    useEffect(() => {
        const timer = setInterval(() => {
            setPartyCarouselIndex((prev) => (prev + 1) % partyTotalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [partyTotalSlides]);

    // Auto-cycling carousel for Private Dining
    const diningImages = [
        { src: dining1, label: 'Fine Dining Experience' },
        { src: dining2, label: "Chef's Table" },
        { src: dining3, label: 'Candlelit Ambiance' },
        { src: dining4, label: 'Signature Plating' },
        { src: dining5, label: 'Curated Beverages' },
        { src: dining6, label: 'Gourmet Presentation' },
        { src: dining7, label: 'Intimate Setting' },
        { src: dining8, label: 'Evening Elegance' },
        { src: dining9, label: 'Private Atmosphere' },
    ];
    const [diningCarouselIndex, setDiningCarouselIndex] = useState(0);
    const diningVisibleCount = 3;
    const diningTotalSlides = Math.ceil(diningImages.length / diningVisibleCount);

    useEffect(() => {
        const timer = setInterval(() => {
            setDiningCarouselIndex((prev) => (prev + 1) % diningTotalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [diningTotalSlides]);

    return (
        <>
            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                        onClick={() => setLightboxImg(null)}
                    >
                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition-colors z-10"
                        >
                            ✕
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={lightboxImg}
                            alt="Enlarged view"
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="bg-stone-100 py-32 px-6">
                <div className="max-w-[1400px] mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-24">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4 block">Our Spaces</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Setting the Stage</h2>
                    </div>

                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* VENUE 1 — THE GRAND BALLROOM                                */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="mb-32">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                            {/* Left — Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 lg:max-w-md"
                            >
                                <span className="text-stone-400 text-xs uppercase tracking-widest mb-4 block">01</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">The Grand Ballroom</h3>
                                <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                                    Where love stories unfold under crystal chandeliers and golden light.
                                    A space designed for up to 300 guests — every corner a frame-worthy moment.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-stone-900 mb-8">
                                    <span className="w-2 h-2 rounded-full bg-amber-400/50"></span>
                                    Up to 300 Guests
                                </div>

                                {/* Carousel dots */}
                                <div className="flex gap-2">
                                    {Array.from({ length: totalSlides }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCarouselIndex(i)}
                                            className={`h-2 rounded-full transition-all duration-500 ${i === carouselIndex
                                                ? 'bg-amber-400 w-6'
                                                : 'bg-stone-300 hover:bg-stone-400 w-2'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right — Auto-cycling carousel */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="flex-[1.5] w-full relative group/carousel"
                            >
                                {/* Previous button */}
                                <button
                                    onClick={() => setCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Next button */}
                                <button
                                    onClick={() => setCarouselIndex((prev) => (prev + 1) % totalSlides)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Carousel images */}
                                <div className="relative overflow-hidden rounded-sm">
                                    <AnimatePresence initial={false}>
                                        <motion.div
                                            key={carouselIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }}
                                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            className="grid grid-cols-3 gap-2 w-full"
                                        >
                                            {ballroomImages
                                                .slice(carouselIndex * visibleCount, carouselIndex * visibleCount + visibleCount)
                                                .map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="aspect-[3/4] overflow-hidden relative group cursor-pointer"
                                                        onClick={() => setLightboxImg(item.src)}
                                                    >
                                                        <img
                                                            src={item.src}
                                                            alt={item.label}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                                            <span className="text-white text-[9px] uppercase tracking-[0.25em] font-medium">{item.label}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* VENUE 2 — THE PARTY SUITE (mirrored: carousel-left, text-right) */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div className="mb-32">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                            {/* Left — Auto-cycling carousel */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-[1.5] w-full relative group/carousel"
                            >
                                <button
                                    onClick={() => setPartyCarouselIndex((prev) => (prev - 1 + partyTotalSlides) % partyTotalSlides)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setPartyCarouselIndex((prev) => (prev + 1) % partyTotalSlides)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <div className="relative overflow-hidden rounded-sm">
                                    <AnimatePresence initial={false}>
                                        <motion.div
                                            key={partyCarouselIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }}
                                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            className="grid grid-cols-3 gap-2 w-full"
                                        >
                                            {partyImages
                                                .slice(partyCarouselIndex * partyVisibleCount, partyCarouselIndex * partyVisibleCount + partyVisibleCount)
                                                .map((item, i) => (
                                                    <div key={i} className="aspect-[3/4] overflow-hidden relative group cursor-pointer" onClick={() => setLightboxImg(item.src)}>
                                                        <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                                            <span className="text-white text-[9px] uppercase tracking-[0.25em] font-medium">{item.label}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Right — Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="flex-1 lg:max-w-md"
                            >
                                <span className="text-stone-400 text-xs uppercase tracking-widest mb-4 block">02</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">The Party Suite</h3>
                                <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                                    An electrifying space designed to keep the celebration going. Whether it's a birthday
                                    bash, a corporate gathering, a wedding after-party, or any special occasion — our
                                    Party Suite transforms every evening into an unforgettable event.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-stone-900 mb-8">
                                    <span className="w-2 h-2 rounded-full bg-amber-400/50"></span>
                                    All Occasions Welcome
                                </div>
                                <div className="flex gap-2">
                                    {Array.from({ length: partyTotalSlides }).map((_, i) => (
                                        <button key={i} onClick={() => setPartyCarouselIndex(i)}
                                            className={`h-2 rounded-full transition-all duration-500 ${i === partyCarouselIndex ? 'bg-amber-400 w-6' : 'bg-stone-300 hover:bg-stone-400 w-2'}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* ════════════════════════════════════════════════════════════ */}
                    {/* VENUE 3 — PRIVATE DINING (text-left, carousel-right)        */}
                    {/* ════════════════════════════════════════════════════════════ */}
                    <div>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                            {/* Left — Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 lg:max-w-md"
                            >
                                <span className="text-stone-400 text-xs uppercase tracking-widest mb-4 block">03</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">Private Dining</h3>
                                <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                                    For those moments that require absolute privacy and exclusivity. Our private dining
                                    suites offer bespoke menus and dedicated service for rehearsal dinners and small gatherings.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-stone-900 mb-8">
                                    <span className="w-2 h-2 rounded-full bg-amber-400/50"></span>
                                    Up to 50 Guests
                                </div>
                                <div className="flex gap-2">
                                    {Array.from({ length: diningTotalSlides }).map((_, i) => (
                                        <button key={i} onClick={() => setDiningCarouselIndex(i)}
                                            className={`h-2 rounded-full transition-all duration-500 ${i === diningCarouselIndex ? 'bg-amber-400 w-6' : 'bg-stone-300 hover:bg-stone-400 w-2'}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right — Auto-cycling carousel */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="flex-[1.5] w-full relative group/carousel"
                            >
                                <button
                                    onClick={() => setDiningCarouselIndex((prev) => (prev - 1 + diningTotalSlides) % diningTotalSlides)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setDiningCarouselIndex((prev) => (prev + 1) % diningTotalSlides)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <div className="relative overflow-hidden rounded-sm">
                                    <AnimatePresence initial={false}>
                                        <motion.div
                                            key={diningCarouselIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }}
                                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            className="grid grid-cols-3 gap-2 w-full"
                                        >
                                            {diningImages
                                                .slice(diningCarouselIndex * diningVisibleCount, diningCarouselIndex * diningVisibleCount + diningVisibleCount)
                                                .map((item, i) => (
                                                    <div key={i} className="aspect-[3/4] overflow-hidden relative group cursor-pointer" onClick={() => setLightboxImg(item.src)}>
                                                        <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                                            <span className="text-white text-[9px] uppercase tracking-[0.25em] font-medium">{item.label}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div >
            </section >
        </>
    );
};

export default Venues;
