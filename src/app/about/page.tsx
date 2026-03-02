import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              About New Patel Stationers / <span className="font-hindi">न्यू पटेल स्टेशनर्स के बारे में</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-hindi">
              Serving the educational and institutional needs of our community with dedication and quality since our inception.
              <br />
              स्थापना के समय से ही समर्पण और गुणवत्ता के साथ हमारे समुदाय की शैक्षिक और संस्थागत आवश्यकताओं को पूरा कर रहे हैं।
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Story / <span className="font-hindi">हमारी कहानी</span></h2>
              <p className="font-hindi">
                New Patel Stationers & General Stores एक भरोसेमंद नाम है, जहाँ स्कूल, कॉलेज, ऑफिस और सरकारी संस्थानों के लिए सभी प्रकार की स्टेशनरी, रजिस्टर, टी.एल.एम., सफाई सामग्री, स्पोर्ट्स आइटम और जनरल सामान उचित दामों पर उपलब्ध हैं।
              </p>
              <p className="font-hindi">
                हम सरकारी एवं प्राइवेट विद्यालयों के लिए थोक एवं खुदरा आपूर्ति करते हैं और गुणवत्ता व समयबद्ध डिलीवरी पर विशेष ध्यान देते हैं। हमारी पहचान हमारी सेवा और ग्राहकों का भरोसा है।
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-900 p-4 rounded-2xl text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-2">Quality Assurance / <span className="font-hindi text-sm">गुणवत्ता आश्वासन</span></h4>
                  <p className="text-sm font-hindi">We source only the best materials from reputable manufacturers to ensure longevity and performance.</p>
                  <p className="text-xs text-gray-400 font-hindi">हम दीर्घायु और प्रदर्शन सुनिश्चित करने के लिए प्रतिष्ठित निर्माताओं से केवल सर्वोत्तम सामग्री प्राप्त करते हैं।</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-orange-500 p-4 rounded-2xl text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-2">Customer Focused / <span className="font-hindi text-sm">ग्राहक केंद्रित</span></h4>
                  <p className="text-sm font-hindi">Our team is dedicated to providing personalized service, especially for institutional and bulk requirements.</p>
                  <p className="text-xs text-gray-400 font-hindi">हमारी टीम व्यक्तिगत सेवा प्रदान करने के लिए समर्पित है, विशेष रूप से संस्थागत और थोक आवश्यकताओं के लिए।</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-green-600 p-4 rounded-2xl text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-2">Wide Range / <span className="font-hindi text-sm">विस्तृत श्रृंखला</span></h4>
                  <p className="text-sm font-hindi">From basic pencils to complex teaching learning materials (TLM), we have everything under one roof.</p>
                  <p className="text-xs text-gray-400 font-hindi">बेसिक पेंसिल से लेकर जटिल शिक्षण अधिगम सामग्री (TLM) तक, हमारे पास एक ही छत के नीचे सब कुछ है।</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-500 p-4 rounded-2xl text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-950 mb-2">Trusted Supplier / <span className="font-hindi text-sm">भरोसेमंद आपूर्तिकर्ता</span></h4>
                  <p className="text-sm font-hindi">A reliable partner for government tenders and private school infrastructure supplies.</p>
                  <p className="text-xs text-gray-400 font-hindi">सरकारी निविदाओं और निजी स्कूल बुनियादी ढांचे की आपूर्ति के लिए एक विश्वसनीय भागीदार।</p>
                </div>
              </div>
            </div>

            <section className="bg-blue-950 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission / <span className="font-hindi">हमारा लक्ष्य</span></h2>
              <p className="text-blue-100 text-lg leading-relaxed italic font-hindi">
                "To empower education by providing high-quality, affordable stationery and teaching materials to every school and student, ensuring that learning never stops due to lack of resources."
                <br />
                "प्रत्येक स्कूल और छात्र को उच्च गुणवत्ता वाली, सस्ती स्टेशनरी और शिक्षण सामग्री प्रदान करके शिक्षा को सशक्त बनाना, यह सुनिश्चित करना कि संसाधनों की कमी के कारण सीखना कभी न रुके।"
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
