import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const tiers = [
  { name: 'Weekly', price: '₹15,000', period: '/week', desc: 'Short-term flexibility for weekend warriors.', features: ['Choice of 20+ models', '1,500 km included', 'Basic insurance', 'Standard support', 'Self-pickup'], color: '' },
  { name: 'Monthly', price: '₹45,000', period: '/month', desc: 'The most popular plan for professionals.', features: ['Choice of 30+ models', 'Unlimited km', 'Premium insurance', 'Priority support', 'Doorstep delivery', 'Free car wash weekly'], color: 'border-cta/30 ring-1 ring-cta/15', recommended: true },
  { name: 'Corporate', price: 'Custom', period: '', desc: 'Tailored fleet solutions for your business.', features: ['Dedicated fleet manager', 'Multiple vehicles', 'Custom billing', 'Employee access', 'Monthly reports', 'Priority roadside'], color: '' },
  { name: 'Long-Term', price: '₹1,20,000', period: '/quarter', desc: 'Maximum savings for extended commitments.', features: ['All Monthly benefits', '25% savings', 'Vehicle swap 2x/quarter', 'Personal concierge', 'Airport transfers included', 'Loyalty rewards'], color: '' },
];

const Subscriptions: React.FC = () => (
  <div className="page-container">
    <div className="container mx-auto px-6 md:px-10">
      <SectionHeader eyebrow="Subscribe" title="SUBSCRIPTION" highlight="PLANS" description="Why rent when you can subscribe? Flexible mobility plans designed for modern lifestyles." align="center" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {tiers.map((tier, i) => (
          <motion.div key={tier.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 flex flex-col relative overflow-hidden hover:-translate-y-2 transition-transform duration-500 ${tier.color}`}>
            {tier.recommended && <span className="absolute top-5 right-5 badge-cta">Popular</span>}
            <h3 className="text-xl font-heading font-bold italic mb-2 text-primary">{tier.name}</h3>
            <p className="text-text-muted/60 text-xs mb-6 min-h-[32px]">{tier.desc}</p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">{tier.price}</span>
              {tier.period && <span className="text-text-muted/60 text-xs ml-1">{tier.period}</span>}
            </div>
            <div className="space-y-3 mb-8 flex-1">
              {tier.features.map((f, j) => (
                <div key={j} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0"><Check size={8} strokeWidth={3} /></div>
                  <span className="text-xs text-text-muted">{f}</span>
                </div>
              ))}
            </div>
            <button className={`w-full py-3.5 rounded-xl font-semibold transition-all uppercase tracking-[0.12em] text-[10px] cursor-pointer flex items-center justify-center gap-2 ${tier.recommended ? 'bg-cta text-white shadow-glow hover:bg-red-700' : 'bg-slate-50 border border-border text-primary hover:bg-slate-100'}`}>
              {tier.price === 'Custom' ? 'Contact Sales' : 'Subscribe Now'} <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-heading font-bold italic mb-4 text-primary">Why <span className="text-cta">Subscribe?</span></h3>
        <p className="text-text-muted text-sm leading-relaxed">No EMIs, no depreciation, no maintenance headaches. Swap cars, cancel anytime, and enjoy a luxury ride every single day. It's car ownership reimagined.</p>
      </div>
    </div>
  </div>
);

export default Subscriptions;
