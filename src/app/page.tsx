'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import DesignGallery from '@/components/DesignGallery';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <DesignGallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
