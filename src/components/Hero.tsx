import React from 'react';
import {
  Phone,
  MessageSquare,
  Navigation,
  ShieldCheck,
  Award,
  Upload,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface HeroProps {
  openWhatsAppModal: () => void;
  openSearchModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openWhatsAppModal, openSearchModal }) => {
  return (
    <section className="relative bg-slate-100 dark:bg-slate-950 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main High-Density Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Banner Box */}
          <div className="lg:col-span-8 bg-[#0F52BA] rounded-3xl p-8 sm:p-10 text-white medical-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 pointer-events-none text-[220px] font-black flex items-center justify-center select-none leading-none">
              ✚
            </div>

            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white border border-white/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Trust of Kurtha & Shakurabad, Bihar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Genuine Medicines & <br className="hidden sm:inline" />
                Expert Healthcare Care
              </h1>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Your local trusted pharmacy providing 100% genuine medicines, surgical supplies, baby products, and medical devices at affordable prices.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={openWhatsAppModal}
                  id="hero-whatsapp-order-btn"
                  className="bg-[#0A8F6A] hover:bg-[#07684D] text-white px-6 py-3 rounded-xl font-bold text-sm medical-shadow-green transition-all flex items-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Prescription</span>
                </button>

                <button
                  onClick={openSearchModal}
                  id="hero-search-medicines-btn"
                  className="bg-white text-[#0F52BA] hover:bg-blue-50 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <Upload className="w-4 h-4 text-[#0F52BA]" />
                  <span>Search Medicines</span>
                </button>
              </div>
            </div>

            {/* Banner Footer Pills */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-blue-100">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> 100% Authentic Drugs</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-300" /> Fast WhatsApp Verification</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-300" /> 12+ Years Local Service</span>
            </div>
          </div>

          {/* Right Column: High Density Quick Order Form & Store Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Quick Order Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-[#0A8F6A]">⚡</span> Quick Order Form
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    Direct WhatsApp
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Order medicines or upload doctor prescription directly to Jagdev Medical Shop.
                </p>
              </div>

              <div className="space-y-3 pt-3">
                <button
                  onClick={openWhatsAppModal}
                  className="w-full bg-[#0F52BA] hover:bg-[#0A3A86] text-white font-bold py-3.5 rounded-xl medical-shadow transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Prescription & Order Form</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0F52BA]" />
                  <span>Direct Call: {BUSINESS_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Store Information Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                Store Location & Hours
              </h3>
              
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#0A8F6A] text-sm shrink-0">📍</span>
                  <span>{BUSINESS_INFO.fullAddress}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#0A8F6A] text-sm shrink-0">🕒</span>
                  <span>Mon - Sat: 07:00 AM - 10:00 PM (Sun 8AM-8PM)</span>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="block bg-slate-100 dark:bg-slate-800 rounded-2xl p-3 text-center border border-slate-200 dark:border-slate-700 hover:border-[#0F52BA] transition-colors"
              >
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Google Maps Location
                </div>
                <div className="text-xs font-bold text-[#0F52BA] dark:text-blue-400 flex items-center justify-center gap-1">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Maps Directions →</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* High Density Metric Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#0F52BA] transition-colors">
            <div className="text-2xl mb-2">💊</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Genuine Drugs</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">100% authentic medicine sourcing</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#0F52BA] transition-colors">
            <div className="text-2xl mb-2">🏥</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Healthcare</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Complete family wellness kits</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#0F52BA] transition-colors">
            <div className="text-2xl mb-2">🧪</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Testing</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">BP & Glucose monitoring devices</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#0F52BA] transition-colors">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Fast Service</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Quick counter response & orders</p>
          </div>
        </div>

      </div>
    </section>
  );
};
