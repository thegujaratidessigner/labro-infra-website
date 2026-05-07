import { TrendingUp, Building2, DollarSign, Globe } from 'lucide-react';

export default function GlobalInvestors() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Global Investors Backing Mumbai 3.0 (KSC)
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Mumbai 3.0 (KSC) has attracted strong interest from leading global and domestic investors, highlighting the region's long-term growth potential. With strategic investments across infrastructure, data centers, and urban development, these commitments reflect growing confidence in the future of this planned expansion.
            </p>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Backed by government vision and large-scale infrastructure, KSC is emerging as a key destination for institutional investment.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white-20">
              <p className="text-base sm:text-xl font-semibold text-amber-400">
                Strong institutional backing driving future growth
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 shadow-lg overflow-hidden">
              <img
                src="/images/ksc/global-investors.png"
                alt="Global Investors Backing Mumbai 3.0 KSC"
                className="w-full h-auto object-contain rounded-xl bg-white"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white-20 text-center flex flex-col h-full">
            <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">₹15 Lakh Cr</p>
            <p className="text-xs sm:text-sm text-blue-200">Estimated Investment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white-20 text-center flex flex-col h-full">
            <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">$100B</p>
            <p className="text-xs sm:text-sm text-blue-200">Infrastructure Pipeline</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white-20 text-center flex flex-col h-full">
            <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-lg sm:text-xl font-bold text-white mb-2">Edu-City</p>
            <p className="text-xs sm:text-sm text-blue-200">Education Hub</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white-20 text-center flex flex-col h-full">
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-lg sm:text-xl font-bold text-white mb-2">Atal Setu</p>
            <p className="text-xs sm:text-sm text-blue-200">Influence Area</p>
          </div>
        </div>
      </div>
    </section>
  );
}
