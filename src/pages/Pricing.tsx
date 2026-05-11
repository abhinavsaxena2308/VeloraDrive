import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Daily Rental',
      price: 'Starts at $250',
      desc: 'Perfect for short trips and special occasions.',
      features: ['200 km limit', 'Basic insurance', '24/7 roadside assistance', 'Standard pickup'],
      recommended: false
    },
    {
      name: 'Weekly Package',
      price: 'Starts at $1500',
      desc: 'Extended luxury for your business or vacation needs.',
      features: ['1200 km limit', 'Premium insurance', 'Priority support', 'Complimentary car wash', 'Doorstep delivery'],
      recommended: true
    },
    {
      name: 'Monthly Elite',
      price: 'Starts at $5000',
      desc: 'The ultimate flexibility without long-term commitment.',
      features: ['Unlimited km', 'Full protection cover', 'Dedicated concierge', 'Vehicle swap once/month', 'Free chauffeur (2 days)'],
      recommended: false
    }
  ];

  return (
    <div className="pt-40 pb-20 bg-deep-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-heading font-bold mb-6 italic uppercase tracking-tight">TRANSPARENT <span className="text-cta">PRICING</span></h1>
          <p className="text-secondary max-w-2xl mx-auto text-xl font-light">
            Choose a plan that fits your lifestyle. No hidden fees, no complicated 
            contracts. Just pure luxury at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-12 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-4 ${
                plan.recommended ? 'border-cta/30 ring-1 ring-cta/20' : 'border-white/5'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-8 right-8 bg-cta text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em]">
                  Best Value
                </div>
              )}
              
              <h3 className="text-3xl font-heading font-bold mb-4 italic">{plan.name}</h3>
              <p className="text-secondary text-sm mb-10 h-12 leading-relaxed">{plan.desc}</p>
              
              <div className="mb-12">
                <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center text-cta shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-sm text-secondary font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all uppercase tracking-widest text-[10px] ${
                plan.recommended 
                  ? 'bg-cta text-white shadow-glow hover:bg-red-700' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                Select This Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center italic uppercase tracking-widest">COMMON <span className="text-cta">QUESTIONS</span></h2>
          <div className="space-y-6">
            {[
              "What documents are required for rental?",
              "Is there a security deposit involved?",
              "Can I take the car across state borders?",
              "What happens if I exceed the kilometer limit?"
            ].map((q, i) => (
              <div key={i} className="glass-card p-8 flex justify-between items-center group cursor-pointer hover:border-cta/20 transition-all">
                <span className="font-bold text-white text-lg">{q}</span>
                <HelpCircle size={24} className="text-secondary group-hover:text-cta transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
