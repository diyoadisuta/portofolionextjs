'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

// --- Language Color Map ---
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C#': '#178600',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  Shell: '#89e051',
};

// --- Language Icon SVG Paths ---
function LanguageIcon({ language }: { language: string | null }) {
  if (!language) {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    );
  }
  return (
    <span
      className="w-3 h-3 rounded-full inline-block shadow-sm"
      style={{
        backgroundColor: LANGUAGE_COLORS[language] || '#8b8b8b',
        boxShadow: `0 0 8px ${LANGUAGE_COLORS[language] || '#8b8b8b'}40`,
      }}
    />
  );
}

// --- Star SVG ---
function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
    </svg>
  );
}

// --- Fork SVG ---
function ForkIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}

// --- External Link SVG ---
function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// --- GitHub SVG ---
function GitHubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  homepage: string | null;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  size: number;
  customCategory?: string;
  featured?: boolean;
}

// --- Custom metadata mapping to highlight Informatics Engineering skills ---
interface CustomRepoMetadata {
  titleOverride?: string;
  descriptionOverride?: string;
  topicsOverride?: string[];
  customCategory?: string;
  featured?: boolean;
}

const REPO_METADATA: Record<string, CustomRepoMetadata> = {
  SistemInformasiGadaiBiru: {
    titleOverride: 'Gadai Biru Enterprise System',
    descriptionOverride: 'Sistem informasi pergadaian komprehensif berbasis web dengan pelacakan transaksi keuangan real-time, neraca saldo otomatis, dan kontrol akses berotoritas.',
    topicsOverride: ['Next.js', 'TypeScript', 'TailwindCSS', 'Finance System', 'PostgreSQL'],
    customCategory: '💻 Featured Web App',
    featured: true,
  },
  'scale-pos': {
    titleOverride: 'Scale Point of Sale',
    descriptionOverride: 'Aplikasi kasir (POS) multi-cabang berkinerja tinggi. Dirancang dengan state management modular untuk proses checkout secepat kilat dan manajemen stok dinamis.',
    topicsOverride: ['React', 'TypeScript', 'Next.js', 'State Management', 'POS System'],
    customCategory: '🛍️ Featured POS',
    featured: true,
  },
  univpos: {
    titleOverride: 'UnivPOS Management',
    descriptionOverride: 'Platform kasir ritel mandiri yang disesuaikan untuk manajemen merchant kampus, lengkap dengan riwayat penjualan harian dan alert restock produk.',
    topicsOverride: ['Next.js', 'TypeScript', 'TailwindCSS', 'Database Management'],
    customCategory: '🛍️ Business App',
    featured: true,
  },
  Moodiometry: {
    titleOverride: 'Moodiometry Android App',
    descriptionOverride: 'Aplikasi pelacak emosi/kesehatan mental cerdas (Bangkit Academy 2024 Capstone Project) yang dibuat dengan Kotlin, terintegrasi API prediksi Machine Learning.',
    topicsOverride: ['Kotlin', 'Android SDK', 'Bangkit Capstone', 'ML Integration'],
    customCategory: '📱 Mobile & AI',
    featured: true,
  },
  TaskWise: {
    titleOverride: 'TaskWise Board',
    descriptionOverride: 'Sistem manajemen tugas interaktif bertipe SaaS, memudahkan kolaborasi workflow developer dengan drag-and-drop board yang responsif.',
    topicsOverride: ['TypeScript', 'Next.js', 'Drag-and-Drop', 'Productivity'],
    customCategory: '📝 SaaS App',
    featured: false,
  },
  VirgiGames: {
    titleOverride: 'VirgiGames Hub',
    descriptionOverride: 'Pusat eksplorasi dan basis data game interaktif dengan filter multi-kategori dan antarmuka dinamis modern.',
    topicsOverride: ['JavaScript', 'HTML5', 'Game Database', 'Frontend Dev'],
    customCategory: '🎮 Web Project',
    featured: false,
  },
  CNN_PengenalanGambar: {
    titleOverride: 'Image Classifier (CNN)',
    descriptionOverride: 'Model Computer Vision menggunakan Convolutional Neural Networks untuk ekstraksi fitur dan klasifikasi objek presisi tinggi.',
    topicsOverride: ['Python', 'Jupyter Notebook', 'TensorFlow', 'Deep Learning'],
    customCategory: '🧠 Deep Learning',
    featured: false,
  },
  CNN_TextClassification: {
    titleOverride: 'Text Classifier (NLP)',
    descriptionOverride: 'Model pemrosesan bahasa alami (NLP) berbasis jaringan saraf tiruan untuk mengkategorikan teks dan memprediksi sentimen opini.',
    topicsOverride: ['Python', 'NLP', 'TensorFlow', 'AI Modelling'],
    customCategory: '🧠 NLP / AI',
    featured: false,
  },
  'K-Mean_Clustering': {
    titleOverride: 'K-Means Customer Segment',
    descriptionOverride: 'Analisis segmentasi audiens tak terarah (unsupervised learning) menggunakan K-Means Clustering untuk profiling demografi bisnis.',
    topicsOverride: ['Python', 'Jupyter Notebook', 'Scikit-Learn', 'Data Analytics'],
    customCategory: '📊 Data Science',
    featured: false,
  },
};

