'use client';

import { useState } from 'react';
import { CheckCircle, Building2, TrendingUp, Shield, Zap, Road, Anchor } from 'lucide-react';
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
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ksc/hero-bg.jpeg"
            alt="KSC Infrastructure"
            className="w-full h-full object-cover"
          />
          {/* Left side dark blue gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/70 to-transparent lg:bg-gradient-to-r lg:from-blue-900/90 lg:via-blue-900/50 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-semibold text-xs sm:text-sm tracking-wide">MUMBAI 3.0 OPPORTUNITY</span>
              </div>

              {/* Large Headline with proper line breaks */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">INVEST IN</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">KSC REGION</span>
                <span className="block">THE NEXT GROWTH HUB OF</span>
                <span className="block">MUMBAI 3.0</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                Be a part of the region that is set to transform with world class infrastructure, seamless connectivity & unlimited potential.
              </p>

              {/* Feature Icon Strip - Glassmorphism Style */}
              <div className="space-y-3">
                {[
                  { icon: Building2, text: 'Government Planned Region' },
                  { icon: Road, text: 'Atal Setu Connectivity' },
                  { icon: Anchor, text: 'JNPA Port Connectivity' },
                  { icon: TrendingUp, text: 'High Growth Potential & Strong ROI' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button with Phone */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => openPopup('visit')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 text-center text-sm sm:text-base"
                >
                  BOOK A SITE VISIT
                </button>
                <a
                  href="tel:+917506674848"
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-lg border border-white/20 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  <span className="text-cyan-400">+91 75066 74848</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Floating Info Bar */}
          <div className="mt-8 lg:mt-12">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: Shield, title: 'Government Backed', desc: 'MMRDA Approved' },
                  { icon: Building2, title: 'World-Class Infrastructure', desc: 'Mega Projects' },
                  { icon: TrendingUp, title: 'High ROI Potential', desc: 'Early Stage Entry' },
                  { icon: Zap, title: 'Future Ready Region', desc: 'Smart City Vision' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} formType={formType} />
    </>
  );
}
