import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Car, Calendar, CreditCard, User, LogOut, ChevronRight, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-matte-black/50 p-6 hidden lg:flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="text-white font-heading font-bold text-xl tracking-tighter">
            VELORA <span className="text-primary">DRIVE</span>
          </span>
        </Link>

        <nav className="space-y-2 flex-1">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Car, label: 'My Bookings' },
            { icon: Calendar, label: 'Schedules' },
            { icon: CreditCard, label: 'Payments' },
            { icon: User, label: 'Profile' },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? 'bg-primary text-white shadow-glow' 
                  : 'text-secondary hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all mt-auto">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-matte-black/50 px-8 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-bold text-white">Dashboard Overview</h2>
          <div className="flex items-center gap-6">
            <button className="relative w-10 h-10 flex items-center justify-center text-secondary hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <div className="text-right">
                <span className="block text-sm font-bold text-white">John Doe</span>
                <span className="block text-[10px] text-secondary uppercase tracking-widest font-bold">Premium Member</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full border border-white/20 overflow-hidden"></div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Trips', value: '24', change: '+2 this month' },
              { label: 'Distance Covered', value: '1,280 km', change: '+120 km' },
              { label: 'Active Bookings', value: '1', change: 'Audi RS Q8' },
              { label: 'Member Points', value: '4,500', change: 'Gold Status' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6">
                <span className="text-secondary text-xs uppercase tracking-widest font-bold block mb-4">{stat.label}</span>
                <div className="flex justify-between items-end">
                  <span className="text-3xl font-bold text-white tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] text-primary font-bold">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Trips Table */}
            <div className="lg:col-span-2 glass-card overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold">Recent Bookings</h3>
                <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-secondary text-[10px] uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Car Model</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-white">
                    {[
                      { model: 'Porsche 911 GT3', status: 'Completed', date: 'May 12, 2024', amount: '$450' },
                      { model: 'Mercedes S-Class', status: 'Active', date: 'May 18, 2024', amount: '$500' },
                      { model: 'BMW M4 Comp.', status: 'Cancelled', date: 'April 25, 2024', amount: '$380' },
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-bold">{row.model}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            row.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                            row.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-secondary">{row.date}</td>
                        <td className="px-6 py-4 font-bold">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Favorite Cars */}
            <div className="glass-card flex flex-col">
              <div className="p-6 border-b border-white/5">
                <h3 className="font-bold">Wishlist</h3>
              </div>
              <div className="p-6 flex-1 space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-16 bg-white/10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center italic text-[10px] text-white/5">
                      CAR IMG
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="block font-bold text-sm group-hover:text-primary transition-colors">Tesla Model S</span>
                      <span className="block text-secondary text-xs">$350/Day</span>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight size={16} className="text-secondary group-hover:text-primary transition-all" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-white/5">
                <button className="btn-outline w-full py-3 text-xs">Browse More Cars</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
