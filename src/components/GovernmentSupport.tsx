import { 
  Building2, 
  FileText, 
  TrendingUp, 
  CheckCircle,
  Scale,
  Globe,
  ArrowRight,
  Road,
  Timer
} from 'lucide-react';

export default function GovernmentSupport() {
  const policyItems = [
    { icon: Building2, title: 'Planned under MMRDA' },
    { icon: FileText, title: 'Officially declared New Town / KSC Region' },
    { icon: Scale, title: '124 villages and approx. 323 sq. km under development' },
    { icon: CheckCircle, title: 'Structured master planning and zoning' },
    { icon: TrendingUp, title: 'Policy-driven and regulated growth' },
  ];

  const investmentItems = [
    { icon: TrendingUp, title: '₹4000+ crore government investment' },
    { icon: Road, title: 'Focus on roads, metro, airport and connectivity' },
    { icon: Globe, title: 'Public–private participation encouraged' },
    { icon: Timer, title: 'Long-term development vision' },
  ];

  const keyPolicies = [
    'Land Acquisition Policy',
    '22.5% Land Return Policy',
    'FDI Priority Policy',
    'Pass-Through Policy',
    'Compulsory Acquisition if required',
    'Planning and Governance under MMRDA framework',
  ];

  return (
    <section id="government-support" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Government-Backed Growth Corridor
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KSC is a government-backed development under MMRDA with strong planning, policy support, and large-scale infrastructure investment.
          </p>
        </div>

        {/* Strong Policy & Planning Support */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Strong Policy & Planning Support</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {policyItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                <p className="font-medium text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure & Investment Push */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Infrastructure & Investment Push</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {investmentItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Government Policies */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-8">Key Government Policies</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {keyPolicies.map((policy, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{policy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
