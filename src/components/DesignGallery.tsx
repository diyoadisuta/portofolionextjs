'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// --- Supabase Storage Base URL ---
const SUPABASE_BASE =
  'https://mvkgunsgbdrejgsxniwm.supabase.co/storage/v1/object/public/PortoBucket/Portofolio';

// --- Category definitions ---
type Category = 'All' | 'Packaging' | 'Label & Etiket' | 'Marketing' | 'Branding';

const CATEGORIES: { name: Category; icon: string; color: string }[] = [
  { name: 'All', icon: '✦', color: 'from-purple-500 to-pink-500' },
  { name: 'Packaging', icon: '📦', color: 'from-blue-500 to-cyan-500' },
  { name: 'Label & Etiket', icon: '🏷️', color: 'from-amber-500 to-orange-500' },
  { name: 'Marketing', icon: '📄', color: 'from-emerald-500 to-teal-500' },
  { name: 'Branding', icon: '🎨', color: 'from-violet-500 to-purple-500' },
];

// --- Gallery items data ---
interface GalleryItem {
  name: string;
  filename: string;
  category: Category;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Packaging
  { name: 'Box Parfum Ascentry', filename: 'Box Parfum Ascentry.webp', category: 'Packaging' },
  { name: 'Box Rice J-Chicken', filename: 'Box Rice J-Chicken.webp', category: 'Packaging' },
  { name: 'Dus Bebefinn Anchovy Chips', filename: 'Dus Bebefinn Anchovy Chips Original.webp', category: 'Packaging' },
  { name: 'Dus Bodhi Tree Roll On', filename: 'Dus Bodhi Tree Roll On (Breath Easy).webp', category: 'Packaging' },
  { name: 'Dus Display Hokiku Jelly Powder', filename: 'Dus Display Hokiku Jelly Powder.webp', category: 'Packaging' },
  { name: 'Dus Kurma Sukari Al Qosim', filename: 'Dus Kurma Sukari Al Qosim 500gr.webp', category: 'Packaging' },
  { name: 'Dus Maeverse Facial Wash', filename: 'Dus Maeverse Facial Wash.webp', category: 'Packaging' },
  { name: 'Dus Makanan Trillium Ballroom', filename: 'Dus Makanan Trillium Ballroom (Kecil).webp', category: 'Packaging' },
  { name: 'Dus Nasi Alizzah', filename: 'Dus Nasi Alizzah.webp', category: 'Packaging' },
  { name: 'Dus Serum Vit C', filename: 'Dus Serum Vit C.webp', category: 'Packaging' },
  { name: 'Dus Starinc Collastar Mixed Fruit', filename: 'Dus Starinc Collastar Mixed Fruit.webp', category: 'Packaging' },
  { name: 'Dus TSSCO Coconut Creme', filename: 'Dus TSSCO 5 Varian (Coconut Creme).webp', category: 'Packaging' },

  // Label & Etiket
  { name: 'Etiket Angker Filter Black', filename: 'Etiket Angker Filter Black.webp', category: 'Label & Etiket' },
  { name: 'Etiket Marbol Filter Black', filename: 'Etiket Marbol Filter Black (Gold).webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok Aslah Hitam', filename: 'Etiket Rokok Aslah Hitam isi 20.webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok Ballveer Black', filename: 'Etiket Rokok Ballveer Black Series.webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok STU Metalize', filename: 'Etiket Rokok STU Metalize.webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok San Marino', filename: 'Etiket Rokok San Marino.webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok Smith Semangka', filename: 'Etiket Rokok Smith Semangka.webp', category: 'Label & Etiket' },
  { name: 'Etiket Rokok ZA Bold', filename: 'Etiket Rokok ZA Bold (LEM).webp', category: 'Label & Etiket' },
  { name: 'Label Manna Snack Tahu', filename: 'Label Manna Snack (Tahu).webp', category: 'Label & Etiket' },
  { name: 'TWC Classic Salmon DNA Natural', filename: 'TWC CLASSIC SALMON DNA NATURAL.webp', category: 'Label & Etiket' },

