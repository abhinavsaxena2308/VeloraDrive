import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Fleet', path: '/cars' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Locations', path: '/locations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl py-3 border-b border-primary/5 shadow-sm'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform duration-300">
            <span className="text-white font-black text-lg leading-none">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-heading font-bold text-lg tracking-tight leading-none">
              VELORA
            </span>
            <span className="text-[7px] uppercase tracking-[0.35em] text-text-muted font-semibold">
              Drive Beyond Ordinary
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 rounded-lg cursor-pointer ${
                  isActive
                    ? 'text-primary'
                    : 'text-text-muted hover:text-primary hover:bg-primary/[0.04]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cta rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop Right Actions ── */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted hover:text-primary transition-colors cursor-pointer"
          >
            <User size={15} />
            Login
          </Link>
          <Link to="/cars" className="btn-primary py-2.5 px-6 text-[10px]">
            Book Now
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary/5 text-primary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col pt-28 px-8"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/5 text-primary cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-heading font-bold uppercase italic flex items-center justify-between group cursor-pointer ${
                      location.pathname === link.path ? 'text-cta' : 'text-primary hover:text-cta'
                    } transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom actions */}
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <Link
                to="/login"
                className="text-center py-4 border border-primary/10 rounded-xl text-[11px] font-semibold uppercase tracking-[0.15em] text-primary hover:bg-primary/5 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/cars"
                className="btn-primary py-4"
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
