import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaFacebookF, href: '#' },
    { icon: FaYoutube, href: '#' },
  ];

  return (
    <footer className="bg-matte-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>

              <span className="text-white font-heading font-bold text-xl tracking-tighter">
                VELORA <span className="text-cta">DRIVE</span>
              </span>
            </Link>

            <p className="text-secondary text-sm leading-relaxed">
              Experience the pinnacle of automotive luxury. Velora Drive
              offers an unparalleled selection of premium vehicles for those
              who demand excellence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-4 text-sm text-secondary">
              <li>
                <Link
                  to="/cars"
                  className="hover:text-primary transition-colors"
                >
                  Our Fleet
                </Link>
              </li>

              <li>
                <Link
                  to="/locations"
                  className="hover:text-primary transition-colors"
                >
                  Locations
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Contact Us
            </h4>

            <ul className="flex flex-col gap-4 text-sm text-secondary">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>Sector 62, Noida, UP, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hello@veloradrive.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Newsletter
            </h4>

            <p className="text-secondary text-sm mb-6">
              Subscribe to get latest updates and offers.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-xl font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <p>© 2026 Velora Drive. All rights reserved.</p>

          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;