import { MapPin, Building, ArrowRight } from 'lucide-react';

export default function WhatIsMumbai30() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            WHAT IS MUMBAI 3.0
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Mumbai 3.0 refers to the <span className="font-semibold text-blue-900">Karnala–Sai–Chirner (KSC) New Town</span>, a large-scale, government-planned urban development zone designed to become the next major growth corridor beyond Navi Mumbai.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Planned under the guidance of <span className="font-semibold text-blue-900">MMRDA</span>, this region spans across <span className="font-semibold text-blue-900">124 villages (~323 sq. km)</span> and is being developed as a future-ready city driven by infrastructure, connectivity, and economic expansion.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 sm:p-6 border-l-4 border-blue-900">
              <p className="text-lg sm:text-xl font-semibold text-blue-900">
                Mumbai 3.0 is not just an expansion; it is the next phase of Mumbai's growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
                <span className="text-xs sm:text-sm text-blue-900 font-medium">124 Villages</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-2 rounded-lg">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
                <span className="text-xs sm:text-sm text-blue-900 font-medium">323 sq. km</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-3 sm:px-4 py-2 rounded-lg">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
                <span className="text-xs sm:text-sm text-blue-900 font-medium">MMRDA Planned</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-3 sm:p-4 shadow-lg overflow-hidden">
              <img
                src="/images/ksc/ksc-map.jpeg"
                alt="KSC Region Map - Karnala Sai Chirner New Town"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
