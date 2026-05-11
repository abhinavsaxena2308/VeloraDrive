import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/cars' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-2xl py-3 border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-cta rounded-lg flex items-center justify-center shadow-glow group-hover:rotate-12 transition-transform duration-500">
            <span className="text-white font-black text-xl">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-black text-xl tracking-tighter leading-none">
              VELORA <span className="text-cta text-sm">DRIVE</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-secondary font-bold">Elite Car Rental</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative group ${
                location.pathname === link.path ? 'text-cta' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-cta transition-all duration-500 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/login" className="text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-cta transition-colors flex items-center gap-2">
            <User size={14} />
            Login
          </Link>
          <Link to="/cars" className="btn-primary py-3 px-8 text-[10px] rounded-full shadow-glow">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl lg:hidden flex flex-col pt-32 px-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-heading font-black text-white hover:text-cta transition-colors flex items-center justify-between group uppercase italic"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto mb-20 flex flex-col gap-6">
              <Link
                to="/login"
                className="text-center py-5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/cars"
                className="btn-primary py-5 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
