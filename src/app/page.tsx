import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatIsMumbai30 from '@/components/WhatIsMumbai30';
import GrowthCycle from '@/components/GrowthCycle';
import WhyInvestKSC from '@/components/WhyInvestKSC';
import GovernmentSupport from '@/components/GovernmentSupport';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIsMumbai30 />
        <GrowthCycle />
        <WhyInvestKSC />
        <GovernmentSupport />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
