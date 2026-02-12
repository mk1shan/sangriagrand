import React from 'react';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 py-24 px-6 border-t border-stone-900">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24">

        <div className="md:col-span-1">
          <h2 className="text-2xl font-serif text-stone-200 mb-8 tracking-wide">SANGRIA GRAND (PVT) LTD</h2>
          <p className="text-xs font-light leading-relaxed max-w-xs">
            A timeless sanctuary in Middeniya, dedicated to the art of hospitality and the curation of unforgettable moments.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Explore</h4>
          <a href="#sanctuary" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">The Sanctuary</a>
          <a href="#gallery" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Our Gallery</a>
          <a href="#catering" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Catering</a>
          <a href="mailto:sangriagrand2@gmail.com" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Contact Us</a>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Experience</h4>
          <a href="#venue" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">The Grand Ballroom</a>
          <a href="#venue" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Party Suite</a>
          <a href="#venue" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Private Dining</a>
          <a href="#suites" className="block text-xs uppercase tracking-widest hover:text-stone-200 transition-colors">Accommodations</a>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Connect</h4>
          <p className="text-xs font-light">
            109/2 Sri Lanka katuwana Road, <br />
            Middeniya, Sri Lanka <br />
            <a
              href="https://maps.app.goo.gl/WoxBqPKAgwQhkZVi8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-amber-200/80 hover:text-amber-100 transition-colors"
            >
              View Location
            </a>
          </p>
          <p className="text-xs font-light mt-4">
            +94 71 845 7378 <br />
            sangriagrand2@gmail.com
          </p>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-stone-600">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <p>&copy; {new Date().getFullYear()} Sangria Grand (PVT) Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=100064087303389"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors flex items-center gap-2"
          >
            <Facebook size={16} strokeWidth={1.5} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
