'use client';

import { useState } from 'react';
import { CheckCircle, Map, Building2, TrendingUp, Road } from 'lucide-react';
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
      <section id="home" className="pt-20 min-h-screen relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ksc/hero-bg.jpeg"
            alt="KSC Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div className="inline-block px-4 py-2 bg-amber-500/20 rounded-full">
                <span className="text-amber-400 font-semibold text-sm">Mumbai 3.0 Opportunity</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                INVEST IN KSC REGION THE NEXT GROWTH HUB OF MUMBAI 3.0
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                Be a part of the region that is set to transform with world class infrastructure, seamless connectivity & unlimited potential.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Government Planned Region</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">World-Class Infrastructure</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <Road className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Seamless Connectivity</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">High Growth Potential</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => openPopup('details')}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-center text-sm sm:text-base"
                >
                  Get Project Details
                </button>
                <button
                  onClick={() => openPopup('visit')}
                  className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-center text-sm sm:text-base"
                >
                  Book Site Visit
                </button>
              </div>
            </div>

            {/* Right Content - Map Placeholder */}
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden" style={{ minHeight: '400px' }}>
                  <img
                    src="/images/ksc/hero-icons.jpeg"
                    alt="KSC Region Highlights"
                    className="w-full h-full object-contain p-4 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-center space-y-3 pointer-events-none">
                    <Map className="w-20 h-20 text-blue-400/60 mx-auto" />
                    <p className="text-white text-sm font-semibold">KSC Region Map</p>
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
