import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Contact Us / <span className="font-hindi">संपर्क करें</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-hindi">
            Have questions about our products or need a bulk quote? We're here to help.
            <br />
            क्या आपके पास हमारे उत्पादों के बारे में कोई प्रश्न हैं या थोक कोटेशन की आवश्यकता है? हम यहाँ आपकी सहायता के लिए हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-6 items-start mb-8">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Our Location / <span className="font-hindi">हमारा पता</span></h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start mb-8">
                <div className="bg-orange-50 p-4 rounded-2xl text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Phone Number / <span className="font-hindi">फ़ोन नंबर</span></h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.mobile}</p>
                  <p className="text-xs text-gray-400 mt-1 font-hindi">Mon - Sat: 9:00 AM - 8:00 PM / सोमवार - शनिवार</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Email Address / <span className="font-hindi">ईमेल पता</span></h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block bg-green-600 text-white p-8 rounded-3xl text-center shadow-xl hover:bg-green-700 transition-all group"
            >
              <MessageSquare className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold mb-2">WhatsApp Support / <span className="font-hindi">व्हाट्सएप सहायता</span></h4>
              <p className="text-green-100 text-sm font-hindi">Bulk Order / School Enquiry के लिए अभी संपर्क करें</p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-950 mb-8">Send us a Message / <span className="font-hindi">हमें संदेश भेजें</span></h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name / <span className="font-hindi">पूरा नाम</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number / <span className="font-hindi">फ़ोन नंबर</span></label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Enter your phone"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject / <span className="font-hindi">विषय</span></label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all">
                    <option>General Enquiry / सामान्य पूछताछ</option>
                    <option>Bulk Order Request / थोक ऑर्डर अनुरोध</option>
                    <option>School Supply Quote / स्कूल सप्लाई कोटेशन</option>
                    <option>Other / अन्य</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message / <span className="font-hindi">संदेश</span></label>
                  <textarea 
                    rows={5} 
                    required
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-900 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-950 transition-all shadow-xl shadow-blue-100"
                >
                  <Send size={20} />
                  Send Message / संदेश भेजें
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7554498779486!2d81.2553262750285!3d26.68830267678168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bc5000a4d6829%3A0x56d066c255485bce!2sNew%20Patel%20Stationers!5e0!3m2!1sen!2sin!4v1772456525621!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
