
import React from 'react';

const PerfectDay: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Large Vertical Image */}
        <div className="lg:col-span-4 aspect-[2/3] overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Wedding Portrait"
          />
        </div>

        {/* Middle: Stacked Images */}
        <div className="lg:col-span-3 space-y-12 flex flex-col justify-between">
          <div className="aspect-video overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover"
              alt="Hands"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1465495910483-0d674b04777e?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Atmosphere"
            />
          </div>
        </div>

        {/* Right: Text Block */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight tracking-tight uppercase">
            THEIR <br /> PERFECT <br /> <span className="italic text-stone-600">DAY...</span>
          </h2>
          <div className="space-y-6 text-stone-600 text-sm font-light leading-relaxed italic">
            <p>
              "Sangria Grand is a storyteller that weaves the magic of love into every frame.
              From the engagement shoot to the big day, they capture the essence of 'us' effortlessly."
            </p>
            <p>
              The genuine passion they bring to their work is felt in every detail.
              The grand reception hall was transformed into a realm of light and wonder,
              allowing our personalities to shine through every corner.
            </p>
            <p className="text-stone-900 font-medium tracking-[0.2em] not-italic uppercase text-[10px]">
              * Discover the Magic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectDay;
