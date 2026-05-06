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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-blue-100 leading-relaxed">
              Mumbai 3.0 (KSC) has attracted strong interest from leading global and domestic investors, highlighting the region's long-term growth potential. With strategic investments across infrastructure, data centers, and urban development, these commitments reflect growing confidence in the future of this planned expansion.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              Backed by government vision and large-scale infrastructure, KSC is emerging as a key destination for institutional investment.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white-20">
              <p className="text-xl font-semibold text-amber-400">
                Strong institutional backing driving future growth
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center relative overflow-hidden" style={{ minHeight: '350px' }}>
              <img
                src="/images/ksc/image_6.jpeg"
                alt="Global Investors"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent pointer-events-none" />
              <div className="relative z-10 text-center pointer-events-none">
                <Globe className="w-14 h-14 mx-auto mb-3 text-amber-400" />
                <p className="text-lg font-semibold">Global Investment Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white-20 text-center">
            <DollarSign className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">₹15 Lakh Cr</p>
            <p className="text-sm text-blue-200">Estimated Investment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white-20 text-center">
            <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">$100B</p>
            <p className="text-sm text-blue-200">Infrastructure Pipeline</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white-20 text-center">
            <Building2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <p className="text-xl font-bold text-white mb-2">Edu-City</p>
            <p className="text-sm text-blue-200">Education Hub</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white-20 text-center">
            <Globe className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <p className="text-xl font-bold text-white mb-2">Atal Setu</p>
            <p className="text-sm text-blue-200">Influence Area</p>
          </div>
        </div>
      </div>
    </section>
  );
}
