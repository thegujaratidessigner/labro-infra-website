import { TrendingDown, Minus, TrendingUp } from 'lucide-react';

export default function GrowthCycle() {
  const cycles = [
    {
      title: 'Mumbai – Saturated Market',
      icon: TrendingDown,
      color: 'red',
      points: [
        'Limited land availability',
        'Extremely high property prices',
        'Overcrowded infrastructure',
        'Minimal scope for large-scale expansion',
      ],
      result: 'Growth slows down, entry becomes expensive.',
    },
    {
      title: 'Navi Mumbai – Mature Market',
      icon: Minus,
      color: 'amber',
      points: [
        'Planned city development',
        'Strong infrastructure and connectivity',
        'Significant price appreciation already achieved',
        'Stable but slower growth phase',
      ],
      result: 'Most major gains already realized.',
    },
    {
      title: 'Mumbai 3.0 / KSC – Early Stage Opportunity',
      icon: TrendingUp,
      color: 'green',
      points: [
        'Large-scale government-planned development',
        '124 villages and approx. 323 sq. km under MMRDA',
        'Infrastructure-driven growth: Airport, Atal Setu, JNPA',
        'Lowest entry price stage',
      ],
      result: 'Maximum growth potential ahead.',
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mumbai Growth Cycle
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cycles.map((cycle, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg ${
                cycle.highlight ? 'ring-4 ring-amber-500 transform scale-105' : ''
              }`}
            >
              <div className="flex items-center justify-center mb-6">
                <div
                  className={`p-4 rounded-full ${
                    cycle.color === 'red'
                      ? 'bg-red-100'
                      : cycle.color === 'amber'
                      ? 'bg-amber-100'
                      : 'bg-green-100'
                  }`}
                >
                  <cycle.icon
                    className={`w-8 h-8 ${
                      cycle.color === 'red'
                        ? 'text-red-600'
                        : cycle.color === 'amber'
                        ? 'text-amber-600'
                        : 'text-green-600'
                    }`}
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{cycle.title}</h3>

              <ul className="space-y-3 mb-6">
                {cycle.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        cycle.color === 'red'
                          ? 'bg-red-500'
                          : cycle.color === 'amber'
                          ? 'bg-amber-500'
                          : 'bg-green-500'
                      }`}
                    />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t">
                <p className="text-sm font-semibold text-gray-900">
                  <span className="text-gray-500">Result:</span> {cycle.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-medium italic">
              "Real wealth is created when you enter at the early stage of a city's development."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
