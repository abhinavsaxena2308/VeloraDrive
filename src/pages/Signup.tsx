import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa'

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_#3B82F6_0%,_transparent_40%)] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_#3B82F6_0%,_transparent_40%)] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-10 md:p-12 w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white font-heading font-bold text-2xl tracking-tighter">
              VELORA <span className="text-primary">DRIVE</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-secondary text-sm">Join Velora Drive for a premium experience</p>
        </div>

        <form className="space-y-6 mb-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-secondary font-bold">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="John Doe" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-secondary font-bold">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="john@example.com" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-secondary font-bold">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={18} />
              <input 
                type="password" 
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="••••••••" 
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full py-4 shadow-primary/20">
            Create Account
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest">
            <span className="bg-matte-black px-4 text-secondary">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-white/5 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-colors">
            <FcGoogle size={18} /> Google
          </button>
          <button className="bg-white/5 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-colors">
            <FaGithub size={18} /> Github
          </button>
        </div>

        <p className="text-center text-sm text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
