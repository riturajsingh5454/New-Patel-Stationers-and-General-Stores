import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../data/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/50 skew-x-12 transform translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Trusted Since Years / <span className="font-hindi">वर्षों से भरोसेमंद</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Welcome to <br />
              <span className="text-orange-400">New Patel Stationers</span> <br />
              <span className="text-2xl md:text-4xl font-hindi block mt-2">न्यू पटेल स्टेशनर्स में आपका स्वागत है</span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed font-hindi">
              New Patel Stationers & General Stores एक भरोसेमंद नाम है, जहाँ स्कूल, कॉलेज, ऑफिस और सरकारी संस्थानों के लिए सभी प्रकार की स्टेशनरी उचित दामों पर उपलब्ध हैं।
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold flex flex-col items-center hover:bg-orange-500 hover:text-white transition-all shadow-xl"
              >
                <span className="flex items-center gap-2">Browse Products <ArrowRight size={20} /></span>
                <span className="text-xs font-hindi opacity-70">उत्पाद देखें</span>
              </Link>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold flex flex-col items-center hover:bg-white/10 transition-all"
              >
                <span className="flex items-center gap-2"><Phone size={20} /> WhatsApp Enquiry</span>
                <span className="text-xs font-hindi opacity-70">व्हाट्सएप पूछताछ</span>
              </a>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-blue-200 uppercase tracking-wider">Quality Products</span>
                <span className="text-[10px] text-blue-300 font-hindi">गुणवत्तापूर्ण उत्पाद</span>
              </div>
              <div className="border-r border-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Bulk</span>
                <span className="text-xs text-blue-200 uppercase tracking-wider">Supply Ready</span>
                <span className="text-[10px] text-blue-300 font-hindi">थोक आपूर्ति</span>
              </div>
              <div className="border-r border-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Best</span>
                <span className="text-xs text-blue-200 uppercase tracking-wider">Market Rates</span>
                <span className="text-[10px] text-blue-300 font-hindi">बाजार दरें</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl">
              <img 
                src="/banner.jpeg" 
                alt="Stationery Items" 
                className="rounded-2xl shadow-sm w-full max-w-md h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShoppingBag className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Institutional Supply / <span className="font-hindi">संस्थागत आपूर्ति</span></p>
                    <p className="text-lg font-bold text-blue-900">Available Now / <span className="font-hindi">अभी उपलब्ध है</span></p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
