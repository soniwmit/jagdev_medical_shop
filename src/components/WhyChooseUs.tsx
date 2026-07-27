import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Tag,
  Zap,
  FileText,
  HeartPulse,
  Award,
  MessageSquare,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: '100% Genuine Medicines',
      desc: 'All medicines sourced directly from WHO-GMP certified manufacturers and authorized distributors with valid batch details.',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800',
    },
    {
      title: 'Experienced Staff',
      desc: 'Our registered pharmacists guide you on dosage, timing, precautions, and dietary recommendations for optimum health.',
      icon: UserCheck,
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/80 border-blue-200 dark:border-blue-800',
    },
    {
      title: 'Affordable Prices',
      desc: 'Fair pricing at standard government MRP rates, transparent billing, and special discounts on generic healthcare ranges.',
      icon: Tag,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/80 border-amber-200 dark:border-amber-800',
    },
    {
      title: 'Fast Service',
      desc: 'Quick medicine dispensing, pre-packed store pickup, and prompt assistance for emergency medical requirements.',
      icon: Zap,
      color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800',
    },
    {
      title: 'Prescription Medicines',
      desc: 'Comprehensive stock of cardiac, diabetic, antibiotic, neurological, and pediatric prescription pharmaceuticals.',
      icon: FileText,
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/80 border-purple-200 dark:border-purple-800',
    },
    {
      title: 'Healthcare Products',
      desc: 'Wide range of medical devices, digital BP monitors, glucometer strips, oximeters, nebulizers, and orthopedic braces.',
      icon: HeartPulse,
      color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/80 border-teal-200 dark:border-teal-800',
    },
    {
      title: 'Trusted Local Pharmacy',
      desc: 'Over 12 years of devoted service in Shakurabad & Kurtha area serving over 15,000+ satisfied families.',
      icon: Award,
      color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200 dark:border-indigo-800',
    },
    {
      title: 'Easy WhatsApp Support',
      desc: 'Convenient prescription upload, stock inquiry, and order booking through our dedicated WhatsApp hotline 06200828784.',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
            Why Choose Jagdev Medical
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Premium Pharmacy Partner in Shakurabad
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            We combine high-grade medicine authenticity with compassionate local service and modern WhatsApp ordering convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
