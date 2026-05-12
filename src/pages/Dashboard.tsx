import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Calendar, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Active Rentals', value: '1', color: 'text-green-500' },
  { label: 'Total Trips', value: '12', color: 'text-cta' },
  { label: 'Saved Cars', value: '5', color: 'text-amber-500' },
];

const bookings = [
  { id: '#VD-2401', car: 'Mercedes S-Class', date: 'May 15 – May 18', status: 'Active', statusColor: 'text-green-600 bg-green-50' },
  { id: '#VD-2398', car: 'BMW M4 Competition', date: 'May 5 – May 7', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
  { id: '#VD-2395', car: 'Range Rover SV', date: 'Apr 28 – Apr 30', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
  { id: '#VD-2390', car: 'Porsche 911 GT3', date: 'Apr 20 – Apr 22', status: 'Completed', statusColor: 'text-text-muted/60 bg-slate-100' },
];

const sideLinks = [
  { icon: Car, label: 'My Bookings', active: true },
  { icon: Calendar, label: 'Active Rentals' },
  { icon: Heart, label: 'Saved Cars' },
  { icon: Settings, label: 'Settings' },
];

const Dashboard: React.FC = () => (
  <div className="min-h-screen bg-background flex">
    {/* Sidebar */}
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-border p-6">
      <Link to="/" className="flex items-center gap-2.5 mb-10">
        <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center"><span className="text-white font-black text-lg">V</span></div>
        <span className="text-primary font-heading font-bold text-sm tracking-tight">VELORA</span>
      </Link>

      <nav className="flex flex-col gap-1 flex-1">
        {sideLinks.map((link) => (
          <button key={link.label} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all cursor-pointer ${link.active ? 'bg-slate-50 text-primary font-semibold' : 'text-text-muted hover:text-primary hover:bg-slate-50'}`}>
            <link.icon size={18} />
            {link.label}
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-cta transition-colors text-sm cursor-pointer">
        <LogOut size={18} /> Sign Out
      </button>
    </aside>

    {/* Main */}
    <main className="flex-1 p-6 lg:p-10 pt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-heading font-bold italic text-primary">Dashboard</h1>
          <p className="text-text-muted/60 text-sm">Welcome back, Arjun.</p>
        </div>
        <Link to="/cars" className="btn-primary py-3 px-6 text-[10px]">New Booking</Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {stats.map((s) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6">
            <span className={`text-3xl font-heading font-bold italic ${s.color}`}>{s.value}</span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-text-muted/60 font-semibold mt-1">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="font-heading font-bold italic text-lg text-primary">Booking History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-text-muted/60 font-semibold">Booking ID</th>
                <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-text-muted/60 font-semibold">Vehicle</th>
                <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-text-muted/60 font-semibold">Dates</th>
                <th className="text-left px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-text-muted/60 font-semibold">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b border-border/50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-text-muted/80 font-mono">{b.id}</td>
                  <td className="px-6 py-4 text-sm text-primary font-semibold">{b.car}</td>
                  <td className="px-6 py-4 text-sm text-text-muted">{b.date}</td>
                  <td className="px-6 py-4"><span className={`badge ${b.statusColor}`}>{b.status}</span></td>
                  <td className="px-6 py-4"><ChevronRight size={16} className="text-text-muted/30" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
