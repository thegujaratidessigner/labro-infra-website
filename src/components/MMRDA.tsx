import { Building2, Map, CheckCircle } from 'lucide-react';

export default function MMRDA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            MMRDA – Government Authority Behind Development
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg overflow-hidden">
              <img
                src="/images/ksc/mmrda.jpeg"
                alt="MMRDA - Government Authority Behind Development"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Mumbai Metropolitan Region Development Authority (MMRDA) is the key government body responsible for planning and developing major infrastructure and urban growth across the Mumbai Metropolitan Region, including the Mumbai 3.0 (KSC) area.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Through structured planning, policy implementation, and large-scale infrastructure projects such as roads, metro networks, and connectivity corridors, MMRDA ensures organized and sustainable development.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-5 sm:p-6 border-l-4 border-blue-900">
              <p className="text-base sm:text-xl font-semibold text-blue-900">
                Its involvement brings long-term vision, regulatory support, and strong infrastructure backing, which helps create planned growth, increases investor confidence, and supports the transformation of regions like KSC into future-ready urban hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 text-center">
                <Map className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900">Roads & Metro</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 text-center">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900">Policy Support</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 text-center">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900">Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
