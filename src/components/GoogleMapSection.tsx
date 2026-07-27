import React from 'react';
import { MapPin, Navigation, Phone, Clock, Store, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const GoogleMapSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
            Visit Our Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Locate Jagdev Medical Shop
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Centrally situated at Shakurabad Market, Bihar 804425 with easy road access and nearby parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Store Location Details Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    Pharmacy | Medical Store
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Store Address</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Direct Phone / Hotline</h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Opening Hours</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.workingHours.weekdays}</p>
                    <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Right Embedded Map View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 min-h-[350px] shadow-sm relative group">
            <iframe
              title="Jagdev Medical Shop Location Map"
              src={BUSINESS_INFO.googleMapEmbedUrl}
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-md flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              <span>Shakurabad 804425</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
