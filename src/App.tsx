import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { SeoMeta } from './components/SeoMeta';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { SearchModal } from './components/SearchModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [initialMedicine, setInitialMedicine] = useState<string>('');

  // Global SPA page tracking
  useTracker(currentPage);

  // Handle Dark Mode toggling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const openWhatsAppModal = (medName: string = '') => {
    setInitialMedicine(medName);
    setWhatsAppModalOpen(true);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage openWhatsAppModal={openWhatsAppModal} openSearchModal={openSearchModal} />;
      case 'about':
        return <AboutPage openWhatsAppModal={openWhatsAppModal} />;
      case 'services':
        return <ServicesPage openWhatsAppModal={openWhatsAppModal} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage openWhatsAppModal={openWhatsAppModal} />;
      default:
        return <HomePage openWhatsAppModal={openWhatsAppModal} openSearchModal={openSearchModal} />;
    }
  };

  const getSeoTitle = () => {
    switch (currentPage) {
      case 'home':
        return 'Jagdev Medical Shop | Pharmacy & Medical Store in Shakurabad, Bihar';
      case 'about':
        return 'About Us | Jagdev Medical Shop Shakurabad';
      case 'services':
        return 'Healthcare Services & Medicines | Jagdev Medical Shop';
      case 'gallery':
        return 'Store Photos & Gallery | Jagdev Medical Shop';
      case 'contact':
        return 'Contact Us & Location | Jagdev Medical Shop Shakurabad';
      default:
        return 'Jagdev Medical Shop | Shakurabad, Bihar';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* Dynamic SEO Meta & JSON-LD Schema */}
      <SeoMeta title={getSeoTitle()} currentPage={currentPage} />

      <div>
        {/* Navigation Header */}
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          openWhatsAppModal={openWhatsAppModal}
          openSearchModal={openSearchModal}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Breadcrumb Bar */}
        <Breadcrumbs currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Page Content */}
        <main className="w-full">{renderPage()}</main>
      </div>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} openWhatsAppModal={openWhatsAppModal} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions openWhatsAppModal={openWhatsAppModal} />

      {/* WhatsApp Order Form Modal */}
      <WhatsAppOrderModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        initialMedicineName={initialMedicine}
      />

      {/* Search Medicine Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        openWhatsAppModal={openWhatsAppModal}
      />
    </div>
  );
}
