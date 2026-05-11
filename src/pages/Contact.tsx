import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-deep-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-10 italic uppercase tracking-tight">GET IN <span className="text-cta">TOUCH</span></h1>
            <p className="text-secondary text-xl font-light mb-16 leading-relaxed">
              Our concierge team is available 24/7 to assist you with your 
              luxury car rental needs. From bespoke quotes to corporate partnerships.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: "Email", value: "hello@veloradrive.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Address", value: "Sector 62, Noida, UP, India" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center text-cta shadow-glow group-hover:scale-110 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <span className="text-secondary text-[10px] uppercase tracking-[0.3em] font-black block mb-2">{item.label}</span>
                    <span className="text-white text-xl font-bold font-heading italic tracking-wide">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 glass-card border-cta/10 flex items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 relative z-10">
                <MessageSquare size={36} />
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-heading font-bold mb-2 italic">WhatsApp Support</h4>
                <p className="text-secondary text-sm mb-6 font-light">Chat with our elite concierge for instant assistance.</p>
                <button className="text-green-500 font-bold flex items-center gap-2 group uppercase tracking-widest text-[10px]">
                  Start Chat <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 md:p-16 border-white/5 shadow-2xl">
            <h3 className="text-3xl font-heading font-bold mb-12 italic">SEND A <span className="text-cta">MESSAGE</span></h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-sm text-white focus:outline-none focus:border-cta transition-colors" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-sm text-white focus:outline-none focus:border-cta transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-sm text-white focus:outline-none focus:border-cta transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-sm text-white focus:outline-none focus:border-cta transition-colors">
                  <option>General Inquiry</option>
                  <option>Booking Problem</option>
                  <option>Corporate Partnership</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-sm text-white focus:outline-none focus:border-cta transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn-primary w-full py-5">
                Dispatch Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
