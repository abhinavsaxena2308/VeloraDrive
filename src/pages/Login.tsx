import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login: React.FC = () => (
  <div className="min-h-screen bg-background flex">
    {/* Left Brand Panel */}
    <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" alt="Luxury car" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
      <div className="relative z-10 p-16">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-cta rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <span className="text-primary font-heading font-bold text-2xl tracking-tight">VELORA</span>
        </Link>
        <h2 className="text-4xl font-heading font-bold italic text-primary leading-tight mb-4">Welcome Back<br />to the <span className="text-gradient">Fast Lane.</span></h2>
        <p className="text-text-muted text-sm max-w-sm">Access your bookings, manage your fleet preferences, and unlock exclusive member benefits.</p>
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
        <h1 className="text-3xl font-heading font-bold italic mb-2 text-primary">Sign In</h1>
        <p className="text-text-muted text-sm mb-8">Enter your credentials to continue.</p>

        <form className="space-y-5">
          <div><label htmlFor="l-email" className="input-label">Email</label><input id="l-email" type="email" className="input-field" placeholder="you@example.com" /></div>
          <div><label htmlFor="l-pass" className="input-label">Password</label><input id="l-pass" type="password" className="input-field" placeholder="••••••••" /></div>
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-border bg-slate-50 cursor-pointer text-cta focus:ring-cta" /><span className="text-xs text-text-muted">Remember me</span></label>
            <a href="#" className="text-xs text-cta hover:underline cursor-pointer">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary w-full py-4">Sign In</button>
        </form>

        <p className="text-center text-sm text-text-muted mt-8">
          Don't have an account? <Link to="/signup" className="text-cta hover:underline font-semibold cursor-pointer">Create Account</Link>
        </p>
      </motion.div>
    </div>
  </div>
);

export default Login;
