import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, ChevronDown, ChevronUp, Shield, Zap, Star, Info } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const plans = [
  { 
    name: 'Daily Rental', 
    price: '₹2,500', 
    period: '/day', 
    desc: 'Perfect for short trips and special occasions.', 
    features: ['200 km limit', 'Basic insurance', '24/7 roadside assist', 'Standard pickup'], 
    recommended: false 
  },
  { 
    name: 'Weekly Package', 
    price: '₹12,000', 
    period: '/week', 
    desc: 'Extended luxury for business or vacation.', 
    features: ['1,200 km limit', 'Premium insurance', 'Priority support', 'Complimentary wash', 'Doorstep delivery'], 
    recommended: true 
  },
  { 
    name: 'Monthly Elite', 
    price: '₹35,000', 
    period: '/month', 
    desc: 'Ultimate flexibility without long-term commitment.', 
    features: ['Unlimited km', 'Full protection', 'Dedicated concierge', 'Vehicle swap 1x/month', 'Free chauffeur (2 days)'], 
    recommended: false 
  },
];

const faqs = [
  { q: 'What documents are required for rental?', a: 'You need a valid driving license, Aadhaar card, and a credit/debit card for the security deposit. International customers may require an IDP.' },
  { q: 'Is there a security deposit involved?', a: 'Yes, a refundable security deposit is collected at the time of pickup. The amount depends on the vehicle category (e.g., ₹10,000 for Sedans, ₹50,000 for Supercars).' },
  { q: 'Can I take the car across state borders?', a: 'Absolutely. All our vehicles come with All India Permits. Please ensure you carry the physical documents provided during handover.' },
  { q: 'What happens if I exceed the kilometer limit?', a: 'Additional kilometers are charged at ₹8-15/km depending on the vehicle category. You can pre-purchase extra km at a discounted rate.' },
];

const ComparisonFeature = ({ label, daily, weekly, monthly }: { label: string, daily: any, weekly: any, monthly: any }) => (
  <tr className="border-b border-border/50">
    <td className="py-6 px-4 text-xs font-bold text-primary uppercase tracking-wider">{label}</td>
    <td className="py-6 px-4 text-center text-sm text-text-muted">{daily}</td>
    <td className="py-6 px-4 text-center text-sm text-primary font-bold bg-slate-50/50">{weekly}</td>
    <td className="py-6 px-4 text-center text-sm text-text-muted">{monthly}</td>
  </tr>
);

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page-container">
      <Helmet>
        <title>Pricing & Packages | Velora Drive Transparency</title>
        <meta name="description" content="Explore our flexible rental plans. Daily, weekly, and monthly elite packages with no hidden costs. Compare features and find your perfect drive." />
      </Helmet>
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader 
          eyebrow="Investment" 
          title="TRANSPARENT" 
          highlight="RATES" 
          description="Access elite automotive performance with flexible investment plans designed for every duration." 
          align="center" 
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name} 
              initial={{ opacity: 0, y: 25 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative overflow-hidden group ${
                plan.recommended ? 'border-cta/30 shadow-xl' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-cta text-white text-[8px] font-black uppercase tracking-[0.3em] py-2 px-10 rotate-45 translate-x-[30%] translate-y-[50%] shadow-lg">
                    Popular
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold italic mb-2 text-primary">{plan.name}</h3>
              <p className="text-text-muted text-xs mb-10 h-10 font-light leading-relaxed">{plan.desc}</p>
              
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary tracking-tight">{plan.price}</span>
                <span className="text-text-muted/60 text-[10px] font-black uppercase tracking-widest">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-xs text-text-muted font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-black transition-all uppercase tracking-[0.2em] text-[10px] cursor-pointer ${
                plan.recommended 
                  ? 'bg-cta text-white shadow-glow hover:bg-primary' 
                  : 'bg-slate-50 border border-border text-primary hover:border-cta/50 hover:text-cta hover:bg-white'
              }`}>
                Initialize Rental
              </button>
            </motion.div>
          ))}
        </div>

        {/* Breakdown Table */}
        <div className="mb-32">
          <SectionHeader eyebrow="Details" title="PLAN" highlight="COMPARISON" align="center" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-6 px-6 text-left text-[10px] uppercase tracking-[0.3em] font-black rounded-tl-2xl">Features</th>
                  <th className="py-6 px-6 text-center text-[10px] uppercase tracking-[0.3em] font-black">Daily</th>
                  <th className="py-6 px-6 text-center text-[10px] uppercase tracking-[0.3em] font-black bg-cta/90">Weekly</th>
                  <th className="py-6 px-6 text-center text-[10px] uppercase tracking-[0.3em] font-black rounded-tr-2xl">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonFeature label="Kilometer Limit" daily="200 km" weekly="1,200 km" monthly="Unlimited" />
                <ComparisonFeature label="Insurance Type" daily="Basic" weekly="Premium" monthly="Full Coverage" />
                <ComparisonFeature label="Support" daily="Standard" weekly="Priority" monthly="Concierge" />
                <ComparisonFeature label="Delivery" daily="Self-Pickup" weekly="Doorstep" monthly="Doorstep Free" />
                <ComparisonFeature label="Chauffeur Add-on" daily="₹2,000" weekly="₹1,500/day" monthly="2 Days Free" />
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex items-start gap-3 p-6 bg-slate-50 border border-dashed border-border rounded-2xl max-w-4xl mx-auto">
            <Info size={18} className="text-cta flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-text-muted leading-relaxed">
              *All pricing is inclusive of GST. Fuel is not included. A refundable security deposit is mandatory for all bookings. Rates may vary during peak seasons or for ultra-luxury categories like Supercars.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <SectionHeader eyebrow="Assistance" title="COMMON" highlight="QUERIES" align="center" />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  openFaq === i ? 'bg-white border-cta/30 shadow-lg shadow-cta/5' : 'bg-white/50 border-border hover:border-cta/20'
                }`} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <span className={`font-bold transition-colors ${openFaq === i ? 'text-cta' : 'text-primary'}`}>{faq.q}</span>
                  <div className={`p-2 rounded-lg transition-all ${openFaq === i ? 'bg-cta text-white' : 'bg-slate-100 text-text-muted/40'}`}>
                    {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-text-muted text-sm leading-relaxed font-light border-t border-slate-100 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
