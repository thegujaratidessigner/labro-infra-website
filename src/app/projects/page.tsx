'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadFormPopup from '@/components/LeadFormPopup';
import { useState } from 'react';
import { MapPin, Road, Plane, Anchor, CheckCircle } from 'lucide-react';

export default function ProjectsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formType, setFormType] = useState<'details' | 'visit'>('details');

  const openPopup = (type: 'details' | 'visit') => {
    setFormType(type);
    setIsPopupOpen(true);
  };

  const projectDetails = [
    { label: 'Location', value: 'Pen (KSC), Navi Mumbai Extension' },
    { label: 'Property Type', value: 'Land / Plot Investment' },
    { label: 'Ownership', value: 'Clear Title & Verified Documents' },
    { label: 'Land Use', value: 'Investment / Future Development Potential' },
    { label: 'Connectivity', value: 'Close to Airport, Atal Setu, JNPA & Highways' },
    { label: 'Accessibility', value: 'Well-connected internal & external roads' },
    { label: 'Development Status', value: 'Early-stage (high growth potential)' },
    { label: 'Infrastructure', value: 'Upcoming metro, roads, industrial & commercial hubs' },
    { label: 'Investment Type', value: 'Long-term capital appreciation' },
    { label: 'Site Visit', value: 'Available on request' },
  ];

  const locationAdvantages = [
    { icon: Road, title: 'Distance from Atal Setu', desc: 'Easy access to Mumbai Trans Harbour Link' },
    { icon: Plane, title: 'Navi Mumbai Airport proximity', desc: 'Global connectivity advantage' },
    { icon: Anchor, title: 'JNPA Port connectivity', desc: 'India\'s largest port access' },
    { icon: Road, title: 'Major highways', desc: 'Mumbai-Pune Expressway & Mumbai-Goa Highway' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Premium Land Investment Opportunities in Mumbai 3.0 (KSC)
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure your position in the next major growth corridor before prices rise.
              </p>
            </div>

            {/* About the Opportunity */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Opportunity</h2>
              <p className="text-gray-700 leading-relaxed">
                We have a strong on-ground presence in the Pen region, with deep local understanding and active project involvement. Our team ensures smooth coordination, quick execution, and efficient handling of every process. This allows us to deliver faster progress and reliable results for our clients.
              </p>
            </div>

            {/* Project Details */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold mb-8">Project Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectDetails.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="text-amber-400 font-semibold">{item.label}</span>
                    <span className="text-blue-100">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantage */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MapPin className="w-10 h-10" />
                Location Advantage
              </h2>
              <div className="mb-8">
                <img
                  src="/images/ksc/image_20.jpeg"
                  alt="Location Advantage"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg max-h-96"
                />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {locationAdvantages.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openPopup('details')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Get Project Details
              </button>
              <button
                onClick={() => openPopup('visit')}
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} formType={formType} />
    </div>
  );
}
