import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Our Fleet', path: '/cars' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Subscriptions', path: '/subscriptions' },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
  ];

  const services = [
    'Self-Drive Rental',
    'Corporate Leasing',
    'Airport Transfer',
    'Wedding Cars',
    'Monthly Subscription',
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-cta rounded-lg flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform duration-300">
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

            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              India's premium self-drive car rental platform. Luxury vehicles,
              seamless booking, and an experience that moves you.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-slate-50 border border-border flex items-center justify-center text-text-muted hover:text-cta hover:border-cta/30 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-[10px] font-bold">{name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1 group cursor-pointer"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-text-muted">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cta mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-muted">Sector 62, Noida, UP, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cta flex-shrink-0" />
                <span className="text-sm text-text-muted">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cta flex-shrink-0" />
                <span className="text-sm text-text-muted">hello@veloradrive.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-3">
                Subscribe for offers
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-slate-50 border border-border rounded-lg px-3 py-2.5 text-xs text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-cta/40 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-cta hover:bg-primary text-white px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted/60">
            © 2026 Velora Drive. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted/60 hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-text-muted/60 hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-text-muted/60 hover:text-primary transition-colors cursor-pointer">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;