// --- Time Ago Helper ---
function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? 's' : ''} ago`;
}

// --- Format Repo Size ---
function formatSize(sizeKB: number): string {
  if (sizeKB < 1024) return `${sizeKB} KB`;
  return `${(sizeKB / 1024).toFixed(1)} MB`;
}

export default function Portfolio() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Fetch repos from our API route
  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/github');
      if (!res.ok) throw new Error('Failed to fetch');
      const data: GitHubRepo[] = await res.json();

      // Merge and enrich data with custom metadata
      const enrichedRepos = data.map((repo) => {
        const customMeta = REPO_METADATA[repo.name];
        if (customMeta) {
          return {
            ...repo,
            name: customMeta.titleOverride || repo.name,
            description: customMeta.descriptionOverride || repo.description,
            topics: customMeta.topicsOverride || repo.topics,
            customCategory: customMeta.customCategory,
            featured: customMeta.featured || false,
          };
        }
        return {
          ...repo,
          featured: false,
        };
      });

      // Sort: Featured items first, then by push date
      const sortedRepos = enrichedRepos.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
      });

      setRepos(sortedRepos);
    } catch {
      setError('Unable to load repositories. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  // Extract unique languages for filter tabs
  const languages = ['All', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))];

  // Filtered repos
  const filteredRepos =
    selectedFilter === 'All' ? repos : repos.filter((r) => r.language === selectedFilter);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedRepo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="portfolio"
      className="py-32 md:py-40 px-6 lg:px-8 bg-slate-900/40 relative overflow-hidden scroll-mt-32"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <GitHubIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-purple-300">
              Live from GitHub
            </span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            Portfolio Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My open-source projects and repositories, synced directly from GitHub in real-time.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
          >
            {languages.map((lang) => {
              const isActive = selectedFilter === lang;
              const count =
                lang === 'All'
                  ? repos.length
                  : repos.filter((r) => r.language === lang).length;
              return (
                <motion.button
                  key={lang}
                  onClick={() => setSelectedFilter(lang)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/20'
                      : 'bg-slate-800/40 text-gray-400 border-slate-700 hover:text-white hover:border-slate-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang !== 'All' && <LanguageIcon language={lang} />}
                  {lang}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-700/60 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-2xl glass-panel border border-white/5 p-6 animate-pulse"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50" />
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-slate-700/50 rounded mb-2" />
                    <div className="h-3 w-20 bg-slate-800/50 rounded" />
                  </div>
                </div>
                <div className="h-3 w-full bg-slate-800/50 rounded mb-2" />
                <div className="h-3 w-3/4 bg-slate-800/50 rounded mb-6" />
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-slate-800/50 rounded-md" />
                  <div className="h-5 w-16 bg-slate-800/50 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg mb-4">{error}</p>
            <motion.button
              onClick={fetchRepos}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
          </motion.div>
        )}

        {/* Repository Cards Grid */}
        {!loading && !error && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedRepo(repo)}
                  onMouseEnter={() => setHoveredId(repo.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group cursor-pointer relative rounded-2xl glass-panel border shadow-xl hover:border-purple-500/40 transition-all duration-500 overflow-hidden ${
                    repo.featured ? 'border-purple-500/25 bg-slate-900/50' : 'border-white/5'
                  }`}
                >
                  {/* Gradient top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${LANGUAGE_COLORS[repo.language || ''] || '#a855f7'}, #ec4899)`,
                    }}
                  />

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at ${
                        hoveredId === repo.id ? '50% 0%' : '50% 50%'
                      }, ${LANGUAGE_COLORS[repo.language || ''] || '#a855f7'}08, transparent 40%)`,
                    }}
                  />

                  <div className="relative p-6">
                    {/* Header: Icon + Name + Links */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${LANGUAGE_COLORS[repo.language || ''] || '#a855f7'}20, ${LANGUAGE_COLORS[repo.language || ''] || '#a855f7'}05)`,
                          }}
                        >
                          <GitHubIcon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          {repo.customCategory && (
                            <div className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 mb-1">
                              {repo.customCategory}
                            </div>
                          )}
                          <h3 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300 leading-tight">
                            {repo.name}
                          </h3>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {repo.fullName}
                          </span>
                        </div>
                      </div>

                      {/* External links */}
                      <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-purple-500/30 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5"
                            title="Live Demo"
                          >
                            <ExternalLinkIcon />
                          </a>
                        )}
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-purple-500/30 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5"
                          title="View Source"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {repo.description || 'No description provided.'}
                    </p>

                    {/* Topics */}
                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/15 rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer: Language + Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                      {/* Language */}
                      <div className="flex items-center gap-2">
                        {repo.language && (
                          <>
                            <LanguageIcon language={repo.language} />
                            <span className="text-xs font-semibold text-gray-300">
                              {repo.language}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        {repo.stars > 0 && (
                          <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                            <StarIcon />
                            {repo.stars}
                          </span>
                        )}
                        {repo.forks > 0 && (
                          <span className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                            <ForkIcon />
                            {repo.forks}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-600">
                          {timeAgo(repo.pushedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View All on GitHub CTA */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/diyoadisuta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/60 backdrop-blur border border-slate-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-2xl font-bold tracking-wide transition-all duration-300 group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitHubIcon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
              View All Repositories on GitHub
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with gradient */}
              <div
                className="relative p-8 pb-6"
                style={{
                  background: `linear-gradient(135deg, ${LANGUAGE_COLORS[selectedRepo.language || ''] || '#a855f7'}15, transparent 60%)`,
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedRepo(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center border border-white/5 transition-colors focus:outline-none"
                  aria-label="Close Modal"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${LANGUAGE_COLORS[selectedRepo.language || ''] || '#a855f7'}25, ${LANGUAGE_COLORS[selectedRepo.language || ''] || '#a855f7'}05)`,
                    }}
                  >
                    <GitHubIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    {selectedRepo.customCategory && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/35 rounded-md mb-1.5">
                        {selectedRepo.customCategory}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-white leading-tight">
                      {selectedRepo.name}
                    </h3>
                    <span className="text-sm text-slate-500 font-mono">
                      {selectedRepo.fullName}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedRepo.description || 'This repository does not have a description yet.'}
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-8 pt-2 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      label: 'Language',
                      value: selectedRepo.language || 'N/A',
                      icon: <LanguageIcon language={selectedRepo.language} />,
                    },
                    {
                      label: 'Stars',
                      value: selectedRepo.stars.toString(),
                      icon: <StarIcon />,
                    },
                    {
                      label: 'Forks',
                      value: selectedRepo.forks.toString(),
                      icon: <ForkIcon />,
                    },
                    {
                      label: 'Size',
                      value: formatSize(selectedRepo.size),
                      icon: (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 20h16a2 2 0 002-2V8a2 2 0 00-2-2h-7.93a2 2 0 01-1.66-.9l-.82-1.2A2 2 0 007.93 3H4a2 2 0 00-2 2v13c0 1.1.9 2 2 2z" />
                        </svg>
                      ),
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-3 text-center"
                    >
                      <div className="flex items-center justify-center gap-1.5 text-slate-400 mb-1">
                        {stat.icon}
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline Info */}
                <div className="space-y-3 border-t border-slate-800 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Timeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: 'Created', value: new Date(selectedRepo.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) },
                      { label: 'Updated', value: timeAgo(selectedRepo.updatedAt) },
                      { label: 'Last Push', value: timeAgo(selectedRepo.pushedAt) },
                    ].map((item) => (
                      <div key={item.label} className="text-sm">
                        <span className="text-slate-500 text-xs font-semibold">{item.label}</span>
                        <p className="text-gray-300 font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics */}
                {selectedRepo.topics.length > 0 && (
                  <div className="border-t border-slate-800 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                      Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold rounded-lg"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-6">
                  <a
                    href={selectedRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 hover:brightness-110 transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    View Source Code
                  </a>
                  {selectedRepo.homepage && (
                    <a
                      href={selectedRepo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/60 border border-slate-700 hover:border-pink-500/50 text-gray-300 hover:text-white rounded-xl font-bold text-sm transition-all"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
