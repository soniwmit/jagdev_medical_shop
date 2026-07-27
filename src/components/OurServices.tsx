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
  X,
  ChevronRight,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/pharmacyData';
import { ServiceItem } from '../types';

interface OurServicesProps {
  openWhatsAppModal: (initialMedicine?: string) => void;
}

export const OurServices: React.FC<OurServicesProps> = ({ openWhatsAppModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return FileText;
      case 'Pill':
        return Pill;
      case 'Zap':
        return Zap;
      case 'Baby':
        return Baby;
      case 'Sparkles':
        return Sparkles;
      case 'HeartPulse':
        return HeartPulse;
      case 'Activity':
        return Activity;
      case 'Crosshair':
        return Crosshair;
      case 'Shield':
        return Shield;
      case 'MessageSquare':
      default:
        return MessageSquare;
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA] dark:text-blue-400 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800">
            Healthcare Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Comprehensive Pharmacy Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            From critical prescription drugs and cold-chain insulin to infant care and digital health monitors, Jagdev Medical Shop covers all your health essentials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => {
            const IconComp = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openWhatsAppModal(service.title)}
                    className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                {selectedService.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Highlights & Guarantees
              </h4>
              <ul className="space-y-2">
                {selectedService.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  openWhatsAppModal(title);
                }}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order / Inquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
