'use client';

import { useState } from 'react';
import { CheckCircle, Map, Building2, TrendingUp } from 'lucide-react';
import LeadFormPopup from './LeadFormPopup';

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formType, setFormType] = useState<'details' | 'visit'>('details');

  const openPopup = (type: 'details' | 'visit') => {
    setFormType(type);
    setIsPopupOpen(true);
  };

  return (
    <>
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-block px-4 py-2 bg-amber-500/20 rounded-full">
                <span className="text-amber-400 font-semibold text-sm">Mumbai 3.0 Opportunity</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Mumbai 3.0 – The Next Billion Dollar Growth Corridor
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Invest early in KSC before prices rise with infrastructure development.
              </p>

              {/* Trust Badges */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Government-Planned Region</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <TrendingUp className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Early-Stage Opportunity</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Building2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium">Infrastructure-Driven Growth</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openPopup('details')}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Get Project Details
                </button>
                <button
                  onClick={() => openPopup('visit')}
                  className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Book Site Visit
                </button>
              </div>
            </div>

            {/* Right Content - Map Placeholder */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Mumbai Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                  <div className="relative z-10 text-center">
                    <Map className="w-32 h-32 text-blue-400/50 mx-auto mb-4" />
                    <p className="text-white text-sm font-medium">KSC Region Map</p>
                    <p className="text-blue-200 text-xs">Karnala–Sai–Chirner New Town</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} formType={formType} />
    </>
  );
}
