import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { OurServices } from '../components/OurServices';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { WhyTrustUs } from '../components/WhyTrustUs';
import { WorkingProcess } from '../components/WorkingProcess';
import { Testimonials } from '../components/Testimonials';
import { FaqSection } from '../components/FaqSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { ContactCTA } from '../components/ContactCTA';

interface HomePageProps {
  openWhatsAppModal: (medName?: string) => void;
  openSearchModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ openWhatsAppModal, openSearchModal }) => {
  return (
    <div className="space-y-0">
      <Hero openWhatsAppModal={openWhatsAppModal} openSearchModal={openSearchModal} />
      <WhyChooseUs />
      <OurServices openWhatsAppModal={openWhatsAppModal} />
      <FeaturedCategories openWhatsAppModal={openWhatsAppModal} />
      <WhyTrustUs />
      <WorkingProcess openWhatsAppModal={openWhatsAppModal} />
      <Testimonials />
      <FaqSection openWhatsAppModal={openWhatsAppModal} />
      <GoogleMapSection />
      <ContactCTA openWhatsAppModal={openWhatsAppModal} />
    </div>
  );
};
