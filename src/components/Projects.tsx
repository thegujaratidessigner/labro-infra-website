'use client';

import { useState } from 'react';
import { 
  MapPin, 
  FileText, 
  Road, 
  Building2,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import LeadFormPopup from './LeadFormPopup';

export default function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formType, setFormType] = useState<'details' | 'visit'>('details');

  const openPopup = (type: 'details' | 'visit') => {
    setFormType(type);
    setIsPopupOpen(true);
  };

  const projectDetails = [
    { icon: MapPin, label: 'Location', value: 'KSC / Mumbai 3.0 Region, Navi Mumbai Extension' },
    { icon: FileText, label: 'Property Type', value: 'Land / Plot Investment' },
    { icon: CheckCircle, label: 'Ownership', value: 'Clear Title and Verified Documents' },
    { icon: Building2, label: 'Land Use', value: 'Investment / Future Development Potential' },
    { icon: Road, label: 'Connectivity', value: 'Close to Airport, Atal Setu, JNPA and Highways' },
    { icon: Road, label: 'Accessibility', value: 'Well-connected internal and external roads' },
    { icon: TrendingUp, label: 'Development Status', value: 'Early-stage with high growth potential' },
    { icon: Building2, label: 'Infrastructure', value: 'Upcoming metro, roads, industrial and commercial hubs' },
    { icon: TrendingUp, label: 'Investment Type', value: 'Long-term capital appreciation' },
    { icon: MapPin, label: 'Site Visit', value: 'Available on request' },
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Land Investment Opportunities in Mumbai 3.0 / KSC
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your position in the next major growth corridor before prices rise.
            </p>
          </div>

          {/* About */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Labro Infra offers carefully selected land investment opportunities in the KSC region, identified based on infrastructure growth, connectivity, and future development potential.
            </p>
          </div>

          {/* Project Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6">
              <h3 className="text-2xl font-bold">Project Details</h3>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <detail.icon className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                      <p className="font-medium text-gray-900">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openPopup('details')}
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get Project Details
            </button>
            <button
              onClick={() => openPopup('visit')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </section>

      <LeadFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} formType={formType} />
    </>
  );
}
