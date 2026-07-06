'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex flex-col justify-center pt-40 pb-32 lg:pt-48 lg:pb-40 scroll-mt-32"
    >
      {/* Dynamic Animated Ambient Glows */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-pink-500 opacity-15 blur-[120px] rounded-full"
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Context / Text */}
        <motion.div
          className="text-left space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-300">
              Prepress & Packaging Specialist
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-400"
            variants={itemVariants}
          >
            Dio Adista <br />
            Laksono
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium text-pink-300/90"
            variants={itemVariants}
          >
            Graphic Design & Informatics Engineering Graduate
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            Prepress and Graphic Design Specialist with a proven track record in managing end-to-end print production workflows. Highly skilled in preparing print-ready files, ensuring precise color accuracy, and operating digital and offset printing machinery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-slate-900/50 backdrop-blur border border-slate-700 hover:border-pink-500/50 text-gray-300 hover:text-white rounded-xl font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div
          className="relative lg:block"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] as const }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Ambient glow behind photo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-rose-500/30 rounded-3xl blur-[60px] scale-110"
              animate={{
                scale: [1.1, 1.2, 1.1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />

            {/* Gradient ring border */}
            <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 shadow-2xl shadow-purple-500/20">
              <div className="rounded-[calc(1.5rem-3px)] overflow-hidden bg-slate-950">
                <img
                  src="https://mvkgunsgbdrejgsxniwm.supabase.co/storage/v1/object/public/PortoBucket/FotoProfil.png"
                  alt="Dio Adista Laksono"
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-purple-400/50 rounded-tl-xl" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-pink-400/50 rounded-tr-xl" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-xl" />

            {/* Floating status badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-5 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2.5"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-xs font-bold text-gray-300 tracking-wide">
                Available for Work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <a href="#about" aria-label="Scroll Down">
          <svg
            className="w-6 h-6 text-purple-400 hover:text-pink-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
