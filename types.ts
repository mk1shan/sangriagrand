
export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Appetizer' | 'Main' | 'Dessert' | 'Beverage';
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  image: string;
}
