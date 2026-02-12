
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DateChecker: React.FC = () => {
  const [date, setDate] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<null | 'available' | 'booked'>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    setIsChecking(true);
    // Simulate API check
    setTimeout(() => {
      setIsChecking(false);
      setResult(Math.random() > 0.3 ? 'available' : 'booked');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-gradient-to-br from-[#0D3B31] to-[#0A0A0B] p-12 rounded-sm border border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center">Plan Your Grand Occasion</h2>
          <p className="text-gray-400 text-center mb-10 font-light max-w-xl mx-auto">
            Check the availability of our Grand Ballroom for your special day. 
            Dates fill up 12-18 months in advance.
          </p>

          <form onSubmit={handleCheck} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <button
              disabled={isChecking}
              className="px-10 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#B38728] transition-all disabled:opacity-50 min-w-[200px]"
            >
              {isChecking ? 'Checking...' : 'Check Date'}
            </button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-6 rounded-sm text-center border ${
                result === 'available' ? 'bg-green-900/10 border-green-500/30 text-green-400' : 'bg-red-900/10 border-red-500/30 text-red-400'
              }`}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                {result === 'available' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="font-bold uppercase tracking-wider">
                  {result === 'available' ? 'Great news! Date is available' : 'Date is already reserved'}
                </span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                {result === 'available' 
                  ? 'Our consultants are ready to help you lock in this date.' 
                  : 'We have adjacent dates available. Contact us for a full calendar view.'}
              </p>
              <button className="text-white underline underline-offset-4 text-sm font-medium hover:text-[#D4AF37]">
                Contact Concierge
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateChecker;
