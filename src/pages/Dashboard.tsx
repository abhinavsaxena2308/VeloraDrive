import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Car, Calendar, Heart, Settings, LogOut, ChevronRight, 
  User, ShieldCheck, MapPin, Clock, CreditCard
} from 'lucide-react';
import logo from '../assets/logo.png';

const stats = [
  { label: 'Active Rentals', value: '1', color: 'text-emerald-500' },
  { label: 'Total Trips', value: '12', color: 'text-cta' },
  { label: 'Saved Cars', value: '5', color: 'text-primary' },
];

const bookings = [
  { id: '#VD-2401', car: 'Mercedes S-Class', date: 'May 15 – May 18', status: 'Active', statusColor: 'text-emerald-600 bg-emerald-50' },
  { id: '#VD-2398', car: 'BMW M4 Competition', date: 'May 5 – May 7', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
  { id: '#VD-2395', car: 'Range Rover SV', date: 'Apr 28 – Apr 30', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
  { id: '#VD-2390', car: 'Porsche 911 GT3', date: 'Apr 20 – Apr 22', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
];

const sideLinks = [
  { icon: Car, id: 'bookings', label: 'My Bookings' },
  { icon: ShieldCheck, id: 'profile', label: 'Profile & Security' },
  { icon: Heart, id: 'saved', label: 'Saved Cars' },
  { icon: Settings, id: 'settings', label: 'Settings' },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      <Helmet>
        <title>User Command | Velora Drive Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-border p-8">
        <Link to="/" className="flex items-center group mb-12">
          <img src={logo} alt="Velora" className="h-8 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <nav className="flex flex-col gap-2 flex-1">
          {sideLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setActiveTab(link.id)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === link.id 
                  ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20' 
                  : 'text-text-muted hover:text-primary hover:bg-slate-50'
              }`}
            >
              <link.icon size={16} />
              {link.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-6 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary border border-border">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Arjun Saxena</p>
              <p className="text-[10px] text-text-muted">Elite Member</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-cta transition-colors text-[11px] uppercase tracking-widest font-bold cursor-pointer w-full text-left">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 pt-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-heading font-bold italic text-primary uppercase tracking-tight">User <span className="text-cta">Command</span></h1>
            <p className="text-text-muted/60 text-sm font-light mt-1">Monitor your fleet and upcoming expeditions.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/cars" className="btn-primary py-3.5 px-8 text-[10px] shadow-glow">Book New Machine</Link>
          </div>
        </header>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm group hover:border-cta/20 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-4xl font-heading font-bold italic ${s.color}`}>{s.value}</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-text-muted/60 font-black mt-2">{s.label}</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-cta/5 transition-colors">
                  {i === 0 ? <Clock size={20} className="text-emerald-500" /> : i === 1 ? <Car size={20} className="text-cta" /> : <Heart size={20} className="text-primary" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'bookings' && (
            <motion.div 
              key="bookings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Active Rental Focus */}
              <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl mb-10">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="badge-cta mb-4 inline-block bg-cta text-white border-none">Current Trip</span>
                    <h2 className="text-3xl font-heading font-bold italic mb-4">Mercedes S-Class</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-xs text-white/70">
                        <Calendar size={14} className="text-cta" /> May 15 – May 18, 2026
                      </div>
                      <div className="flex items-center gap-3 text-xs text-white/70">
                        <MapPin size={14} className="text-cta" /> Delhi NCR Doorstep Delivery
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-white text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-cta hover:text-white transition-all">Manage Trip</button>
                  </div>
                  <div className="hidden md:block">
                    {/* Abstract placeholder for car silhouette */}
                    <div className="w-full aspect-video bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 flex items-center justify-center">
                      <Car size={80} className="text-white/10" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
              </div>

              {/* History Table */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border flex justify-between items-center">
                  <h2 className="font-heading font-bold italic text-lg text-primary uppercase tracking-tight">Expedition <span className="text-cta">History</span></h2>
                  <button className="text-[10px] font-bold text-cta uppercase tracking-widest hover:underline cursor-pointer">Download All Invoices</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50/50">
                        <th className="text-left px-8 py-5 text-[9px] uppercase tracking-[0.25em] text-text-muted/60 font-black">ID</th>
                        <th className="text-left px-8 py-5 text-[9px] uppercase tracking-[0.25em] text-text-muted/60 font-black">Vehicle</th>
                        <th className="text-left px-8 py-5 text-[9px] uppercase tracking-[0.25em] text-text-muted/60 font-black">Timeline</th>
                        <th className="text-left px-8 py-5 text-[9px] uppercase tracking-[0.25em] text-text-muted/60 font-black">Status</th>
                        <th className="px-8 py-5"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((b) => (
                        <tr key={b.id} className="border-t border-border/50 hover:bg-slate-50/30 transition-colors group">
                          <td className="px-8 py-6 text-[11px] text-text-muted/80 font-mono font-medium">{b.id}</td>
                          <td className="px-8 py-6 text-xs text-primary font-bold">{b.car}</td>
                          <td className="px-8 py-6 text-xs text-text-muted">{b.date}</td>
                          <td className="px-8 py-6"><span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${b.statusColor}`}>{b.status}</span></td>
                          <td className="px-8 py-6 text-right"><button className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"><ChevronRight size={16} className="text-text-muted/30 group-hover:text-cta group-hover:translate-x-1 transition-all" /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-heading font-bold mb-8 italic uppercase text-primary">Identity <span className="text-cta">Verification</span></h3>
                <div className="space-y-6">
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-4">
                    <ShieldCheck className="text-emerald-500" size={24} />
                    <div>
                      <p className="text-xs font-bold text-emerald-900">Driving License Verified</p>
                      <p className="text-[10px] text-emerald-700">Valid until Dec 2028</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-text-muted block mb-2">Full Name</label>
                    <input type="text" value="Arjun Saxena" readOnly className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm font-bold text-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-text-muted block mb-2">Contact Email</label>
                    <input type="text" value="arjun@veloradrive.com" readOnly className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm font-bold text-primary focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-lg font-heading font-bold mb-8 italic uppercase text-primary">Payment <span className="text-cta">Methods</span></h3>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-xl flex items-center justify-between group hover:border-cta/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-slate-100 rounded-md flex items-center justify-center"><CreditCard size={20} className="text-primary/40" /></div>
                      <div>
                        <p className="text-xs font-bold text-primary">•••• •••• •••• 4242</p>
                        <p className="text-[10px] text-text-muted uppercase tracking-widest">Visa | Exp 12/26</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-cta bg-cta" />
                  </div>
                  <button className="w-full py-4 border-2 border-dashed border-border rounded-xl text-[10px] font-bold uppercase tracking-widest text-text-muted hover:border-cta/30 hover:text-cta transition-all flex items-center justify-center gap-2">
                    Add New Method
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
