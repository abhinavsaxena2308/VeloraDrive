import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const contactInfo = [
  { icon: Mail, label: 'Concierge Email', value: 'hello@veloradrive.com', desc: 'Typical response time: 2 hours' },
  { icon: Phone, label: 'Direct Line', value: '+91 98765 43210', desc: 'Available for urgent bookings' },
  { icon: MapPin, label: 'HQ Address', value: 'Sector 62, Noida, UP, India', desc: 'Visit us for a test drive' },
];

const Contact: React.FC = () => (
  <div className="page-container">
    <Helmet>
      <title>Contact Concierge | Velora Drive Support</title>
      <meta name="description" content="Reach out to our 24/7 concierge team for bookings, corporate inquiries, or bespoke automotive experiences. We are here to serve." />
    </Helmet>
    <div className="container mx-auto px-6 md:px-10">
      <div className="mb-20">
        <SectionHeader 
          eyebrow="Reach Out" 
          title="THE CONCIERGE" 
          highlight="CONNECTION" 
          description="Our specialists are at your disposal 24/7 to curate your perfect driving experience."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Left — Info & Visuals */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-12">
          <div className="grid grid-cols-1 gap-8">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 bg-white border border-border rounded-2xl flex items-center justify-center text-cta group-hover:bg-cta group-hover:text-white transition-all duration-500 shadow-sm flex-shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted/60 font-black block mb-1">{item.label}</span>
                  <span className="text-primary font-heading font-bold italic text-lg block mb-1">{item.value}</span>
                  <span className="text-[11px] text-text-muted font-light">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Business Hours / Global Availability */}
          <div className="p-8 bg-primary rounded-2xl text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-cta" />
                <h4 className="text-lg font-heading font-bold italic">Global Operations</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <Clock size={14} className="text-cta" /> Operating 24/7, 365 Days a Year
                </div>
                <div className="flex items-center gap-3 text-xs text-white/70">
                  <MessageSquare size={14} className="text-cta" /> Instant WhatsApp Response Guaranteed
                </div>
              </div>
              <button className="mt-8 px-6 py-3 bg-cta text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                Open WhatsApp Chat <Send size={12} />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Right — Refined Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass-card p-8 lg:p-12 border-cta/10">
          <h3 className="text-2xl font-heading font-bold italic mb-2 text-primary">Transmission <span className="text-cta">Your Message</span></h3>
          <p className="text-text-muted text-sm font-light mb-10 leading-relaxed">Fill the details below. Our luxury coordinators will analyze your request and get back shortly.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="c-fname" className="input-label">First Name</label>
                <input id="c-fname" type="text" className="input-field" placeholder="Alexander" />
              </div>
              <div>
                <label htmlFor="c-lname" className="input-label">Last Name</label>
                <input id="c-lname" type="text" className="input-field" placeholder="Sterling" />
              </div>
            </div>
            <div>
              <label htmlFor="c-email" className="input-label">Secure Email</label>
              <input id="c-email" type="email" className="input-field" placeholder="alex@sterling.luxury" />
            </div>
            <div>
              <label htmlFor="c-subject" className="input-label">Inquiry Type</label>
              <select id="c-subject" className="input-field cursor-pointer appearance-none">
                <option>Elite Fleet Inquiry</option>
                <option>Bespoke Concierge Request</option>
                <option>Corporate Partnership</option>
                <option>Media & PR</option>
              </select>
            </div>
            <div>
              <label htmlFor="c-msg" className="input-label">Your Requirements</label>
              <textarea id="c-msg" rows={4} className="input-field resize-none" placeholder="Describe the machine and experience you desire..." />
            </div>
            <button type="submit" className="btn-primary w-full py-4 shadow-glow flex items-center justify-center gap-3 group">
              Deploy Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Interactive Map Section */}
      <div className="mb-20">
        <SectionHeader eyebrow="Visit Us" title="OUR" highlight="HEADQUARTERS" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="w-full h-[500px] rounded-3xl overflow-hidden border border-border shadow-2xl relative group"
        >
          {/* Map Placeholder with Premium Overlay */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827188842!2d77.359196!3d28.629168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            className="w-full h-full grayscale-[0.8] contrast-[1.2] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute bottom-8 left-8 p-6 bg-white border border-border rounded-2xl shadow-xl max-w-sm hidden md:block">
            <h4 className="font-heading font-bold italic text-lg text-primary mb-2">Velora Drive Experience Center</h4>
            <p className="text-text-muted text-xs leading-relaxed">Visit us to view our curated collection of supercars in person. Test drives available for verified members.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Contact;
