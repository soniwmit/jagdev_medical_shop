import React from 'react';
import { Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface ContactCTAProps {
  openWhatsAppModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ openWhatsAppModal }) => {
  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-900 border border-emerald-700/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold border border-emerald-700">
              <Clock className="w-3.5 h-3.5" /> 24/7 Medicine Availability & Urgent Assistance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Need Genuine Medicines Right Now?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Call us directly or send your doctor prescription slip on WhatsApp. We confirm stock instantly and keep your medicines ready for fast pickup or delivery in Shakurabad.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-lg transition-transform active:scale-95"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call: 06200828784</span>
            </a>

            <button
              onClick={openWhatsAppModal}
              className="px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-emerald-500/25 transition-transform active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
