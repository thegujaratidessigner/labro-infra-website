import { Target, Search, BarChart3, Handshake, MapPin, CheckCircle, Quote } from 'lucide-react';

export default function About() {
  const approachItems = [
    { icon: Search, title: 'Early-stage opportunity identification' },
    { icon: CheckCircle, title: 'Thorough due diligence' },
    { icon: BarChart3, title: 'Data-backed investment insights' },
    { icon: Handshake, title: 'Transparent and client-focused service' },
  ];

  const whatWeDoItems = [
    { icon: MapPin, title: 'Land investment in high-growth zones' },
    { icon: Target, title: 'Mumbai 3.0 / KSC focused opportunities' },
    { icon: Search, title: 'Site visits and ground-level insights' },
    { icon: Handshake, title: 'End-to-end investment assistance' },
  ];

  const whyChooseItems = [
    'Strong on-ground presence',
    'Early access to strategic locations',
    'Verified and transparent deals',
    'ROI-focused investment approach',
  ];

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      location: 'Navi Mumbai',
      quote: 'Labro Infra explained the KSC opportunity very clearly. Their team gave us proper guidance, site insights, and confidence before making a decision.',
    },
    {
      name: 'Amit Shah',
      location: 'Mumbai',
      quote: 'The best part was transparency. They helped us understand the future potential of Mumbai 3.0 without overpromising anything.',
    },
    {
      name: 'Priya Desai',
      location: 'Pune',
      quote: 'We were looking for long-term land investment and Labro Infra helped us identify the right growth corridor with proper documentation support.',
    },
    {
      name: 'Nilesh Patel',
      location: 'Ahmedabad',
      quote: 'Their knowledge about infrastructure development and upcoming connectivity around KSC is very strong. Professional and reliable team.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <blockquote className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Quote className="w-8 h-8 text-amber-400 mx-auto mb-4" />
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
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Our Approach</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {approachItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <item.icon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                <p className="font-medium text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">What We Do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {whatWeDoItems.map((item, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-6 text-center hover:border-blue-300 transition-colors">
                <item.icon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                <p className="font-medium text-gray-900">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To become a trusted name in real estate by helping investors identify future growth corridors and build long-term wealth through smart land investments.
            </p>
          </div>
        </div>

        {/* Why Choose Labro Infra */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Why Choose Labro Infra</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
