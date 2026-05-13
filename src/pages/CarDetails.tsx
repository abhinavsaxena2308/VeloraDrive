import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Gauge, Zap, Fuel, Users, Settings2, ArrowLeft, 
  Shield, Check, Calendar, MapPin, Plus, CreditCard, ArrowRight,
  Maximize2, Image as ImageIcon, Wind, Timer
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getCarById, cars } from '../data/cars';
import CarCard from '../components/ui/CarCard';
import { toast } from 'react-hot-toast';

type BookingStep = 'details' | 'addons' | 'payment';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = getCarById(Number(id));
  const [step, setStep] = useState<BookingStep>('details');
  const [activeImage, setActiveImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    pickup: '',
    return: '',
    location: 'Delhi NCR',
    addons: [] as string[]
  });

  if (!car) {
    return (
      <div className="page-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold italic mb-4">Car Not Found</h1>
          <Link to="/cars" className="btn-primary">Back to Fleet</Link>
        </div>
      </div>
    );
  }

  // Gallery simulation
  const galleryImages = [car.image, car.image, car.image]; // Mock gallery using same image

  const related = cars.filter(c => c.type === car.type && c.id !== car.id).slice(0, 3);
  
  const bentoSpecs = [
    { icon: Timer, label: '0-100 KM/H', value: car.specs[0]?.value || 'N/A', color: 'text-emerald-500' },
    { icon: Zap, label: 'Max Power', value: car.specs[1]?.value || 'N/A', color: 'text-cta' },
    { icon: Gauge, label: 'Top Speed', value: car.specs[2]?.value || 'N/A', color: 'text-blue-500' },
    { icon: Fuel, label: 'Fuel Source', value: car.fuel, color: 'text-orange-500' },
    { icon: Users, label: 'Capacity', value: `${car.seats} Seats`, color: 'text-purple-500' },
    { icon: Wind, label: 'Transmission', value: car.transmission, color: 'text-slate-400' },
  ];

  const addons = [
    { id: 'insurance', name: 'Zero Dep. Insurance', price: 1500, desc: 'Complete peace of mind' },
    { id: 'driver', name: 'Extra Driver', price: 500, desc: 'Share the joy of driving' },
    { id: 'gps', name: 'Premium GPS', price: 300, desc: 'Never lose your way' },
  ];

  const totalPrice = car.price + bookingData.addons.reduce((acc, curr) => {
    const addon = addons.find(a => a.id === curr);
    return acc + (addon?.price || 0);
  }, 0);

  const handleNext = () => {
    if (step === 'details') {
      if (!bookingData.pickup || !bookingData.return) {
        toast.error('Please select booking dates');
        return;
      }
      setStep('addons');
    } else if (step === 'addons') {
      setStep('payment');
    } else {
      toast.success('Booking Successful! We will contact you shortly.');
      setStep('details');
    }
  };

  return (
    <div className="page-container bg-[#FAF7F2]">
      <Helmet>
        <title>{car.name} | Velora Drive Performance</title>
        <meta name="description" content={`Rent the ${car.name} starting at ₹${car.price.toLocaleString()}/day. ${car.description.substring(0, 150)}...`} />
      </Helmet>
      <div className="container mx-auto px-6 md:px-10">
        <Link to="/cars" className="inline-flex items-center gap-2 text-text-muted hover:text-cta transition-colors mb-10 group text-[10px] uppercase tracking-[0.2em] font-black cursor-pointer">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column — Gallery & Specs (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* ── High-Res Gallery ── */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="aspect-video rounded-[2.5rem] overflow-hidden relative shadow-2xl group border border-white"
              >
                <img src={galleryImages[activeImage]} alt={car.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-6 right-6 flex gap-2">
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                    <Maximize2 size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                    <ImageIcon size={18} />
                  </button>
                </div>
              </motion.div>
              
              <div className="flex gap-4">
                {galleryImages.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-20 flex-1 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === i ? 'border-cta scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Angle" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Title & Intro ── */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
              <div>
                <span className="badge-cta mb-4">{car.type}</span>
                <h1 className="text-5xl md:text-7xl font-heading font-bold italic text-primary leading-none mb-4">{car.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-border rounded-lg">
                    <Star size={14} className="text-cta fill-cta" />
                    <span className="text-primary font-black text-xs">{car.rating}</span>
                  </div>
                  <span className="text-text-muted/60 text-xs font-medium tracking-widest uppercase">{car.reviews} verified reviews</span>
                </div>
              </div>
            </div>

            <p className="text-text-muted text-lg font-light leading-relaxed max-w-4xl">{car.description}</p>

            {/* ── Bento Tech Specs ── */}
            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-bold italic uppercase tracking-tight text-primary">Technical <span className="text-cta">Dossier</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {bentoSpecs.map((spec, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white p-6 rounded-3xl border border-border flex flex-col items-center text-center group hover:border-cta/20 transition-all shadow-sm"
                  >
                    <div className={`w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${spec.color}`}>
                      <spec.icon size={24} />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-text-muted/50 font-black mb-1">{spec.label}</span>
                    <span className="text-primary font-bold text-lg">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Key Features Grid ── */}
            <div className="space-y-8">
              <h2 className="text-2xl font-heading font-bold italic uppercase tracking-tight text-primary">Signature <span className="text-cta">Comforts</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow group">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-primary font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Sticky Booking Engine (4 Cols) ── */}
          <div className="lg:col-span-4">
            <div className="glass-card p-8 md:p-10 sticky top-28 border-cta/10 overflow-hidden shadow-2xl">
              {/* Step Indicators */}
              <div className="flex gap-2 mb-10">
                {(['details', 'addons', 'payment'] as const).map((s, i) => (
                  <div 
                    key={s} 
                    className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                      (i === 0 || (i === 1 && step !== 'details') || (i === 2 && step === 'payment')) 
                        ? 'bg-cta' 
                        : 'bg-slate-100'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 'details' && (
                  <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <div className="flex justify-between items-center pb-8 border-b border-border">
                      <div>
                        <span className="text-4xl font-black text-primary">₹{car.price.toLocaleString()}</span>
                        <span className="block text-[10px] uppercase tracking-[0.3em] text-text-muted/60 font-black mt-2">Rate per 24H Cycle</span>
                      </div>
                      <div className="p-3 bg-cta/10 rounded-2xl text-cta">
                        <Timer size={28} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="input-label flex items-center gap-2"><MapPin size={12}/> Deployment Location</label>
                        <select 
                          className="input-field cursor-pointer font-bold text-primary"
                          value={bookingData.location}
                          onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
                        >
                          <option>Delhi NCR</option><option>Mumbai</option><option>Bangalore</option><option>Hyderabad</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="input-label">Initiate</label>
                          <input 
                            type="date" 
                            className="input-field cursor-pointer text-xs font-bold"
                            value={bookingData.pickup}
                            onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="input-label">Release</label>
                          <input 
                            type="date" 
                            className="input-field cursor-pointer text-xs font-bold"
                            value={bookingData.return}
                            onChange={(e) => setBookingData({...bookingData, return: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 'addons' && (
                  <motion.div key="addons" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-xl font-heading font-bold mb-8 italic text-primary uppercase tracking-tight">Upgrade <span className="text-cta">Your Command</span></h3>
                    <div className="space-y-3 mb-10">
                      {addons.map((addon) => {
                        const isSelected = bookingData.addons.includes(addon.id);
                        return (
                          <div 
                            key={addon.id}
                            onClick={() => {
                              const newAddons = isSelected 
                                ? bookingData.addons.filter(id => id !== addon.id)
                                : [...bookingData.addons, addon.id];
                              setBookingData({...bookingData, addons: newAddons});
                            }}
                            className={`p-5 rounded-2xl border transition-all cursor-pointer flex justify-between items-center ${
                              isSelected ? 'border-cta bg-cta/5 ring-1 ring-cta/20' : 'border-border hover:border-cta/30 bg-white'
                            }`}
                          >
                            <div className="space-y-1">
                              <p className="text-[11px] font-black uppercase tracking-wider text-primary">{addon.name}</p>
                              <p className="text-[9px] text-text-muted font-medium">{addon.desc}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-black text-cta">₹{addon.price}</p>
                              <div className={`w-5 h-5 rounded-md border mt-2 flex items-center justify-center transition-all ${isSelected ? 'bg-cta border-cta text-white' : 'border-border'}`}>
                                {isSelected && <Check size={12} strokeWidth={4} />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-xl font-heading font-bold mb-8 italic text-primary uppercase tracking-tight">Mission <span className="text-cta">Clearance</span></h3>
                    <div className="space-y-4 mb-10 bg-slate-50 p-6 rounded-2xl border border-border">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-text-muted">Base Fare (24H)</span>
                        <span className="font-black text-primary">₹{car.price.toLocaleString()}</span>
                      </div>
                      {bookingData.addons.map(id => {
                        const addon = addons.find(a => a.id === id);
                        return (
                          <div key={id} className="flex justify-between text-xs font-medium">
                            <span className="text-text-muted">{addon?.name}</span>
                            <span className="font-black text-primary">₹{addon?.price}</span>
                          </div>
                        );
                      })}
                      <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Total Investment</span>
                        <span className="text-3xl font-black text-cta tracking-tighter">₹{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl mb-10 flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600">
                        <Shield size={20} />
                      </div>
                      <p className="text-[10px] text-emerald-800 font-bold leading-tight">Secured by Velora Identity Protection™ and encrypted gateways.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4">
                {step !== 'details' && (
                  <button 
                    onClick={() => setStep(step === 'payment' ? 'addons' : 'details')}
                    className="flex-1 py-4 border border-border rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-text-muted hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Previous
                  </button>
                )}
                <button 
                  onClick={handleNext}
                  className="flex-[2] btn-primary py-5 flex items-center justify-center gap-3 group shadow-glow"
                >
                  {step === 'payment' ? 'Engage Reservation' : 'Advance Stage'}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-10 space-y-4">
                {['No pre-payment required', 'Flexible cancellation policy', 'Precision technical inspection'].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] text-text-muted/60 font-bold uppercase tracking-wider">
                    <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Fleet */}
        {related.length > 0 && (
          <div className="mt-32 pt-20 border-t border-border">
            <h2 className="text-3xl font-heading font-bold italic mb-12 uppercase tracking-tight text-primary">Complementary <span className="text-cta">Machines</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
              {related.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
