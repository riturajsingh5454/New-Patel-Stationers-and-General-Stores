import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_INFO } from '../../data/constants';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-900 p-2 rounded-lg">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-lg leading-tight",
              (scrolled || location.pathname !== '/') ? "text-blue-900" : "text-white"
            )}>
              New Patel Stationers
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-widest font-semibold",
              (scrolled || location.pathname !== '/') ? "text-orange-600" : "text-orange-400"
            )}>
              न्यू पटेल स्टेशनर्स
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isHome = location.pathname === '/';
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex flex-col items-center transition-colors hover:text-orange-500",
                  isActive 
                    ? "text-orange-600 font-bold" 
                    : (scrolled || !isHome) ? "text-gray-700" : "text-white"
                )}
              >
                <span className="text-[10px] uppercase tracking-tighter opacity-70 leading-none mb-0.5">
                  {item.label}
                </span>
                <span className="text-sm font-hindi leading-none">
                  {item.hindiLabel}
                </span>
              </Link>
            );
          })}
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
          >
            <Phone size={16} />
            Enquiry
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-md",
            scrolled ? "text-blue-900" : "text-blue-900 md:text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex flex-col p-3 rounded-xl",
                    location.pathname === item.href 
                      ? "bg-blue-50 text-blue-900" 
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <span className="text-xs uppercase tracking-widest opacity-60">{item.label}</span>
                  <span className="text-xl font-bold font-hindi">{item.hindiLabel}</span>
                </Link>
              ))}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
