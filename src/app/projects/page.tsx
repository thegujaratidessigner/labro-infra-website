'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadFormPopup from '@/components/LeadFormPopup';
import { useState } from 'react';

export default function ProjectsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formType, setFormType] = useState<'details' | 'visit'>('details');

  const openPopup = (type: 'details' | 'visit') => {
    setFormType(type);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Projects / Investment Opportunities
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium Land Investment Opportunities in Mumbai 3.0 / KSC
              </p>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Projects</h2>
              <p className="text-gray-700 leading-relaxed">
                Labro Infra offers carefully selected land investment opportunities in the KSC region, identified based on infrastructure growth, connectivity, and future development potential.
              </p>
            </div>

            {/* Project Details */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold mb-8">Project Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Location', value: 'KSC / Mumbai 3.0 Region, Navi Mumbai Extension' },
                  { label: 'Property Type', value: 'Land / Plot Investment' },
                  { label: 'Ownership', value: 'Clear Title and Verified Documents' },
                  { label: 'Land Use', value: 'Investment / Future Development Potential' },
                  { label: 'Connectivity', value: 'Close to Airport, Atal Setu, JNPA and Highways' },
                  { label: 'Accessibility', value: 'Well-connected internal and external roads' },
                  { label: 'Development Status', value: 'Early-stage with high growth potential' },
                  { label: 'Infrastructure', value: 'Upcoming metro, roads, industrial and commercial hubs' },
                  { label: 'Investment Type', value: 'Long-term capital appreciation' },
                  { label: 'Site Visit', value: 'Available on request' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="text-amber-400 font-semibold">{item.label}</span>
                    <span className="text-blue-100">{item.value}</span>
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
