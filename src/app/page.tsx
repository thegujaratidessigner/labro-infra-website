import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatIsMumbai30 from '@/components/WhatIsMumbai30';
import WhyInvestKSC from '@/components/WhyInvestKSC';
import Projects from '@/components/Projects';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIsMumbai30 />
        <WhyInvestKSC />
        <Projects />
        <TestimonialCarousel />

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Invest in Mumbai 3.0?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about premium land investment opportunities in the KSC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/917506674848"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                WhatsApp Us
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
