import React from 'react';
import {
  ShieldCheck,
  Heart,
  Award,
  Users,
  Target,
  Compass,
  CheckCircle2,
  Clock,
  Store,
  MessageSquare,
  Quote,
} from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_EVENTS } from '../data/pharmacyData';

interface AboutPageProps {
  openWhatsAppModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openWhatsAppModal }) => {
  return (
    <div className="py-12 bg-white dark:bg-slate-950 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
          About Jagdev Medical Shop
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Serving Shakurabad & Kurtha With Genuine Care
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Over 12 years of steadfast commitment to community wellness, authentic medicines, and compassionate local customer support.
        </p>
      </div>

      {/* Business Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Journey & Business Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Established in 2014 at Shop No. 05, Shakurabad Market, <strong>Jagdev Medical Shop</strong> was founded with a singular purpose: to make genuine, high-quality, and affordable medicines easily accessible to every family in Shakurabad and nearby villages in Bihar.
              </p>
              <p>
                In an era where counterfeit or sub-standard drugs pose serious health hazards, we maintain strict direct procurement policies with certified pharmaceutical manufacturers. From life-saving cardiac and diabetic drugs to daily pediatric care, every product on our shelves is batch-verified.
              </p>
              <p>
                Today, Jagdev Medical Shop is proud to serve over 15,000+ local families, offering instant WhatsApp prescription booking, home delivery support, and 24/7 emergency response.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">100% Genuine</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Sourced from WHO-GMP Plants</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">12+ Years</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Trusted Community Service</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative group">
              <img
                src="/src/assets/images/store_front_view_1785135995853.jpg"
                alt="Jagdev Medical Shop Exterior"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
                <p className="font-bold text-sm text-slate-900 dark:text-white">Store Front View</p>
                <p className="text-xs text-slate-500">Shop No. 05, Shakurabad Market, Bihar 804425</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Mission, Vision & Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              The foundational principles guiding our daily service to patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To safeguard community health in Shakurabad by providing 100% genuine, unadulterated medicines and healthcare products at honest MRP prices.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most reliable, digitally enabled, and patient-first healthcare destination in Jehanabad district, offering zero-delay WhatsApp medicine deliveries.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Uncompromising drug authenticity, empathetic patient communication, cold-chain temperature precision, and absolute transparency in pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 relative overflow-hidden space-y-6">
          <Quote className="w-12 h-12 text-emerald-500/20 absolute top-6 right-6" />

          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800">
              Message From Store Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              "Your Health & Trust Are Our Greatest Responsibility."
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
              When a family comes to Jagdev Medical Shop with a prescription, they place their health and hopes in our hands. We treat every order with extreme care—verifying batch numbers, ensuring cold storage for insulin, and explaining dosage clearly. We are honored to serve Shakurabad.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center">
                JM
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Jagdev Prasad & Team</h3>
                <p className="text-xs text-emerald-400 font-medium">Founder & Registered Pharmacist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Journey & Growth Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            A decade of continuous innovation and community service.
          </p>
        </div>

        <div className="space-y-4 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full sm:w-1/2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs">
                  {event.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{event.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{event.desc}</p>
              </div>

              <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 z-10 shrink-0" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
