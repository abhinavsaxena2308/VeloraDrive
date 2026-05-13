import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Fuel, Users, Settings2, ArrowLeft, 
  Shield, Check, Calendar, MapPin, ArrowRight,
  Maximize2, Image as ImageIcon, Wind, Timer,
  Info, FileText, Zap, Award, HelpCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getCarById, cars } from '../data/cars';
import CarCard from '../components/ui/CarCard';
import { toast } from 'react-hot-toast';

type PackageType = 'limited' | 'unlimited';
type FuelOption = 'with' | 'without';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = getCarById(Number(id));
  
  const [activeImage, setActiveImage] = useState(0);
  const [bookingType, setBookingType] = useState<PackageType>('limited');
  const [fuelOption, setFuelOption] = useState<FuelOption>('without');
  const [bookingData, setBookingData] = useState({
    pickupDate: '',
    pickupTime: '10:00',
    returnDate: '',
    returnTime: '10:00',
    location: 'Delhi NCR',
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

  const galleryImages = [car.image, car.image, car.image]; 
  const related = cars.filter(c => c.type === car.type && c.id !== car.id).slice(0, 3);
  
  const priceMultiplier = bookingType === 'unlimited' ? 1.5 : 1;
  const fuelMultiplier = fuelOption === 'with' ? 1.2 : 1;
  const finalDailyPrice = Math.round(car.price * priceMultiplier * fuelMultiplier);

  const handleBooking = () => {
    if (!bookingData.pickupDate || !bookingData.returnDate) {
      toast.error('Please select booking dates');
      return;
    }
    toast.success('Reservation Request Sent! Our concierge will contact you shortly.');
  };

  const tabs = [
    { id: 'specs', label: 'Specifications', icon: Settings2 },
    { id: 'features', label: 'Features', icon: Award },
    { id: 'policy', label: 'Rental Policy', icon: Shield },
    { id: 'kyc', label: 'KYC & Documents', icon: FileText },
  ];
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <div className="page-container bg-background">
      <Helmet>
        <title>{car.name} | Velora Drive Performance</title>
        <meta name="description" content={`Rent the ${car.name} starting at ₹${car.price.toLocaleString()}/day. ${car.description.substring(0, 150)}...`} />
      </Helmet>
      
      <div className="container mx-auto px-6 md:px-10">
        <Link to="/cars" className="inline-flex items-center gap-2 text-text-muted hover:text-cta transition-colors mb-8 group text-[10px] uppercase tracking-[0.2em] font-black cursor-pointer">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* ── Left Column: Discovery (8 Cols) ── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="aspect-video rounded-[2.5rem] overflow-hidden relative shadow-2xl group bg-white p-8 border border-border"
              >
                <img 
                  src={galleryImages[activeImage]} 
                  alt={car.name} 
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute top-6 right-6 flex gap-2">
                  <button className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-primary border border-border hover:bg-slate-50 transition-all cursor-pointer">
                    <Maximize2 size={18} />
                  </button>
                </div>
              </motion.div>
              
              <div className="flex gap-4">
                {galleryImages.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-24 flex-1 rounded-2xl overflow-hidden border-2 transition-all bg-white p-2 cursor-pointer ${
                      activeImage === i ? 'border-cta shadow-lg scale-[0.98]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Angle" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title Block */}
            <div className="flex flex-col gap-6 border-b border-border pb-10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="badge-cta">{car.type}</span>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-border rounded-lg">
                  <Star size={14} className="text-cta fill-cta" />
                  <span className="text-primary font-black text-xs">{car.rating}</span>
                </div>
                <span className="text-text-muted/40 text-[10px] font-bold uppercase tracking-widest">{car.reviews} Verified Renters</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold italic text-primary leading-tight">{car.name}</h1>
              <p className="text-text-muted text-lg font-light leading-relaxed max-w-4xl">{car.description}</p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Wind, label: car.transmission, sub: 'Transmission' },
                { icon: Fuel, label: car.fuel, sub: 'Fuel Type' },
                { icon: Users, label: `${car.seats} Seats`, sub: 'Capacity' },
                { icon: Zap, label: 'Turbocharged', sub: 'Performance' },
              ].map((h, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-border flex flex-col items-center text-center shadow-sm">
                  <h.icon size={24} className="text-cta mb-3" />
                  <span className="text-sm font-bold text-primary block">{h.label}</span>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted/50 font-bold mt-1">{h.sub}</span>
                </div>
              ))}
            </div>

            {/* Information Tabs */}
            <div className="bg-white rounded-[2.5rem] border border-border overflow-hidden shadow-sm">
              <div className="flex border-b border-border bg-slate-50/50">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-6 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === tab.id ? 'bg-white text-cta border-b-2 border-cta' : 'text-text-muted hover:text-primary hover:bg-white/50'
                    }`}
                  >
                    <tab.icon size={14} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="p-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'specs' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {car.specs.map((s, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50">
                          <span className="text-sm text-text-muted font-medium">{s.label}</span>
                          <span className="text-sm text-primary font-bold italic">{s.value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  {activeTab === 'features' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {car.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                          <Check size={16} className="text-emerald-500" />
                          <span className="text-sm text-primary font-medium">{f}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  {activeTab === 'policy' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center text-cta shrink-0"><Shield size={20} /></div>
                        <div>
                          <h4 className="text-primary font-bold text-sm mb-1">Insurance & Liability</h4>
                          <p className="text-text-muted text-xs leading-relaxed">Comprehensive insurance included with a maximum deductible of ₹25,000 for luxury segments.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center text-cta shrink-0"><Calendar size={20} /></div>
                        <div>
                          <h4 className="text-primary font-bold text-sm mb-1">Cancellation Policy</h4>
                          <p className="text-text-muted text-xs leading-relaxed">Free cancellation up to 48 hours before pick-up. 50% charge for late cancellations.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 'kyc' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">Mandatory Documents</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-xs text-text-muted font-medium"><Check size={14} className="text-cta"/> Valid Indian Driving License</li>
                          <li className="flex items-center gap-3 text-xs text-text-muted font-medium"><Check size={14} className="text-cta"/> Aadhaar Card / Address Proof</li>
                          <li className="flex items-center gap-3 text-xs text-text-muted font-medium"><Check size={14} className="text-cta"/> PAN Card</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* How it Works - MyChoize Reference */}
            <div className="space-y-10 py-10">
              <h2 className="text-3xl font-heading font-bold italic text-primary">HOW IT <span className="text-cta">WORKS</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: 'Selection', desc: 'Pick your dream machine', icon: Timer },
                  { title: 'Validation', desc: 'Secure KYC verification', icon: Shield },
                  { title: 'Delivery', desc: 'Doorstep or Hub pickup', icon: MapPin },
                  { title: 'Drive', desc: 'Enjoy your masterpiece', icon: ArrowRight },
                ].map((step, i) => (
                  <div key={i} className="relative group text-center md:text-left">
                    <div className="w-16 h-16 rounded-3xl bg-white border border-border flex items-center justify-center text-cta mb-6 shadow-sm group-hover:border-cta/30 group-hover:bg-cta/5 transition-all mx-auto md:mx-0">
                      <step.icon size={28} />
                    </div>
                    <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">{step.title}</h4>
                    <p className="text-text-muted text-xs font-medium">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Booking Engine (4 Cols) ── */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[2.5rem] border border-border shadow-2xl p-8 sticky top-28 space-y-10">
              
              {/* Pricing Display */}
              <div className="text-center pb-8 border-b border-slate-100">
                <span className="text-5xl font-black text-primary tracking-tighter">₹{finalDailyPrice.toLocaleString()}</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-text-muted/60 font-black mt-3 italic">Fare Estimate Per Day</span>
              </div>

              {/* Package Selectors - MyChoize Style */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-4 flex items-center gap-2">
                    <Info size={12}/> Select Distance Package
                  </h4>
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                    <button 
                      onClick={() => setBookingType('limited')}
                      className={`flex-1 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${bookingType === 'limited' ? 'bg-white text-cta shadow-md' : 'text-text-muted hover:bg-white/50'}`}
                    >
                      Limited KMs
                    </button>
                    <button 
                      onClick={() => setBookingType('unlimited')}
                      className={`flex-1 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${bookingType === 'unlimited' ? 'bg-white text-cta shadow-md' : 'text-text-muted hover:bg-white/50'}`}
                    >
                      Unlimited KMs
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-4 flex items-center gap-2">
                    <Fuel size={12}/> Fuel Preference
                  </h4>
                  <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
                    <button 
                      onClick={() => setFuelOption('without')}
                      className={`flex-1 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${fuelOption === 'without' ? 'bg-white text-cta shadow-md' : 'text-text-muted hover:bg-white/50'}`}
                    >
                      Without Fuel
                    </button>
                    <button 
                      onClick={() => setFuelOption('with')}
                      className={`flex-1 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${fuelOption === 'with' ? 'bg-white text-cta shadow-md' : 'text-text-muted hover:bg-white/50'}`}
                    >
                      With Fuel
                    </button>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="space-y-4 pt-4">
                  <div className="relative">
                    <label className="input-label">Pick-up Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-cta" size={16} />
                      <select className="w-full bg-slate-50 border border-border rounded-2xl pl-12 pr-4 py-4 text-sm font-bold text-primary focus:outline-none focus:border-cta cursor-pointer appearance-none">
                        <option>Delhi NCR</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="input-label">Pick-up Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border border-border rounded-2xl px-4 py-4 text-[10px] font-bold text-primary focus:outline-none focus:border-cta cursor-pointer"
                        onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="input-label">Return Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border border-border rounded-2xl px-4 py-4 text-[10px] font-bold text-primary focus:outline-none focus:border-cta cursor-pointer"
                        onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button 
                onClick={handleBooking}
                className="w-full btn-primary py-6 flex items-center justify-center gap-3 group shadow-glow"
              >
                <span>Initiate Reservation</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600"><Shield size={16} /></div>
                  <p className="text-[10px] text-emerald-800 font-bold leading-tight italic">All-inclusive fares. No hidden charges. Fully Insured.</p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><HelpCircle size={16} /></div>
                  <p className="text-[10px] text-primary/60 font-bold leading-tight">Need assistance? Contact our 24/7 concierge support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Fleet */}
        {related.length > 0 && (
          <div className="mt-32 pt-20 border-t border-border">
            <h2 className="text-3xl font-heading font-bold italic mb-12 uppercase tracking-tight text-primary text-center">Complementary <span className="text-cta">Machines</span></h2>
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

