'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import HomeTypesSection from './components/HomeTypesSection';
import InteriorFeaturesSection from './components/InteriorFeaturesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import ContactFormModal from './components/ContactFormModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="text-base antialiased">
      <HeroSection onGetDetailsClick={() => setIsModalOpen(true)} />
      <AboutSection />
      <AmenitiesSection />
      <HomeTypesSection />
      <InteriorFeaturesSection />
      <LocationSection />
      <Footer />
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
