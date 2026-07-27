import React from 'react';
import {
  Store,
  FileUp,
  PackageCheck,
  CreditCard,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

interface WorkingProcessProps {
  openWhatsAppModal: () => void;
}

export const WorkingProcess: React.FC<WorkingProcessProps> = ({ openWhatsAppModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Visit Store or Contact',
      desc: 'Walk into our store at Shakurabad Market or message us directly on WhatsApp/Phone.',
      icon: Store,
    },
    {
      step: '02',
      title: 'Share Prescription',
      desc: 'Upload a picture of doctor prescription slip or list the medicine names required.',
      icon: FileUp,
    },
    {
      step: '03',
      title: 'Get Medicines',
      desc: 'Our registered pharmacist verifies stock, checks expiry dates, and packs your order.',
      icon: PackageCheck,
    },
    {
      step: '04',
      title: 'Easy Payment',
      desc: 'Pay easily via Cash, PhonePe, Google Pay, or Card upon store pickup or delivery.',
      icon: CreditCard,
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Simple 4-Step Medicine Ordering Process
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Ordering genuine medicines from Jagdev Medical Shop is fast, transparent, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 dark:text-slate-800">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-slate-700">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={openWhatsAppModal}
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center gap-2.5 shadow-md shadow-emerald-600/20 transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Start WhatsApp Order Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};
