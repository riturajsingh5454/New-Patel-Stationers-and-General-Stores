import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, Award, Clock, BadgePercent } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: "सरकारी व प्राइवेट स्कूल सप्लाई",
    hindiTitle: "School Supply Experience",
    desc: "Years of experience in handling institutional orders.",
    hindiDesc: "संस्थागत ऑर्डर्स को संभालने का वर्षों का अनुभव।"
  },
  {
    icon: Award,
    title: "सभी स्टेशनरी एक ही स्थान पर",
    hindiTitle: "One-Stop Shop",
    desc: "One-stop shop for all your educational needs.",
    hindiDesc: "आपकी सभी शैक्षिक आवश्यकताओं के लिए एक ही स्थान।"
  },
  {
    icon: BadgePercent,
    title: "थोक ऑर्डर पर विशेष सुविधा",
    hindiTitle: "Bulk Order Benefits",
    desc: "Special rates and facilities for bulk orders.",
    hindiDesc: "थोक ऑर्डर्स के लिए विशेष दरें और सुविधाएं।"
  },
  {
    icon: ShieldCheck,
    title: "भरोसेमंद गुणवत्ता व उचित मूल्य",
    hindiTitle: "Trusted Quality",
    desc: "Trusted quality at the most reasonable prices.",
    hindiDesc: "सबसे उचित कीमतों पर भरोसेमंद गुणवत्ता।"
  },
  {
    icon: Clock,
    title: "समय पर सप्लाई की सुविधा",
    hindiTitle: "Timely Delivery",
    desc: "Timely delivery is our top priority.",
    hindiDesc: "समय पर डिलीवरी हमारी सर्वोच्च प्राथमिकता है।"
  },
  {
    icon: Truck,
    title: "Bulk & Institutional Supply",
    hindiTitle: "बल्क और संस्थागत आपूर्ति",
    desc: "Optimized logistics for large scale supplies.",
    hindiDesc: "बड़े पैमाने पर आपूर्ति के लिए अनुकूलित रसद।"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Why Choose Us? / <span className="font-hindi">हमें क्यों चुनें?</span>
          </h2>
          <p className="text-gray-600 font-hindi">
            हम गुणवत्ता और भरोसे के साथ आपकी संस्था की सभी आवश्यकताओं को पूरा करते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                <item.icon className="text-blue-900 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-orange-600 font-bold mb-3 uppercase tracking-wider">
                {item.hindiTitle}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                {item.desc}
              </p>
              <p className="text-gray-400 text-xs font-hindi">
                {item.hindiDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
