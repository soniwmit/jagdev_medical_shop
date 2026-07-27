import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/pharmacyData';

export const Testimonials: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number>(0);

  const displayedTestimonials = filterRating === 0
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.rating === filterRating);

  return (
    <section className="py-16 bg-white dark:bg-slate-950" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our Local Customers Say
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Trusted by patients, doctors, and families across Shakurabad, Kurtha, and nearby villages.
          </p>

          {/* Rating Summary Badge */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white text-lg">4.9 out of 5</span>
            <span className="text-xs text-slate-500 font-medium">(180+ Verified Google Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Local Customer
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location} • {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
