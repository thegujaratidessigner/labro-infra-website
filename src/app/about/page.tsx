import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Mail, MapPin, Target, Eye, TrendingUp, Award, Building2, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const approachItems = [
    { icon: Target, title: 'Early-stage opportunity identification' },
    { icon: Eye, title: 'Thorough due diligence' },
    { icon: TrendingUp, title: 'Data-backed investment insights' },
    { icon: CheckCircle, title: 'Transparent and client-focused service' },
  ];

  const whatWeDoItems = [
    { icon: Building2, title: 'Land Investment in High-Growth Zones' },
    { icon: MapPin, title: 'Mumbai 3.0 (KSC) Focused Opportunities' },
    { icon: Eye, title: 'Site Visits & Ground-Level Insights' },
    { icon: CheckCircle, title: 'End-to-End Investment Assistance' },
  ];

  const whyChooseItems = [
    { icon: Building2, title: 'Strong On-Ground Presence' },
    { icon: Target, title: 'Early Access to Strategic Locations' },
    { icon: Award, title: 'Verified & Transparent Deals' },
    { icon: TrendingUp, title: 'ROI-Focused Investment Approach' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                "We don't just sell land — we help you invest in the future."
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            </div>

            {/* About Labro Infra */}
            <div className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">About Labro Infra</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Labro Infra is a forward-thinking real estate and land investment company focused on identifying high-growth opportunities in emerging development corridors like Mumbai 3.0 (KSC Region).
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  With a strong on-ground presence and deep understanding of market trends, we specialize in offering strategic land investment options backed by infrastructure growth and government-led development.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">Our Approach</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-6 sm:mb-8">
                At Labro Infra, we believe that real wealth is created by entering at the right time before the market recognizes the true potential. Our approach is driven by:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {approachItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900 mx-auto mb-3 sm:mb-4" />
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">What We Do</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whatWeDoItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow text-center">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900 mx-auto mb-3 sm:mb-4" />
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-12 sm:mb-20">
              <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto">
                  To become a trusted name in real estate by helping investors identify future growth corridors and build long-term wealth through smart land investments.
                </p>
              </div>
            </div>

            {/* Why Choose Labro Infra */}
            <div className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">Why Choose Labro Infra</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChooseItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-amber-500">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mx-auto mb-3 sm:mb-4" />
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Contact Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-900 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Contact Number</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 98672 30303</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-900 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-sm sm:text-base">Info@labroinfra@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-900 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Office Address</p>
                    <p className="text-gray-600 text-sm sm:text-base">1105, Shelton Cubix, Plot No- 87, Sector- 15, CBD Belapur, Navi Mumbai, 400614</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