  // Marketing
  { name: 'Flyer Trifold Moorlife', filename: 'Flyer Trifold Moorlife.webp', category: 'Marketing' },
  { name: 'Flyer HarvestLink (Depan)', filename: 'FlyerHarvestLink_depan.webp', category: 'Marketing' },
  { name: 'Flyer HarvestLink (Belakang)', filename: 'FlyerHarvestLink_Belakang.webp', category: 'Marketing' },
  { name: 'Amplop Eid Mubarak Pegasus', filename: 'Amplop Eid Mubarak Pegasus.webp', category: 'Marketing' },

  // Branding
  { name: 'Amplop Klinik Utama Spektrum', filename: 'Amplop Klinik Utama Spektrum.webp', category: 'Branding' },
  { name: 'Hang Tag 22018', filename: 'HANG TAG 22018.webp', category: 'Branding' },
  { name: 'Map Rekam Medis', filename: 'Map Rekam Medis.webp', category: 'Branding' },
];

function getImageUrl(filename: string): string {
  return `${SUPABASE_BASE}/${encodeURIComponent(filename)}`;
}

// --- Chevron icons for lightbox navigation ---
function ChevronLeftIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export default function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});

  // Filtered items
  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Category counts
  const getCategoryCount = (cat: Category) =>
    cat === 'All' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === cat).length;

  // Image load handler
  const handleImageLoad = useCallback((filename: string) => {
    setImageLoadStates((prev) => ({ ...prev, [filename]: true }));
  }, []);

  // Lightbox navigation
  const lightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      className="py-32 md:py-40 px-6 lg:px-8 bg-slate-950/60 relative overflow-hidden scroll-mt-32"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-600/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
            <span className="text-sm">🖨️</span>
            <span className="text-xs font-bold tracking-wider uppercase text-pink-300">
              Prepress & Design Works
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            Design Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated collection of packaging designs, label creations, and branding projects crafted during my prepress career.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.name;
            const count = getCategoryCount(cat.name);
            return (
              <motion.button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg shadow-purple-500/20`
                    : 'bg-slate-800/40 text-gray-400 border-slate-700 hover:text-white hover:border-slate-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{cat.icon}</span>
                {cat.name}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-700/60 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.filename}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="gallery-item group cursor-pointer relative rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-500 shadow-xl"
                onClick={() => setLightboxIndex(index)}
              >
                {/* Skeleton loader */}
                {!imageLoadStates[item.filename] && (
                  <div className="absolute inset-0 bg-slate-800 animate-pulse z-10 rounded-2xl" />
                )}

                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image
                    src={getImageUrl(item.filename)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoadStates[item.filename] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(item.filename)}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-2.5 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase tracking-widest rounded-lg mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-base leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>

                {/* Gradient top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Items count badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
            Showing {filteredItems.length} of {GALLERY_ITEMS.length} design works
          </span>
        </motion.div>
      </div>

      {/* ===== Lightbox Modal ===== */}
      <AnimatePresence>
        {lightboxItem && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-slate-950/92 backdrop-blur-xl z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center border border-white/10 transition-colors z-50 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Navigation: Previous */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-white flex items-center justify-center border border-white/10 transition-all z-50 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Image"
            >
              <ChevronLeftIcon />
            </motion.button>

            {/* Navigation: Next */}
            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/60 hover:bg-slate-700/80 text-white flex items-center justify-center border border-white/10 transition-all z-50 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Image"
            >
              <ChevronRightIcon />
            </motion.button>

            {/* Image content */}
            <motion.div
              className="relative max-w-5xl w-full mx-4 md:mx-8"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
                  <Image
                    src={getImageUrl(lightboxItem.filename)}
                    alt={lightboxItem.name}
                    fill
                    sizes="(max-width: 1024px) 95vw, 80vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Image info bar */}
              <motion.div
                className="mt-4 flex items-center justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {lightboxItem.name}
                  </h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-purple-500/15 border border-purple-500/25 text-purple-300 text-[11px] font-bold uppercase tracking-widest rounded-lg">
                    {lightboxItem.category}
                  </span>
                </div>
                <span className="text-sm text-slate-500 font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
