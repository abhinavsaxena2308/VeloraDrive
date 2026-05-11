import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@veloradrive.com' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: MapPin, label: 'Address', value: 'Sector 62, Noida, UP, India' },
];

const Contact: React.FC = () => (
  <div className="page-container">
    <div className="container mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — Info */}
        <div>
          <SectionHeader eyebrow="Contact" title="GET IN" highlight="TOUCH" description="Our concierge team is available 24/7 to assist you with your luxury car rental needs." />

          <div className="space-y-8 mb-12">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-12 h-12 bg-white/[0.04] border border-white/[0.06] rounded-xl flex items-center justify-center text-cta group-hover:scale-110 transition-transform flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <span className="input-label">{item.label}</span>
                  <span className="text-white font-semibold text-base block">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <div className="glass-card p-8 flex items-center gap-6 group">
            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
              <MessageSquare size={28} />
            </div>
            <div>
              <h4 className="font-heading font-bold italic text-lg mb-1">WhatsApp Support</h4>
              <p className="text-white/35 text-xs mb-3">Chat with our concierge for instant help.</p>
              <button className="text-green-500 font-semibold flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] cursor-pointer group">
                Start Chat <Send size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="glass-card p-8 lg:p-12">
          <h3 className="text-2xl font-heading font-bold italic mb-8">Send a <span className="text-cta">Message</span></h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label htmlFor="c-fname" className="input-label">First Name</label><input id="c-fname" type="text" className="input-field" placeholder="John" /></div>
              <div><label htmlFor="c-lname" className="input-label">Last Name</label><input id="c-lname" type="text" className="input-field" placeholder="Doe" /></div>
            </div>
            <div><label htmlFor="c-email" className="input-label">Email</label><input id="c-email" type="email" className="input-field" placeholder="john@example.com" /></div>
            <div>
              <label htmlFor="c-subject" className="input-label">Subject</label>
              <select id="c-subject" className="input-field cursor-pointer">
                <option>General Inquiry</option><option>Booking Issue</option><option>Corporate Partnership</option>
              </select>
            </div>
            <div><label htmlFor="c-msg" className="input-label">Message</label><textarea id="c-msg" rows={5} className="input-field" placeholder="How can we help?" /></div>
            <button type="submit" className="btn-primary w-full py-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
