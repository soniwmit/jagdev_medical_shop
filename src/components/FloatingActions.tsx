import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, X, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  openWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ openWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 text-[11px] font-bold shadow-xl flex items-center gap-2 animate-bounce">
          <span className="text-[#0A8F6A]">💬</span>
          <span>Need Help? Chat with us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex flex-col items-end space-y-3 pointer-events-auto">
        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          id="floating-call-btn"
          className="w-12 h-12 rounded-full bg-[#0F52BA] text-white shadow-xl hover:scale-110 transition-all flex items-center justify-center border border-blue-400/30 group"
          title="Direct Phone Call: 06200828784"
        >
          <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Call Store</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={openWhatsAppModal}
          id="floating-whatsapp-btn"
          className="relative w-16 h-16 rounded-full bg-[#0A8F6A] text-white shadow-2xl hover:bg-[#07684D] hover:scale-110 transition-all flex items-center justify-center cursor-pointer ring-4 ring-white dark:ring-slate-950 ring-offset-2 ring-offset-slate-100 group"
          title="Send WhatsApp Order"
        >
          <MessageSquare className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[9px] font-bold flex items-center justify-center animate-pulse">
            1
          </span>
        </button>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="sr-only">Back to Top</span>
          </button>
        )}
      </div>
    </div>
  );
};
