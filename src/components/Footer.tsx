import React, { useState } from 'react';
import {
  Cross,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  ChevronRight,
  Heart,
  X,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  openWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, openWhatsAppModal }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F52BA] text-white font-black text-xl shadow-md">
                +
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  JAGDEV MEDICAL <span className="text-[#0A8F6A]">SHOP</span>
                </span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pharmacy & Healthcare • Shakurabad</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your trusted community medical store providing 100% genuine medicines, baby products, medical equipment, and 24/7 WhatsApp ordering in Shakurabad & Kurtha.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-emerald-400 font-bold">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <button onClick={openWhatsAppModal} className="hover:text-emerald-400 font-bold text-left">
                  {BUSINESS_INFO.displayWhatsapp} (WhatsApp Order)
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Store' },
                { id: 'services', label: 'Our Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id as PageType)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Pharmacy Categories</h3>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Prescription Medicines</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Baby & Infant Care</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Diabetic & Heart Care</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Digital BP & Glucometers</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Surgical & First Aid Items</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3 h-3 text-emerald-500" /> Health & Protein Supplements</li>
            </ul>
          </div>

          {/* Col 4: Store Hours & Direct Action */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Operating Hours</h3>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Open 7 Days a Week</span>
              </div>
              <p className="text-slate-300">Mon - Sat: 7:00 AM - 10:00 PM</p>
              <p className="text-slate-300">Sunday: 8:00 AM - 8:00 PM</p>
              <p className="text-emerald-400 text-[11px] font-semibold pt-1">
                24/7 Emergency Helpline on Call
              </p>
            </div>

            <button
              onClick={openWhatsAppModal}
              className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#07684D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send WhatsApp Order</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Jagdev Medical Shop. All Rights Reserved. |<a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a></p>

          <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[11px]">
            <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-white transition-colors">
              Medical Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-2 text-white bg-slate-900 px-3 py-1 rounded-full border border-slate-800 font-bold text-[11px]">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open Now</span>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 text-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-4 relative border border-slate-800 shadow-2xl">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-white capitalize">
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'disclaimer' && 'Medical Disclaimer'}
            </h3>

            <div className="text-xs text-slate-300 space-y-2 leading-relaxed max-h-60 overflow-y-auto">
              {modalType === 'privacy' && (
                <p>
                  Jagdev Medical Shop respects your privacy. Any customer details or doctor prescriptions submitted via WhatsApp or web forms are strictly used for order processing and medicine verification. We never share customer phone numbers or medical records with third parties.
                </p>
              )}
              {modalType === 'terms' && (
                <p>
                  All medicine prices at Jagdev Medical Shop comply with official MRP guidelines. Schedule H and Schedule H1 drugs strictly require a valid prescription signed by a registered doctor. Store pickup and local deliveries are subject to stock availability in Shakurabad.
                </p>
              )}
              {modalType === 'disclaimer' && (
                <p>
                  The information provided on this website is for general awareness and product discovery only. It is not intended as medical advice or doctor substitution. Always consult a certified healthcare professional or registered medical practitioner before starting any medication.
                </p>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
