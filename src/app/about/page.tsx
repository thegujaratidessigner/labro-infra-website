import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                About Us
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            </div>

            {/* Quote */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80"
                  alt="Labro Infra Office"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <blockquote className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-2xl sm:text-3xl font-medium italic">
                  "We don't just sell land, we help you invest in the future."
                </p>
              </blockquote>
            </div>

            {/* About Content */}
            <div className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
                Labro Infra is a forward-thinking real estate and land investment company focused on identifying high-growth opportunities in emerging development corridors like Mumbai 3.0 / KSC Region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                With a strong on-ground presence and deep understanding of market trends, we specialize in offering strategic land investment options backed by infrastructure growth and government-led development.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Approach</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { title: 'Early-stage opportunity identification' },
                  { title: 'Thorough due diligence' },
                  { title: 'Data-backed investment insights' },
                  { title: 'Transparent and client-focused service' },
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What We Do</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { title: 'Land investment in high-growth zones' },
                  { title: 'Mumbai 3.0 / KSC focused opportunities' },
                  { title: 'Site visits and ground-level insights' },
                  { title: 'End-to-end investment assistance' },
                ].map((item, index) => (
                  <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-6 text-center hover:border-blue-300 transition-colors">
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  To become a trusted name in real estate by helping investors identify future growth corridors and build long-term wealth through smart land investments.
                </p>
              </div>
            </div>

            {/* Why Choose Labro Infra */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Choose Labro Infra</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  'Strong on-ground presence',
                  'Early access to strategic locations',
                  'Verified and transparent deals',
                  'ROI-focused investment approach',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-medium text-gray-900">{item}</span>
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
