
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATERING_MENU } from '../constants';
import { MenuItem } from '../types';

const MenuBuilder: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [guestCount, setGuestCount] = useState(100);

  const toggleItem = (item: MenuItem) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0) * guestCount;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <div className="bg-[#1A1C1E] p-8 md:p-12 rounded-sm border border-white/5">
        <div className="mb-10">
          <h3 className="text-2xl font-serif text-white mb-2">Build Your Event Menu</h3>
          <p className="text-gray-500 text-sm">Select items to get an instant estimate for your banquet.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CATERING_MENU.map((item) => {
                const isSelected = selectedItems.some(i => i.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item)}
                    className={`flex justify-between items-center p-4 border rounded-sm transition-all text-left ${
                      isSelected ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-white' : 'border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase text-[#D4AF37] block mb-1">{item.category}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm font-serif">${item.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-black/40 p-8 rounded-sm border border-white/5 h-fit sticky top-24">
            <h4 className="text-sm uppercase tracking-widest text-[#D4AF37] mb-6 font-bold">Menu Summary</h4>
            <div className="mb-6">
              <label className="text-xs text-gray-500 uppercase mb-2 block tracking-wider">Number of Guests</label>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="w-full accent-[#D4AF37] h-1.5 bg-gray-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>50</span>
                <span className="text-[#D4AF37] font-bold">{guestCount} Guests</span>
                <span>1000</span>
              </div>
            </div>

            <div className="space-y-3 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence>
                {selectedItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-500">${item.price}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {selectedItems.length === 0 && <p className="text-xs text-gray-600 italic">No items selected</p>}
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between items-end">
                <span className="text-xs uppercase text-gray-500">Estimated Total</span>
                <span className="text-3xl font-serif text-white">${totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-gray-600 mt-2">*Prices are subject to service charge and taxes.</p>
              <button className="w-full mt-6 py-3 bg-white text-black text-xs uppercase font-bold tracking-widest hover:bg-[#D4AF37] transition-colors">
                Reserve Catering
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBuilder;
