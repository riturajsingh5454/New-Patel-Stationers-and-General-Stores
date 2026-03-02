import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Phone, FileText, Truck, Award } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

export default function GovernmentSupply() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-blue-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Institutional Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Government & <br /> Institutional Supply
              <br />
              <span className="text-2xl md:text-4xl font-hindi block mt-2">सरकारी एवं संस्थागत आपूर्ति</span>
            </h1>
            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed font-hindi">
              हम उत्तर प्रदेश एवं अन्य क्षेत्रों के सरकारी विद्यालयों, सहायता प्राप्त स्कूलों एवं संस्थानों के लिए संपूर्ण सामग्री उपलब्ध कराते हैं।
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex flex-col items-center gap-1">
                <div className="flex items-center gap-3">
                  <Award className="text-orange-400" />
                  <span className="font-bold">Tender Supply Available</span>
                </div>
                <span className="text-[10px] font-hindi opacity-70">निविदा आपूर्ति उपलब्ध</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex flex-col items-center gap-1">
                <div className="flex items-center gap-3">
                  <Truck className="text-orange-400" />
                  <span className="font-bold">Bulk Order Ready</span>
                </div>
                <span className="text-[10px] font-hindi opacity-70">थोक ऑर्डर तैयार</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-950 font-hindi">हमारी प्रमुख सप्लाई में शामिल हैं:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { en: "School Register", hi: "स्कूल रजिस्टर" },
                { en: "Attendance Register", hi: "उपस्थिति पंजिका" },
                { en: "MDM Register", hi: "एमडीएम रजिस्टर" },
                { en: "TLM Materials", hi: "टी.एल.एम. सामग्री" },
                { en: "Charts & Maps", hi: "चार्ट व मैप" },
                { en: "Boards", hi: "ब्लैकबोर्ड व व्हाइटबोर्ड" },
                { en: "Stationery Items", hi: "स्टेशनरी आइटम" },
                { en: "Exam Materials", hi: "परीक्षा सामग्री" },
                { en: "Sports Items", hi: "खेल सामग्री" },
                { en: "Cleaning Items", hi: "सफाई व स्वच्छता सामग्री" },
                { en: "Furniture", hi: "फर्नीचर एवं अन्य आवश्यक सामान" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700">{item.en}</span>
                    <span className="text-xs text-gray-400 font-hindi">{item.hi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-200 sticky top-32">
            <div className="bg-blue-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FileText className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Request a Quote / <span className="font-hindi text-lg">कोटेशन मांगें</span></h3>
            <p className="text-gray-600 mb-8 font-hindi">
              For bulk institutional orders or tender enquiries, please contact us directly. We provide competitive pricing and high-quality materials.
              <br />
              थोक संस्थागत ऑर्डर्स या निविदा पूछताछ के लिए, कृपया हमसे सीधे संपर्क करें। हम प्रतिस्पर्धी मूल्य निर्धारण और उच्च गुणवत्ता वाली सामग्री प्रदान करते हैं।
            </p>
            <div className="space-y-4">
              <a 
                href={`tel:${CONTACT_INFO.mobile}`}
                className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold flex flex-col items-center hover:bg-blue-950 transition-all shadow-xl"
              >
                <span className="flex items-center gap-3"><Phone size={20} /> Call for Enquiry</span>
                <span className="text-xs font-hindi opacity-70">पूछताछ के लिए कॉल करें</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=I'm interested in Government School Supply`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex flex-col items-center hover:bg-green-700 transition-all shadow-xl"
              >
                <span className="flex items-center gap-3"><Phone size={20} /> WhatsApp Bulk Order</span>
                <span className="text-xs font-hindi opacity-70">व्हाट्सएप थोक ऑर्डर</span>
              </a>
            </div>
            <p className="mt-8 text-center text-sm text-gray-400 font-medium font-hindi">
              👉 Bulk Order & Tender Supply Available / थोक ऑर्डर और निविदा आपूर्ति उपलब्ध
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
