import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Road, Building2, Sparkles, TrendingUp, Plane, Train, Anchor, Truck, Wrench, Building, GraduationCap, Award, Timer, CheckCircle, MapPin, FileText, Users, HandCoins, Phone, Eye, Shield } from 'lucide-react';

export default function WhyInvestPage() {
  const connectivityItems = [
    { icon: Road, title: 'Atal Setu (MTHL)', desc: 'Directly linking Mumbai to key growth zones like the airport, port, and KSC region' },
    { icon: Plane, title: 'Navi Mumbai International Airport', desc: 'Global connectivity' },
    { icon: Anchor, title: 'JNPA Port', desc: 'India\'s largest port access' },
    { icon: Road, title: 'Mumbai–Pune Expressway', desc: 'Seamless regional travel' },
    { icon: Road, title: 'Mumbai–Goa Highway', desc: 'Strong intercity connectivity' },
    { icon: Train, title: 'Metro & Rail Network', desc: 'Future-ready public transport' },
    { icon: Truck, title: 'Virar–Alibaug Corridor', desc: 'Multi-modal connectivity' },
    { icon: Anchor, title: 'Water Transport', desc: 'Ferry & coastal connectivity' },
  ];

  const infrastructureItems = [
    { 
      icon: Building2, 
      title: 'Next-Generation, Master-Planned Integrated City Model',
      desc: 'The KSC (Mumbai 3.0) region is being developed as a next-generation, master-planned integrated city designed for future-ready living and investment. With a strong focus on large-scale infrastructure, the region is witnessing the development of modern road networks, seamless connectivity corridors, smart urban planning, and essential utilities.',
      image: '/images/ksc/mega-master-city.jpeg'
    },
    { 
      icon: Wrench, 
      title: 'Industrial & Economic Hub',
      desc: 'The KSC (Mumbai 3.0) region is emerging as a major industrial and economic hub, driven by its strategic location and strong infrastructure development. With close proximity to JNPA Port, major highways, and upcoming logistics corridors, the region is well-positioned to support manufacturing, warehousing, and trade activities.',
      image: '/images/ksc/mega-industrial.jpeg'
    },
    { 
      icon: Building, 
      title: 'Township & Housing Development',
      desc: 'The KSC (Mumbai 3.0) region is set to witness large-scale township and housing development designed around a modern, master-planned approach. With integrated residential communities, the focus is on creating well-balanced living spaces that include essential amenities such as schools, healthcare, retail zones, and recreational areas.',
      image: '/images/ksc/mega-township.png'
    },
    { 
      icon: Building2, 
      title: 'Business & Commercial Zones',
      desc: 'The KSC (Mumbai 3.0) region is rapidly evolving into a vibrant hub for business and commercial activity. Planned developments include modern office spaces, IT parks, retail centers, and mixed-use commercial districts designed to support a growing corporate ecosystem.',
      image: '/images/ksc/mega-business.jpeg'
    },
    { 
      icon: Timer, 
      title: 'Future Timeline',
      desc: 'The development of the KSC (Mumbai 3.0) region is planned in a phased and structured manner to ensure sustainable and long-term growth. In the initial phase, focus is placed on land planning, policy implementation, and key infrastructure development such as road networks and connectivity corridors.',
      image: '/images/ksc/mega-timeline.jpeg'
    },
    { 
      icon: TrendingUp, 
      title: 'Government Investment (Strong Signal)',
      desc: 'Government investment in the KSC (Mumbai 3.0) region acts as a strong signal of long-term growth and development. Significant funding is being directed towards infrastructure, connectivity, and urban planning through authorities like MMRDA and the Maharashtra government.',
      image: '/images/ksc/mega-govt-investment.jpeg'
    },
  ];

  const futureVisionItems = [
    { 
      icon: Building, 
      title: 'Planned Residential Townships & Smart Living Spaces',
      desc: 'As development progresses in the KSC (Mumbai 3.0) region, it is expected that well-known real estate developers will gradually enter the market. With large land availability and improving infrastructure, the region has strong potential for planned residential townships and modern living spaces.',
      image: '/images/ksc/future-residential.jpeg'
    },
    { 
      icon: Building2, 
      title: 'Business Districts & IT Parks (Next BKC Potential)',
      desc: 'As the KSC (Mumbai 3.0) region develops, it is likely to see the gradual growth of business districts and IT parks. With improving connectivity and available land, companies may start exploring this region for offices and commercial spaces. Similar to how areas like BKC developed over time, KSC has the potential to grow into an important business zone.',
      image: '/images/ksc/future-business-it.jpeg'
    },
    { 
      icon: GraduationCap, 
      title: 'Edu City & Med City (Education & Healthcare Hubs)',
      desc: 'As the KSC (Mumbai 3.0) region grows, it is expected that strong education and healthcare facilities will develop over time. With government planning and support under Mumbai 3.0, the region is being positioned to attract reputed institutions, hospital chains, and private investors in the education and healthcare sector.',
      image: '/images/ksc/future-edu-med.jpeg'
    },
    { 
      icon: Truck, 
      title: 'Logistics & Industrial Zones (Driven by JNPA & Airport)',
      desc: 'As the KSC (Mumbai 3.0) region develops, it is expected to see steady growth in logistics and industrial activity due to its proximity to JNPA Port and the upcoming Navi Mumbai International Airport. With strong government planning and infrastructure support, the region is likely to attract logistics companies, warehousing hubs, and industrial investments over time.',
      image: '/images/ksc/future-logistics.jpeg'
    },
    { 
      icon: Award, 
      title: 'Sports City & Entertainment Zones',
      desc: 'As the KSC (Mumbai 3.0) region develops, it is expected that sports and entertainment facilities will gradually come up as part of the overall planning. With government support and growing interest from private investors, the area may see development of stadiums, sports academies, indoor complexes, and entertainment zones.',
      image: '/images/ksc/future-sports.jpeg'
    },
    { 
      icon: Sparkles, 
      title: 'Sustainable & Future-Ready Infrastructure',
      desc: 'As the KSC (Mumbai 3.0) region develops, the focus is on building infrastructure that supports long-term growth in a practical and balanced way. With proper planning from the government, the area is expected to have good road networks, reliable basic services, and systems that make daily life smoother.',
      image: '/images/ksc/future-sustainable.jpeg'
    },
  ];

  const howWeHelpItems = [
    { 
      icon: MapPin, 
      number: '1',
      title: 'Right Location Selection',
      desc: 'We help you identify high-growth locations in Pen region based on upcoming infrastructure, connectivity, and future development potential.'
    },
    { 
      icon: Shield, 
      number: '2',
      title: 'Verified & Clear Title Plots',
      desc: 'All properties are legally verified with clear documentation, ensuring safe and secure investment.'
    },
    { 
      icon: Users, 
      number: '3',
      title: 'End-to-End Support',
      desc: 'From site visit to final registration, we guide you at every step making the process smooth and hassle-free.'
    },
    { 
      icon: TrendingUp, 
      number: '4',
      title: 'High Growth Investment Guidance',
      desc: 'We don\'t just sell land we help you invest in locations with strong appreciation potential.'
    },
    { 
      icon: Eye, 
      number: '5',
      title: 'Site Visit Assistance',
      desc: 'We arrange on-ground site visits, so you can see the location, connectivity, and surroundings before investing.'
    },
    { 
      icon: HandCoins, 
      number: '6',
      title: 'Transparent Pricing',
      desc: 'No hidden charges. We provide clear pricing and a complete cost breakdown.'
    },
    { 
      icon: Phone, 
      number: '7',
      title: 'Long-Term Investment Support',
      desc: 'We stay connected even after purchase, guiding you for future resale or development opportunities.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                WHY INVEST IN KSC (MUMBAI 3.0)?
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Karnala–Sai–Chirner (KSC) is part of the Mumbai 3.0 vision, a government planned expansion designed to support future growth of the Mumbai Metropolitan Region. With strong infrastructure, strategic location, and early-stage pricing, KSC offers a powerful opportunity for long-term investors.
              </p>
            </div>

            {/* Connectivity */}
            <div className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
                <Road className="w-8 h-8 sm:w-10 sm:h-10" />
                1. CONNECTIVITY
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                The KSC (Mumbai 3.0) region offers excellent connectivity, making it a strategically important location for future growth. It is well-connected to key infrastructure such as the Navi Mumbai International Airport, Atal Setu (Mumbai Trans Harbour Link), JNPA Port, and major highways linking Mumbai and Pune. This seamless connectivity not only improves accessibility but also plays a crucial role in driving real estate demand, industrial growth, and long-term value appreciation in the region.
              </p>
              <div className="mb-6 sm:mb-8">
                <img
                  src="/images/ksc/connectivity.jpeg"
                  alt="Connectivity Infrastructure"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg max-h-80 sm:max-h-96"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {connectivityItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900 mb-3 sm:mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mega Infrastructure Development */}
            <div className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
                2. MEGA INFRASTRUCTURE DEVELOPMENT
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {infrastructureItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 sm:h-56 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-3 sm:p-4"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900" />
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future City Vision */}
            <div className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
                3. FUTURE CITY VISION
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center leading-relaxed">
                A fully planned, self-sustained city combining living, working, education, healthcare, and business in one integrated ecosystem.
              </p>
              <div className="mb-6 sm:mb-8">
                <img
                  src="/images/ksc/future-vision-hero.jpeg"
                  alt="KSC Future City Vision"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg max-h-80 sm:max-h-96"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {futureVisionItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 sm:h-56 relative overflow-hidden bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-3 sm:p-4"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Entry Opportunity */}
            <div className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
                4. Early Entry Opportunity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 text-center border-2 border-green-200">
                  <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Lowest Price Stage Today</h3>
                  <p className="text-sm sm:text-base text-gray-600">Maximum future appreciation potential</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 text-center border-2 border-blue-200">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Maximum Future Appreciation Potential</h3>
                  <p className="text-sm sm:text-base text-gray-600">Early-stage investment advantage</p>
                </div>
              </div>
            </div>

            {/* How Do We Help Invest */}
            <div className="mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
                5. How do we help Invest?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {howWeHelpItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-500">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-amber-500 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl">
                        {item.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
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
