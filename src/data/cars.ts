// ─── Centralized Car Data ──────────────────────────────────────────────────────
// Single source of truth for all car data across the application.

export interface CarSpec {
  label: string;
  value: string;
}

export interface Car {
  id: number;
  name: string;
  type: 'SUV' | 'Sedan' | 'Sports' | 'Luxury' | 'Electric' | 'Hatchback';
  price: number;          // ₹ per day
  rating: number;
  reviews: number;
  image: string;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  mileage: string;
  description: string;
  specs: CarSpec[];
  features: string[];
  available: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Porsche 911 GT3',
    type: 'Sports',
    price: 18000,
    rating: 4.9,
    reviews: 124,
    image: '/src/assets/car images/1.jpg',
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '8 km/l',
    description: 'The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car with a naturally aspirated flat-six engine.',
    specs: [
      { label: '0-100 km/h', value: '3.4s' },
      { label: 'Power', value: '502 HP' },
      { label: 'Top Speed', value: '318 km/h' },
    ],
    features: ['Launch Control', 'Sport Chrono', 'Carbon Ceramic Brakes', 'Bucket Seats'],
    available: true,
  },
  {
    id: 2,
    name: 'Mercedes S-Class',
    type: 'Luxury',
    price: 22000,
    rating: 5.0,
    reviews: 89,
    image: '/src/assets/car images/2.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '10 km/l',
    description: 'The Mercedes-Benz S-Class is the pinnacle of luxury sedans, offering unmatched comfort, technology, and prestige.',
    specs: [
      { label: '0-100 km/h', value: '4.9s' },
      { label: 'Power', value: '496 HP' },
      { label: 'Top Speed', value: '250 km/h' },
    ],
    features: ['Massage Seats', 'Burmester Audio', 'MBUX', 'Air Suspension'],
    available: true,
  },
  {
    id: 3,
    name: 'Range Rover SV',
    type: 'SUV',
    price: 25000,
    rating: 4.9,
    reviews: 67,
    image: '/src/assets/car images/3.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel',
    mileage: '9 km/l',
    description: 'The Range Rover SV is the ultimate luxury SUV, combining refined elegance with unrivaled off-road capability.',
    specs: [
      { label: '0-100 km/h', value: '5.5s' },
      { label: 'Power', value: '530 HP' },
      { label: 'Top Speed', value: '262 km/h' },
    ],
    features: ['Terrain Response 2', 'Meridian Audio', 'Pixel LED', 'Executive Class'],
    available: true,
  },
  {
    id: 4,
    name: 'BMW M4 Competition',
    type: 'Sports',
    price: 15000,
    rating: 4.8,
    reviews: 156,
    image: '/src/assets/car images/4.jpg',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '9 km/l',
    description: 'The BMW M4 Competition delivers raw driving excitement with its twin-turbo inline-6 and precision handling.',
    specs: [
      { label: '0-100 km/h', value: '3.9s' },
      { label: 'Power', value: '503 HP' },
      { label: 'Top Speed', value: '290 km/h' },
    ],
    features: ['M Differential', 'Carbon Roof', 'Adaptive Suspension', 'M Drive'],
    available: true,
  },
  {
    id: 5,
    name: 'Tesla Model S Plaid',
    type: 'Electric',
    price: 16000,
    rating: 4.7,
    reviews: 203,
    image: '/src/assets/car images/5.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    mileage: '600 km range',
    description: 'The Tesla Model S Plaid is the quickest production car ever made, with tri-motor AWD and groundbreaking tech.',
    specs: [
      { label: '0-100 km/h', value: '2.1s' },
      { label: 'Power', value: '1,020 HP' },
      { label: 'Range', value: '600 km' },
    ],
    features: ['Autopilot', 'Yoke Steering', '17" Display', 'Over-the-Air Updates'],
    available: true,
  },
  {
    id: 6,
    name: 'Audi RS7 Sportback',
    type: 'Sedan',
    price: 17000,
    rating: 4.8,
    reviews: 91,
    image: '/src/assets/car images/6.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '8 km/l',
    description: 'The Audi RS7 Sportback combines four-door practicality with supercar performance in a stunning fastback design.',
    specs: [
      { label: '0-100 km/h', value: '3.6s' },
      { label: 'Power', value: '591 HP' },
      { label: 'Top Speed', value: '305 km/h' },
    ],
    features: ['Quattro AWD', 'Matrix LED', 'Bang & Olufsen', 'Sport Differential'],
    available: true,
  },
  {
    id: 7,
    name: 'Lamborghini Huracán',
    type: 'Sports',
    price: 45000,
    rating: 5.0,
    reviews: 42,
    image: '/src/assets/car images/7.jpg',
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '6 km/l',
    description: 'The Lamborghini Huracán is a mid-engine supercar that delivers breathtaking performance and unmistakable Italian design.',
    specs: [
      { label: '0-100 km/h', value: '2.9s' },
      { label: 'Power', value: '631 HP' },
      { label: 'Top Speed', value: '325 km/h' },
    ],
    features: ['V10 Engine', 'LDVI System', 'Carbon Fiber', 'Corsa Mode'],
    available: true,
  },
  {
    id: 8,
    name: 'Toyota Fortuner',
    type: 'SUV',
    price: 5500,
    rating: 4.6,
    reviews: 312,
    image: '/src/assets/car images/8.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    mileage: '14 km/l',
    description: 'The Toyota Fortuner is India\'s most popular premium SUV, offering rugged capability with everyday refinement.',
    specs: [
      { label: '0-100 km/h', value: '10.0s' },
      { label: 'Power', value: '201 HP' },
      { label: 'Top Speed', value: '180 km/h' },
    ],
    features: ['4x4 Drive', 'Touchscreen', 'Cruise Control', 'Hill Assist'],
    available: true,
  },
  {
    id: 9,
    name: 'Hyundai Creta',
    type: 'SUV',
    price: 3200,
    rating: 4.5,
    reviews: 489,
    image: '/src/assets/car images/9.jpg',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '17 km/l',
    description: 'The Hyundai Creta is a feature-rich compact SUV that offers premium tech and comfort at an accessible price.',
    specs: [
      { label: '0-100 km/h', value: '11.5s' },
      { label: 'Power', value: '158 HP' },
      { label: 'Top Speed', value: '185 km/h' },
    ],
    features: ['Panoramic Sunroof', 'ADAS', 'Ventilated Seats', 'BlueLink'],
    available: true,
  },
  {
    id: 10,
    name: 'Honda City',
    type: 'Sedan',
    price: 2800,
    rating: 4.4,
    reviews: 567,
    image: '/src/assets/car images/10.jpg',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: '18 km/l',
    description: 'The Honda City is a refined sedan loved for its smooth ride, efficient engine, and trusted Honda reliability.',
    specs: [
      { label: '0-100 km/h', value: '12.0s' },
      { label: 'Power', value: '121 HP' },
      { label: 'Top Speed', value: '195 km/h' },
    ],
    features: ['Lane Watch', 'Honda Connect', 'LED Headlamps', 'Cruise Control'],
    available: true,
  },
  {
    id: 11,
    name: 'Maruti Swift',
    type: 'Hatchback',
    price: 1800,
    rating: 4.3,
    reviews: 892,
    image: '/src/assets/car images/11.jpg',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: '24 km/l',
    description: 'The Maruti Swift is India\'s favorite hatchback — zippy, fuel-efficient, and perfect for city driving.',
    specs: [
      { label: '0-100 km/h', value: '12.5s' },
      { label: 'Power', value: '89 HP' },
      { label: 'Top Speed', value: '175 km/h' },
    ],
    features: ['Touchscreen', 'SmartPlay', 'Dual Airbags', 'ABS'],
    available: true,
  },
  {
    id: 12,
    name: 'Mahindra Thar',
    type: 'SUV',
    price: 4500,
    rating: 4.7,
    reviews: 234,
    image: '/src/assets/car images/12.jpg',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Diesel',
    mileage: '15 km/l',
    description: 'The Mahindra Thar is the ultimate adventure vehicle — built for off-road domination with modern comfort.',
    specs: [
      { label: '0-100 km/h', value: '11.5s' },
      { label: 'Power', value: '150 HP' },
      { label: 'Top Speed', value: '155 km/h' },
    ],
    features: ['4x4 Low Range', 'Convertible Top', 'Drizzle Headlamps', 'Adventure Ready'],
    available: true,
  },
];

export const carCategories = ['All', 'SUV', 'Sedan', 'Sports', 'Luxury', 'Electric', 'Hatchback'] as const;

export const cities = [
  'Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai',
  'Pune', 'Jaipur', 'Kolkata', 'Ahmedabad', 'Chandigarh',
  'Goa', 'Lucknow',
];

export function getCarById(id: number): Car | undefined {
  return cars.find(car => car.id === id);
}

export function getCarsByType(type: string): Car[] {
  if (type === 'All') return cars;
  return cars.filter(car => car.type === type);
}


