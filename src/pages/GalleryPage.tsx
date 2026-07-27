import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryImage } from '../types';
import { X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Products', 'Medical Equipment', 'Customers'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setLightboxImage(GALLERY_IMAGES[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setLightboxImage(GALLERY_IMAGES[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-950 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
          Visual Tour
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Jagdev Medical Store Gallery
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our modern store layout, well-organized medicine shelves, medical devices, and customer counter.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => {
                setLightboxImage(img);
                setZoomLevel(1);
              }}
              className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-emerald-600/90 flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 dark:text-slate-200 shadow-xs">
                  {img.category}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Zoom */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-3xl p-6 overflow-hidden space-y-4 border border-slate-800 shadow-2xl">
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  {lightboxImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{lightboxImage.title}</h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1"
                  title="Toggle Zoom"
                >
                  <ZoomIn className="w-4 h-4 text-emerald-400" />
                  <span>{zoomLevel}x</span>
                </button>

                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Preview Canvas */}
            <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh] rounded-2xl bg-black">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[58vh] w-auto object-contain transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 text-center italic">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
