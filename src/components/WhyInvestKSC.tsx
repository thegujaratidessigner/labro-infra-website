import { 
  Road, 
  Plane, 
  Anchor, 
  Train, 
  Building2, 
  Home, 
  Factory, 
  TrendingUp,
  TrendingDown,
  Landmark,
  Sparkles,
  Clock,
  Award
} from 'lucide-react';

export default function WhyInvestKSC() {
  const connectivityItems = [
    { icon: Road, title: 'Atal Setu / MTHL', desc: 'Direct Mumbai connectivity' },
    { icon: Plane, title: 'Navi Mumbai International Airport', desc: 'Global connectivity' },
    { icon: Anchor, title: 'JNPA Port', desc: 'India\'s largest port access' },
    { icon: Road, title: 'Mumbai–Pune Expressway', desc: 'Seamless regional travel' },
    { icon: Road, title: 'Mumbai–Goa Highway', desc: 'Strong intercity connectivity' },
    { icon: Train, title: 'Metro & Rail Network', desc: 'Future-ready public transport' },
    { icon: Road, title: 'Virar–Alibaug Corridor', desc: 'Multi-modal connectivity' },
    { icon: Anchor, title: 'Water Transport', desc: 'Ferry and coastal connectivity' },
  ];

  const infrastructureItems = [
    { icon: Building2, title: 'Next-generation master-planned integrated city model' },
    { icon: Factory, title: 'Industrial and economic hub' },
    { icon: Home, title: 'Township and housing development' },
    { icon: Landmark, title: 'Business and commercial zones' },
    { icon: Clock, title: 'Future development timeline' },
    { icon: TrendingUp, title: 'Strong government investment signal' },
  ];

  const futureVisionItems = [
    { icon: Home, title: 'Planned residential townships and smart living spaces' },
    { icon: Landmark, title: 'Business districts and IT parks' },
    { icon: Award, title: 'Edu City and Med City' },
    { icon: Factory, title: 'Logistics and industrial zones' },
    { icon: Award, title: 'Sports City and entertainment zones' },
    { icon: Sparkles, title: 'Sustainable and future-ready infrastructure' },
  ];

  const earlyEntryItems = [
    { icon: TrendingDown, title: 'Lowest price stage today' },
    { icon: TrendingUp, title: 'Maximum future appreciation potential' },
    { icon: Clock, title: 'Long-term capital growth opportunity' },
  ];

  return (
    <section id="why-invest" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Invest in KSC?
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Connectivity */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <Road className="w-8 h-8" />
            Connectivity
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {connectivityItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mega Infrastructure Development */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Mega Infrastructure Development
          </h3>
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
          <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            Future City Vision
          </h3>
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
          <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            Early Entry Opportunity
          </h3>
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
  );
}
