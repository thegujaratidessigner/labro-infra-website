'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', budget: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Get in Touch with Labro Infra
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or want to explore investment opportunities in Mumbai 3.0 (KSC)? Our team is here to guide you with the right information and on-ground support.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Budget
                    </label>
                    <input
                      type="text"
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your investment budget"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Get Project Details
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Call / WhatsApp</p>
                        <p className="text-gray-600">7506674848</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <p className="text-gray-600">info@labroinfra.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Office Address</p>
                        <p className="text-gray-600">
                          1105, Shelton Cubix, Plot No- 87,<br />
                          Sector- 15, CBD Belapur,<br />
                          Navi Mumbai, 400614
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
                  <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-xl flex items-center justify-center relative overflow-hidden" style={{ minHeight: '300px' }}>
                    <img
                      src="/images/ksc/image_21.jpeg"
                      alt="Office Location"
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center pointer-events-none">
                      <MapPin className="w-14 h-14 text-blue-400 mx-auto mb-3" />
                      <p className="text-gray-900 font-semibold">Google Map</p>
                      <p className="text-sm text-gray-600">CBD Belapur, Navi Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
