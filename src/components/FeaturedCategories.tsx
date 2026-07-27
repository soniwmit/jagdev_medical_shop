import React, { useState } from 'react';
import {
  Pill,
  Droplet,
  Syringe,
  Activity,
  Dumbbell,
  Zap,
  Sparkles,
  Baby,
  ShieldCheck,
  Crosshair,
  HeartPulse,
  Search,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { FEATURED_CATEGORIES, POPULAR_MEDICINES } from '../data/pharmacyData';

interface FeaturedCategoriesProps {
  openWhatsAppModal: (medicineName?: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ openWhatsAppModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return Pill;
      case 'Droplet':
        return Droplet;
      case 'Syringe':
        return Syringe;
      case 'Activity':
        return Activity;
      case 'Dumbbell':
        return Dumbbell;
      case 'Zap':
        return Zap;
      case 'Sparkles':
        return Sparkles;
      case 'Baby':
        return Baby;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Crosshair':
        return Crosshair;
      case 'HeartPulse':
        return HeartPulse;
      default:
        return Pill;
    }
  };

  const filteredMedicines = POPULAR_MEDICINES.filter((med) => {
    const matchesCat =
      activeCategory === 'all' || med.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesQuery =
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.uses.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-16 bg-white dark:bg-slate-950" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA] dark:text-blue-400 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800">
            Featured Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Explore Medicine & Healthcare Stock
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Browse through our wide index of certified tablets, syrups, health supplements, and medical equipment.
          </p>
        </div>

        {/* 12 Categories Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {FEATURED_CATEGORIES.map((cat) => {
            const IconComp = getCategoryIcon(cat.iconName);
            const isSelected = activeCategory === cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(isSelected ? 'all' : cat.name)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'border-[#0F52BA] bg-blue-50/80 dark:bg-blue-950/60 shadow-md ring-2 ring-blue-500/30'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/80 dark:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 text-[#0F52BA] dark:text-blue-400 flex items-center justify-center shadow-xs">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                    {cat.count.split(' ')[0]}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {cat.popularItems[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Popular Medicine Catalog Search & Quick Inquire */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Frequently Requested Medicines & Equipment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Inquire availability or send prescription via WhatsApp for fast store dispatch.
              </p>
            </div>

            {/* Quick Filter Search Bar */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search medicine, salt, use..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Active Filter Pill */}
          {activeCategory !== 'all' && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Filtered by:</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                {activeCategory}
                <button onClick={() => setActiveCategory('all')} className="ml-1 hover:text-emerald-900">
                  ×
                </button>
              </span>
            </div>
          )}

          {/* Medicines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between hover:border-emerald-500/50 transition-colors shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {med.form}
                    </span>
                    {med.prescriptionRequired ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-1.5 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> Rx Req
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> OTC
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                      {med.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 italic">
                      {med.genericName}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {med.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {med.uses.map((use, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {med.priceEstimate}
                  </span>
                  <button
                    onClick={() => openWhatsAppModal(med.name)}
                    className="py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMedicines.length === 0 && (
            <div className="text-center py-8 space-y-3">
              <p className="text-slate-500 text-sm">
                No matching medicine found in quick catalog. Don't worry! We stock over 5,000+ items.
              </p>
              <button
                onClick={() => openWhatsAppModal(searchQuery || 'Custom Medicine Request')}
                className="py-2.5 px-5 rounded-xl bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Availability on WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
