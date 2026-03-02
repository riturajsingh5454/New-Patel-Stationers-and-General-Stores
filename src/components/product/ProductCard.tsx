import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShoppingBag } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';
import { Product } from '../../types';

export default function ProductCard({ product }: { product: Product, key?: string | number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col h-full group transition-all hover:shadow-md"
    >
      <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <ShoppingBag className="text-gray-200 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
        )}
        <div className="absolute top-2 right-2">
          <span className="bg-blue-900/10 text-blue-900 text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
            In Stock
          </span>
        </div>
      </div>
      <div className="flex-grow">
        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1 block">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-blue-950 mb-1 line-clamp-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-gray-500 mb-4 font-hindi">
          {product.hindiName}
        </p>
      </div>
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=नमस्ते, मुझे ${product.hindiName} (${product.name}) के बारे में जानकारी चाहिए।`}
        target="_blank"
        rel="noreferrer"
        className="mt-auto w-full bg-green-50 text-green-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-all shadow-sm"
      >
        <Phone size={16} />
        Enquire Now
      </a>
    </motion.div>
  );
}
