import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, ChevronRight, X } from 'lucide-react';
import { CATEGORIES } from '../../data/constants';
import ProductCard from './ProductCard';
import { cn } from '../../lib/utils';

export default function ProductBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const filteredData = useMemo(() => {
    return CATEGORIES.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hindiName.includes(searchQuery) ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.hindiName.includes(searchQuery)
      )
    })).filter(cat => cat.items.length > 0 && (!selectedCategoryId || cat.id === selectedCategoryId));
  }, [searchQuery, selectedCategoryId]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 sticky top-20 z-30">
        <div className="relative grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products (रजिस्टर, पेन, चार्ट, Stationery)..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <button
            onClick={() => setSelectedCategoryId(null)}
            className={cn(
              "whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all",
              !selectedCategoryId ? "bg-blue-900 text-white shadow-lg shadow-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            )}
          >
            All Items / सभी सामान
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={cn(
                "whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all flex flex-col items-center leading-tight",
                selectedCategoryId === cat.id ? "bg-blue-900 text-white shadow-lg shadow-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              )}
            >
              <span className="text-xs opacity-80">{cat.name}</span>
              <span className="text-sm">{cat.hindiName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {filteredData.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <Search className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 font-medium">No products found matching your search.</p>
            <p className="text-gray-400 text-sm mt-1">कोई उत्पाद नहीं मिला।</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategoryId(null);}}
              className="mt-4 text-blue-900 font-bold hover:underline"
            >
              Clear all filters / फ़िल्टर हटाएं
            </button>
          </div>
        ) : (
          filteredData.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <h3 className="text-xl font-bold text-blue-950 leading-tight">{category.name}</h3>
                  <p className="text-orange-600 font-bold text-lg font-hindi">{category.hindiName}</p>
                </div>
                {expandedCategories.includes(category.id) ? <ChevronDown /> : <ChevronRight />}
              </button>

              <AnimatePresence initial={false}>
                {(expandedCategories.includes(category.id) || searchQuery || selectedCategoryId) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {category.items.map((item) => (
                          <ProductCard key={item.id} product={item} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
