import React from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Tag,
  Users,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const WhyTrustUs: React.FC = () => {
  const trustPillars = [
    {
      title: 'Experienced Pharmacy',
      desc: '12+ years of healthcare experience with dedicated registered pharmacists providing trusted advice.',
      icon: Award,
    },
    {
      title: 'Quality Medicines',
      desc: 'Strict procurement standards ensuring 100% genuine WHO-GMP certified pharmaceuticals.',
      icon: CheckCircle2,
    },
    {
      title: 'Quick Service',
      desc: 'Fast billing, instant prescription checks on WhatsApp, and zero waiting time store pickup.',
      icon: Clock,
    },
    {
      title: 'Friendly Staff',
      desc: 'Courteous, empathetic local team always ready to help elderlies and families with care.',
      icon: Heart,
    },
    {
      title: 'Reasonable Pricing',
      desc: 'Transparent pricing at official government MRP rates with genuine bill receipts.',
      icon: Tag,
    },
    {
      title: 'Convenient Location',
      desc: 'Centrally located at Shop No. 05, Shakurabad Market with ample parking and easy access.',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-950 text-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Summary */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-700">
              Community Trust & Quality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Why Customers Trust Jagdev Medical Shop
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              We take pride in being Shakurabad & Kurtha’s most dependable healthcare store. Our commitment to authentic medicine quality and patient care has earned us over 15,000+ satisfied local customers.
            </p>

            {/* Live Stats Row */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-800/80">
              <div className="p-4 rounded-2xl bg-emerald-800/40 border border-emerald-700/60">
                <p className="text-3xl font-extrabold text-emerald-300">{BUSINESS_INFO.stats.happyCustomers}</p>
                <p className="text-xs text-emerald-200 mt-1">Satisfied Patients</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-800/40 border border-emerald-700/60">
                <p className="text-3xl font-extrabold text-emerald-300">{BUSINESS_INFO.stats.googleRating}</p>
                <p className="text-xs text-emerald-200 mt-1">Google Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Trust Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-emerald-800/30 border border-emerald-700/50 hover:bg-emerald-800/50 transition-colors backdrop-blur-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-700/80 text-emerald-200 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
