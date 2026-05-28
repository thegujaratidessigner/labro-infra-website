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
        <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 break-words">
                Get in Touch with Labro Infra
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or want to explore investment opportunities in Mumbai 3.0 (KSC)? Our team is here to guide you with the right information and on-ground support.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                      placeholder="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Get Project Details
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call / WhatsApp</p>
                        <p className="text-gray-600 text-sm sm:text-base">7506674848</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</p>
                        <p className="text-gray-600 text-sm sm:text-base">info@labroinfra.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Office Address</p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          1105, Shelton Cubix, Plot No- 87,<br />
                          Sector- 15, CBD Belapur,<br />
                          Navi Mumbai, 400614
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
                  <div className="rounded-xl overflow-hidden shadow-md" style={{ minHeight: '250px' }}>
                    <iframe
                      src="https://www.google.com/maps?q=Shelton+Cubix,+Sector+15,+CBD+Belapur,+Navi+Mumbai&output=embed"
                      title="Labro Infra Office Location"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
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
