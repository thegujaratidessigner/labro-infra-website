'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FileText, Building2, TrendingUp, Road, Timer, CheckCircle, Shield, Scale, Plane, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function GovernmentSupportPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const policyItems = [
    { icon: FileText, title: 'Planned under MMRDA (Government Authority)' },
    { icon: Building2, title: 'Officially declared New Town (KSC Region)' },
    { icon: Road, title: '124 villages (~323 sq. km) under development' },
    { icon: Shield, title: 'Structured master planning & zoning' },
    { icon: Scale, title: 'Policy-driven and regulated growth' },
  ];

  const investmentItems = [
    { icon: TrendingUp, title: '₹4000+ Crore government investment' },
    { icon: Road, title: 'Focus on roads, metro, airport & connectivity' },
    { icon: Building2, title: 'Public–private participation encouraged' },
    { icon: Timer, title: 'Long-term development vision' },
  ];

  const keyPolicies = [
    {
      title: '1. Flexible Land Acquisition Model',
      content: 'The government is not forcing land acquisition. Instead, investors and landowners get multiple options like: Direct purchase, Compensation in FSI / TDR / monetary benefits',
    },
    {
      title: '2. Land Pooling & Return Policy (22.5% Return Model)',
      content: 'Under this policy: Landowners can give land for development, Government returns developed land (around 22.5%)',
    },
    {
      title: '3. Pass-Through Policy (Investor Friendly Cost Model)',
      content: 'Infrastructure cost like: Roads, Utilities, Development cost',
    },
    {
      title: '4. FSI & TDR Benefits',
      content: 'Government is allowing: Additional FSI (Floor Space Index), TDR usage for development',
    },
    {
      title: '5. Foreign Direct Investment (FDI) Promotion',
      content: 'Government is actively attracting global investors: Minimum land requirement (~100 acres) for large projects, Investment benchmark (~₹250Cr+)',
    },
    {
      title: '6. SPV Model (Special Purpose Vehicle)',
      content: 'Government allows: Creation of SPV (Special Purpose Vehicle) for projects',
    },
    {
      title: '7. Infrastructure-Led Development Model',
      content: 'Government will first develop: Roads, Connectivity, Basic infrastructure',
    },
    {
      title: '8. No Immediate Financial Burden on Government',
      content: 'Development is designed with self-sustainable revenue model, MMRDA handles structured funding',
    },
    {
      title: '9. Clear Authority & Planning (MMRDA + NTDA)',
      content: 'Development under: MMRDA, New Town Development Authority (NTDA)',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Government Support
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The government is actively supporting investors through flexible land policies, infrastructure-first development, FSI/TDR benefits, and global investment promotion, making Mumbai 3.0 a structured, low-risk, and high-growth investment opportunity.
              </p>
            </div>

            {/* Strong Policy & Planning Support */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <Shield className="w-10 h-10" />
                Strong Policy & Planning Support
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {policyItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-900">
                    <item.icon className="w-8 h-8 text-blue-900 mb-4" />
                    <p className="font-medium text-gray-900">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure & Investment Push */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-10 h-10" />
                Infrastructure & Investment Push
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {investmentItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="w-8 h-8 text-amber-400 mb-4" />
                    <p className="font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Policies for Investors */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <FileText className="w-10 h-10" />
                Key Policies for Investors
              </h2>
              <div className="space-y-4">
                {keyPolicies.map((policy, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-left">{policy.title}</span>
                      {openAccordion === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-900" />
                      )}
                    </button>
                    {openAccordion === index && (
                      <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
                        <p className="text-gray-700 leading-relaxed">{policy.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ntda.mmrda.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Check GR
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://ntda.mmrda.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Check Notification
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
