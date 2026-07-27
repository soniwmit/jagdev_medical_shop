import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Cross,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  openWhatsAppModal: () => void;
  openSearchModal: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  openWhatsAppModal,
  openSearchModal,
  darkMode,
  setDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0A3A86] text-blue-50 text-xs py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-blue-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Open Today: 7:00 AM - 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> 100% Genuine Medicines
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="font-bold hover:underline flex items-center gap-1 bg-blue-900/60 px-2 py-0.5 rounded text-white border border-blue-400/30"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-slate-200/80 dark:border-slate-800 py-2.5'
            : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F52BA] text-white font-black text-2xl shadow-md group-hover:scale-105 transition-transform duration-200">
              +
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#0A8F6A] rounded-full border-2 border-white dark:border-slate-950 animate-ping" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#0A8F6A] rounded-full border-2 border-white dark:border-slate-950" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold tracking-tight text-[#0F52BA] dark:text-blue-400 font-sans group-hover:text-blue-700 transition-colors">
                  JAGDEV MEDICAL
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  SHOP
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[210px] sm:max-w-none">
                Pharmacy & Healthcare • Shakurabad, Bihar
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-[#0F52BA] dark:text-blue-400 shadow-xs border border-blue-100 dark:border-blue-900'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0F52BA] dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Medicine Search Trigger */}
            <button
              onClick={openSearchModal}
              id="header-search-btn"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative group border border-slate-200 dark:border-slate-800"
              title="Search Medicines"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search Medicines</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="theme-toggle-btn"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              <span className="sr-only">Toggle Theme</span>
            </button>

            {/* Call Button (Desktop & Mobile) */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="header-call-btn"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <span className="text-[#0F52BA]">📞</span>
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              onClick={openWhatsAppModal}
              id="header-whatsapp-btn"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#0A8F6A] hover:bg-[#07684D] text-white font-bold text-xs sm:text-sm medical-shadow-green transition-all transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden xs:inline">WhatsApp Order</span>
              <span className="xs:hidden">Order</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-btn"
              className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-900 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send WhatsApp Order / Prescription</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Store Directly ({BUSINESS_INFO.displayPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
