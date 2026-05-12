import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

const plans = [
  { name: 'Daily Rental', price: '₹2,500', period: '/day', desc: 'Perfect for short trips and special occasions.', features: ['200 km limit', 'Basic insurance', '24/7 roadside assist', 'Standard pickup'], recommended: false },
  { name: 'Weekly Package', price: '₹12,000', period: '/week', desc: 'Extended luxury for business or vacation.', features: ['1,200 km limit', 'Premium insurance', 'Priority support', 'Complimentary wash', 'Doorstep delivery'], recommended: true },
  { name: 'Monthly Elite', price: '₹35,000', period: '/month', desc: 'Ultimate flexibility without long-term commitment.', features: ['Unlimited km', 'Full protection', 'Dedicated concierge', 'Vehicle swap 1x/month', 'Free chauffeur (2 days)'], recommended: false },
];

const faqs = [
  { q: 'What documents are required for rental?', a: 'You need a valid driving license, Aadhaar card, and a credit/debit card for the security deposit.' },
  { q: 'Is there a security deposit involved?', a: 'Yes, a refundable security deposit is collected at the time of pickup. Amount varies by vehicle category.' },
  { q: 'Can I take the car across state borders?', a: 'Yes, interstate travel is allowed for most vehicles. Please inform us at the time of booking.' },
  { q: 'What happens if I exceed the kilometer limit?', a: 'Additional kilometers are charged at ₹8-15/km depending on the vehicle category.' },
];

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page-container">
      <div className="container mx-auto px-6 md:px-10">
        <SectionHeader eyebrow="Pricing" title="TRANSPARENT" highlight="PRICING" description="Choose a plan that fits your lifestyle. No hidden fees, no complicated contracts." align="center" />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative overflow-hidden hover:-translate-y-2 transition-transform duration-500 ${plan.recommended ? 'border-cta/30 ring-1 ring-cta/15' : ''}`}>
              {plan.recommended && <span className="absolute top-6 right-6 badge-cta">Best Value</span>}
              <h3 className="text-2xl font-heading font-bold italic mb-2 text-primary">{plan.name}</h3>
              <p className="text-text-muted text-sm mb-8 h-10">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-text-muted/60 text-sm ml-1">{plan.period}</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0"><Check size={10} strokeWidth={3} /></div>
                    <span className="text-sm text-text-muted">{f}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-semibold transition-all uppercase tracking-[0.15em] text-[10px] cursor-pointer ${plan.recommended ? 'bg-cta text-white shadow-glow hover:bg-red-700' : 'bg-slate-50 border border-border text-primary hover:bg-slate-100'}`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="FAQ" title="COMMON" highlight="QUESTIONS" align="center" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="p-6 flex justify-between items-center">
                  <span className="font-semibold text-primary text-sm">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-cta" /> : <ChevronDown size={18} className="text-text-muted/40" />}
                </div>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-6">
                    <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
