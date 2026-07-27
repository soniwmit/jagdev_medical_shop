import React, { useState } from 'react';
import { Search, X, Pill, AlertCircle, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { POPULAR_MEDICINES, FEATURED_CATEGORIES } from '../data/pharmacyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  openWhatsAppModal: (medName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, openWhatsAppModal }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = POPULAR_MEDICINES.filter((m) => {
    const q = query.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.genericName.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.uses.some((u) => u.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Search Medicine Index
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Search by brand name, active salt, category, or symptoms (e.g. Dolo, Fever, Cough, BP, Insulin).
          </p>
        </div>

        {/* Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            autoFocus
            placeholder="Type medicine name or health symptom..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F52BA]"
          />
        </div>

        {/* Quick Category Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[11px] font-bold text-slate-400 self-center">Popular:</span>
          {['Fever', 'Cough', 'Acidity', 'Diabetes', 'Vitamins', 'Baby Care'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-[#0F52BA] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="space-y-3 pt-2">
          {results.map((med) => (
            <div
              key={med.id}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between gap-4 hover:border-[#0F52BA]/50 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{med.name}</h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                    {med.form}
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic">{med.genericName}</p>
                <div className="flex items-center gap-2 text-xs text-[#0A8F6A] font-bold">
                  <span>{med.priceEstimate}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  openWhatsAppModal(med.name);
                }}
                className="py-2 px-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#07684D] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order</span>
              </button>
            </div>
          ))}

          {query && results.length === 0 && (
            <div className="p-6 text-center space-y-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                "{query}" is not in quick index, but we have full stock at Jagdev Medical Shop!
              </p>
              <button
                onClick={() => {
                  onClose();
                  openWhatsAppModal(query);
                }}
                className="py-2.5 px-5 rounded-xl bg-[#0A8F6A] hover:bg-[#07684D] text-white font-bold text-xs inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire "{query}" on WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
