import { Building2, TrendingUp } from 'lucide-react';

export default function GovernmentVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Government Vision for Mumbai 3.0
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Chief Minister Devendra Fadnavis has highlighted the vision of Mumbai 3.0 as a strategic expansion of the Mumbai Metropolitan Region to support future growth. He has emphasized the need for planned development beyond Navi Mumbai, with regions like Karnala–Sai–Chirner (KSC) being developed with strong infrastructure, connectivity, and economic potential.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This initiative aims to reduce pressure on existing cities while creating new opportunities for residential, industrial, and commercial growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Building2 className="w-8 h-8 text-blue-900 mb-3" />
                <p className="font-semibold text-gray-900">Planned Development</p>
                <p className="text-sm text-gray-600">Structured growth beyond Navi Mumbai</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <TrendingUp className="w-8 h-8 text-blue-900 mb-3" />
                <p className="font-semibold text-gray-900">Economic Potential</p>
                <p className="text-sm text-gray-600">New opportunities for growth</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden" style={{ minHeight: '350px' }}>
              <img
                src="/images/ksc/image_4.jpeg"
                alt="Government Vision"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent pointer-events-none" />
              <div className="relative z-10 text-center text-white pointer-events-none">
                <Building2 className="w-14 h-14 mx-auto mb-3" />
                <p className="text-lg font-semibold">Government-Led Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
