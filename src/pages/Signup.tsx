import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup: React.FC = () => (
  <div className="min-h-screen bg-background flex">
    {/* Left Brand Panel */}
    <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1200" alt="Supercar" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      <div className="relative z-10 p-16">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cta rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <span className="text-primary font-heading font-bold text-2xl tracking-tight">VELORA</span>
        </Link>
        <h2 className="text-4xl font-heading font-bold italic text-primary leading-tight mb-4">Start Your<br /><span className="text-gradient">Journey Today.</span></h2>
        <p className="text-text-muted text-sm max-w-sm">Create your account and unlock access to India's most exclusive self-drive fleet.</p>
      </div>
    </div>

    {/* Right Form */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="lg:hidden mb-8">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center"><span className="text-white font-black text-lg">V</span></div>
            <span className="text-primary font-heading font-bold text-lg">VELORA</span>
          </Link>
        </div>
        <h1 className="text-3xl font-heading font-bold italic mb-2 text-primary">Create Account</h1>
        <p className="text-text-muted text-sm mb-8">Join Velora Drive in under a minute.</p>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div><label htmlFor="s-fname" className="input-label">First Name</label><input id="s-fname" type="text" className="input-field" placeholder="John" /></div>
            <div><label htmlFor="s-lname" className="input-label">Last Name</label><input id="s-lname" type="text" className="input-field" placeholder="Doe" /></div>
          </div>
          <div><label htmlFor="s-email" className="input-label">Email</label><input id="s-email" type="email" className="input-field" placeholder="you@example.com" /></div>
          <div><label htmlFor="s-phone" className="input-label">Phone</label><input id="s-phone" type="tel" className="input-field" placeholder="+91 98765 43210" /></div>
          <div><label htmlFor="s-pass" className="input-label">Password</label><input id="s-pass" type="password" className="input-field" placeholder="Min 8 characters" /></div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border bg-slate-50 mt-0.5 cursor-pointer text-cta focus:ring-cta" />
            <span className="text-xs text-text-muted">I agree to the <a href="#" className="text-cta hover:underline">Terms of Service</a> and <a href="#" className="text-cta hover:underline">Privacy Policy</a>.</span>
          </label>
          <button type="submit" className="btn-primary w-full py-4">Create Account</button>
        </form>

        <p className="text-center text-sm text-text-muted mt-8">
          Already have an account? <Link to="/login" className="text-cta hover:underline font-semibold cursor-pointer">Sign In</Link>
        </p>
      </motion.div>
    </div>
  </div>
);

export default Signup;
