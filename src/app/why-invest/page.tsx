import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Road, Building2, Sparkles, TrendingUp, Plane, Train, Anchor, Truck, Wrench, Building, GraduationCap, Award, Timer } from 'lucide-react';

export default function WhyInvestPage() {
  const connectivityItems = [
    { icon: Road, title: 'Atal Setu / MTHL', desc: 'Direct Mumbai connectivity' },
    { icon: Plane, title: 'Navi Mumbai Airport', desc: 'Global connectivity' },
    { icon: Anchor, title: 'JNPA Port', desc: 'India\'s largest port access' },
    { icon: Train, title: 'Mumbai–Pune Expressway', desc: 'Seamless regional travel' },
    { icon: Road, title: 'Mumbai–Goa Highway', desc: 'Strong intercity connectivity' },
    { icon: Train, title: 'Metro & Rail Network', desc: 'Future-ready public transport' },
    { icon: Truck, title: 'Virar–Alibaug Corridor', desc: 'Multi-modal connectivity' },
    { icon: Anchor, title: 'Water Transport', desc: 'Ferry and coastal connectivity' },
  ];

  const infrastructureItems = [
    { icon: Building2, title: 'Master-planned City' },
    { icon: Wrench, title: 'Industrial Hub' },
    { icon: Building, title: 'Township Development' },
    { icon: Building2, title: 'Business Zones' },
    { icon: Timer, title: 'Future Development Timeline' },
    { icon: TrendingUp, title: 'Government Investment Signal' },
  ];

  const futureVisionItems = [
    { icon: Building, title: 'Residential Townships' },
    { icon: Building2, title: 'Business Districts' },
    { icon: GraduationCap, title: 'Edu City' },
    { icon: Award, title: 'Med City' },
    { icon: Truck, title: 'Logistics Zones' },
    { icon: Building2, title: 'Sports City' },
  ];

  const earlyEntryItems = [
    { icon: TrendingUp, title: 'Lowest Price Stage' },
    { icon: Award, title: 'Maximum Appreciation' },
    { icon: Timer, title: 'Long-term Growth' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Why Invest in KSC
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the compelling reasons to invest in Mumbai 3.0 / KSC Region
              </p>
            </div>

            {/* Connectivity */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <Road className="w-8 h-8" />
                Connectivity
              </h2>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80"
                  alt="Mumbai Connectivity"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {connectivityItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mega Infrastructure Development */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <Building2 className="w-8 h-8" />
                Mega Infrastructure Development
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {infrastructureItems.map((item, index) => (
                  <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
                    <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future City Vision */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                Future City Vision
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {futureVisionItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 text-amber-600 mb-4" />
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Entry Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" />
                Early Entry Opportunity
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
                {earlyEntryItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 text-green-600 mb-4" />
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
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
