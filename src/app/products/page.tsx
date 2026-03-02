import React from 'react';
import ProductBrowser from '../../components/product/ProductBrowser';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
          >
            Our Product Catalog / <span className="font-hindi">हमारा उत्पाद कैटलॉग</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-hindi">
            Browse our extensive range of stationery, school supplies, and general items. Use the search and filters to find exactly what you need.
            <br />
            स्टेशनरी, स्कूल सप्लाई और जनरल सामानों की हमारी विस्तृत श्रृंखला देखें। अपनी ज़रूरत की चीज़ें खोजने के लिए सर्च और फ़िल्टर का उपयोग करें।
          </p>
        </div>

        <ProductBrowser />
      </div>
    </div>
  );
}
