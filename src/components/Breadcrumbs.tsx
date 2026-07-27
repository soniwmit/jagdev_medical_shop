import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageType } from '../types';

interface BreadcrumbsProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, setCurrentPage }) => {
  if (currentPage === 'home') return null;

  const getPageTitle = (page: PageType) => {
    switch (page) {
      case 'about':
        return 'About Us';
      case 'services':
        return 'Our Services';
      case 'gallery':
        return 'Store Gallery';
      case 'contact':
        return 'Contact Us';
      case 'order':
        return 'WhatsApp Order';
      default:
        return 'Page';
    }
  };

  return (
    <nav className="bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 py-3 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-slate-600 dark:text-slate-400 font-medium">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        <span className="font-bold text-slate-900 dark:text-white">
          {getPageTitle(currentPage)}
        </span>
      </div>
    </nav>
  );
};
