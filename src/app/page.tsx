import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import GallerySlider from '../components/sections/GallerySlider';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShoppingBag, School, Building2, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '../data/constants';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={24} />
              <div className="flex flex-col">
                <span className="font-bold text-blue-950 leading-none">Quality Products</span>
                <span className="text-xs text-gray-500 font-hindi">उच्च गुणवत्ता वाले उत्पाद</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={24} />
              <div className="flex flex-col">
                <span className="font-bold text-blue-950 leading-none">Reasonable Rates</span>
                <span className="text-xs text-gray-500 font-hindi">उचित दरें</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={24} />
              <div className="flex flex-col">
                <span className="font-bold text-blue-950 leading-none">Bulk Supply</span>
                <span className="text-xs text-gray-500 font-hindi">थोक आपूर्ति</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/shop.jpeg" 
                alt="Our Shop" 
                className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-900 text-white p-8 rounded-3xl hidden md:block max-w-xs shadow-2xl border-4 border-white">
                <p className="text-sm italic opacity-90 mb-4 font-hindi">"हम सरकारी एवं प्राइवेट विद्यालयों के लिए थोक एवं खुदरा आपूर्ति करते हैं और गुणवत्ता व समयबद्ध डिलीवरी पर विशेष ध्यान देते हैं।"</p>
                <p className="font-bold">— New Patel Stationers</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                Established & Trusted
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
                Your Trusted Partner for <br />
                <span className="text-orange-600">Educational & Office Supplies</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg font-hindi">
                New Patel Stationers & General Stores एक भरोसेमंद नाम है, जहाँ स्कूल, कॉलेज, ऑफिस और सरकारी संस्थानों के लिए सभी प्रकार की स्टेशनरी, रजिस्टर, टी.एल.एम., सफाई सामग्री, स्पोर्ट्स आइटम और जनरल सामान उचित दामों पर उपलब्ध हैं।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <School className="text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">School Supply</h4>
                    <p className="text-sm text-gray-500 font-hindi">छात्रों और शिक्षकों के लिए पूर्ण रेंज।</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Building2 className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Office Supply</h4>
                    <p className="text-sm text-gray-500 font-hindi">प्रोफेशनल फाइल्स, रजिस्टर और टूल्स।</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-blue-100"
              >
                Learn more about us <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Gallery Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                <ImageIcon size={20} />
                <span className="uppercase tracking-widest text-sm">Visual Tour</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                Our Gallery / <span className="font-hindi">हमारी गैलरी</span>
              </h2>
              <p className="text-gray-600">Explore our store, product displays, and institutional supply highlights.</p>
            </div>
            <Link to="/gallery" className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-900 hover:text-white transition-all">
              View All Photos / सभी फोटो देखें
            </Link>
          </div>
          
          <GallerySlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to place a Bulk Order? <br />
            <span className="text-orange-500 font-hindi">थोक ऑर्डर के लिए तैयार हैं?</span>
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for special institutional pricing and fast delivery across the region.
            <br />
            <span className="text-sm opacity-70 font-hindi">विशेष संस्थागत मूल्य निर्धारण और तेज़ डिलीवरी के लिए आज ही हमसे संपर्क करें।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-900/20 transform hover:-translate-y-1"
            >
              Contact Us Now / संपर्क करें
            </Link>
            <Link 
              to="/products" 
              className="bg-white text-blue-950 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1"
            >
              View Catalog / कैटलॉग देखें
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
