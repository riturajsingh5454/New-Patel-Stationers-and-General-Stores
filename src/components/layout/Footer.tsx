import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../../data/constants';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <ShoppingBag className="text-blue-950 w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">New Patel</span>
                <span className="text-xs uppercase tracking-widest text-orange-400">Stationers</span>
              </div>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              New Patel Stationers & General Stores एक भरोसेमंद नाम है, जहाँ स्कूल, कॉलेज, ऑफिस और सरकारी संस्थानों के लिए सभी प्रकार की स्टेशनरी उचित दामों पर उपलब्ध हैं।
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-blue-900 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Quick Links / <span className="font-hindi text-sm">त्वरित लिंक</span></h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-blue-100/70 hover:text-orange-400 transition-colors text-sm flex flex-col">
                    <span>{item.label}</span>
                    <span className="text-[10px] font-hindi opacity-50">{item.hindiLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Our Services / <span className="font-hindi text-sm">हमारी सेवाएँ</span></h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li className="flex flex-col">
                <span>School Stationery Supply</span>
                <span className="text-[10px] font-hindi opacity-50">स्कूल स्टेशनरी आपूर्ति</span>
              </li>
              <li className="flex flex-col">
                <span>Government School Material</span>
                <span className="text-[10px] font-hindi opacity-50">सरकारी स्कूल सामग्री</span>
              </li>
              <li className="flex flex-col">
                <span>Office Stationery Supply</span>
                <span className="text-[10px] font-hindi opacity-50">ऑफिस स्टेशनरी आपूर्ति</span>
              </li>
              <li className="flex flex-col">
                <span>Register & File Supply</span>
                <span className="text-[10px] font-hindi opacity-50">रजिस्टर और फाइल आपूर्ति</span>
              </li>
              <li className="flex flex-col">
                <span>TLM Material Supplier</span>
                <span className="text-[10px] font-hindi opacity-50">टी.एल.एम. सामग्री आपूर्तिकर्ता</span>
              </li>
              <li className="flex flex-col">
                <span>Sports Items Supplier</span>
                <span className="text-[10px] font-hindi opacity-50">खेल सामग्री आपूर्तिकर्ता</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Contact Us / <span className="font-hindi text-sm">संपर्क करें</span></h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-blue-100/70">
                <MapPin size={20} className="text-orange-400 shrink-0" />
                <span className="font-hindi">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-blue-100/70">
                <Phone size={20} className="text-orange-400 shrink-0" />
                <span>{CONTACT_INFO.mobile}</span>
              </li>
              <li className="flex gap-3 text-sm text-blue-100/70">
                <Mail size={20} className="text-orange-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 text-center text-sm text-blue-100/50">
          <p>© {new Date().getFullYear()} New Patel Stationers & General Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
