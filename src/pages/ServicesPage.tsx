import React, { useState } from 'react';
import {
  FileText,
  Pill,
  Baby,
  Sparkles,
  HeartPulse,
  Activity,
  Crosshair,
  Zap,
  Shield,
  MessageSquare,
  CheckCircle2,
  Search,
  Phone,
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/pharmacyData';

interface ServicesPageProps {
  openWhatsAppModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openWhatsAppModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_LIST.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.highlights.some((h) => h.toLowerCase().includes(q))
    );
  });

  return (
    <div className="py-12 bg-white dark:bg-slate-950 space-y-12">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
          Complete Healthcare Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
          Explore dedicated healthcare categories offered at Jagdev Medical Shop with instant WhatsApp stock confirmation.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative pt-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
          <input
            type="text"
            placeholder="Search service, e.g. Baby care, BP Monitor, Surgical..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
          />
        </div>
      </div>

      {/* Services Cards List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {service.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">In Stock</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Service Highlights
                  </h3>
                  <ul className="space-y-1.5">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <button
                  onClick={() => openWhatsAppModal(service.title)}
                  className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
