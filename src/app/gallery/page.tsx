import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../../data/constants';
import { cn } from '../../lib/utils';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Our Gallery / <span className="font-hindi">हमारी गैलरी</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our store, our extensive product range, and our successful institutional supplies.
            <br />
            <span className="font-hindi text-sm">हमारी दुकान, उत्पादों की विस्तृत श्रृंखला और संस्थागत आपूर्ति की एक झलक।</span>
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full font-bold transition-all flex flex-col items-center leading-tight",
                activeCategory === cat.id 
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              )}
            >
              <span className="text-[10px] uppercase opacity-70">{cat.name}</span>
              <span className="font-hindi">{cat.hindiName}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-gray-50"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                      {GALLERY_CATEGORIES.find(c => c.id === img.category)?.name}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{img.title}</h3>
                    <p className="text-white/80 text-sm font-hindi">{(img as any).hindiTitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
