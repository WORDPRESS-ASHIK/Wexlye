import React from 'react';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { AboutSection } from '../components/AboutSection';
import { CaseStudies } from '../components/CaseStudies';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="homepage-view">
      <Hero />
      <ClientLogos />
      <AboutSection />
      <CaseStudies />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
};
