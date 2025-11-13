
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DocumentsSection from './components/DocumentsSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import AppointmentSection from './components/AppointmentSection';
import LocationSection from './components/LocationSection';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <DocumentsSection />
      <PricingSection />
      <AboutSection />
      <AppointmentSection />
      <LocationSection />
    </main>
  );
}
