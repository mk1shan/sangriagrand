
import { RoomType, MenuItem, Testimonial } from './types';

export const ROOMS: RoomType[] = [
  {
    id: '1',
    name: 'Deluxe Double Room',
    description: 'Spacious and elegantly designed double room with modern amenities, perfect for couples and families seeking comfort and luxury.',
    price: 280,
    image: '/images/rooms/room-1.jpg'
  },
  {
    id: '2',
    name: 'Premium Double Room',
    description: 'A beautifully appointed double room featuring contemporary furnishings, private balcony views, and premium bedding for an unforgettable stay.',
    price: 320,
    image: '/images/rooms/room-4.jpg'
  },
  {
    id: '3',
    name: 'Classic Single Room',
    description: 'A cozy and refined single room offering all essential comforts with warm Sri Lankan hospitality — ideal for solo travelers.',
    price: 180,
    image: '/images/rooms/room-7.jpg'
  }
];

export const CATERING_MENU: MenuItem[] = [
  { id: 'm1', name: 'Signature Ceylon Lamprais', category: 'Main', price: 45 },
  { id: 'm2', name: 'Grand Seafood Platter', category: 'Main', price: 65 },
  { id: 'm3', name: 'Truffle Mushroom Risotto', category: 'Main', price: 38 },
  { id: 'a1', name: 'Curried Crab Croquettes', category: 'Appetizer', price: 22 },
  { id: 'a2', name: 'Lotus Root Chips with Dip', category: 'Appetizer', price: 15 },
  { id: 'd1', name: 'Watalappam Brulee', category: 'Dessert', price: 18 },
  { id: 'd2', name: 'Artisan Sorbet Selection', category: 'Dessert', price: 14 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Amali & Roshan',
    event: 'Grand Wedding',
    quote: 'Our forever began in the most magical way possible. The ballroom was breathtaking.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't2',
    name: 'Samantha Wickramasinghe',
    event: 'Corporate Gala',
    quote: 'Unparalleled service and catering. Sangria Grand is the new standard in Middeniya.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  }
];
