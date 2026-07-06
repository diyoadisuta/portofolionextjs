'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Packaging Design',
      description: 'Custom packaging solutions that elevate your product and create lasting impressions on customers.',
      features: ['3D Mockups', 'Structural Design', 'Label Design', 'Sustainability Focus'],
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Packaging Box Outline */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v8" opacity={0.3} />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Brand Identity',
      description: 'Complete branding solutions including logo design, color palettes, and comprehensive brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System'],
      icon: (
        <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Logo / Palette geometry */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          <circle cx="12" cy="12" r="2" fill="currentColor" opacity={0.5} />
        </svg>
      ),
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Banner & Print Design',
      description: 'Eye-catching banners, posters, and print materials designed for maximum impact and engagement.',
      features: ['Digital Banners', 'Print Posters', 'Sticker Design', 'Marketing Collateral'],
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Layout Columns */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4v16M15 4v16M4 10h16" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Prepress Management',
      description: 'Professional prepress services ensuring your designs are optimized for perfect print reproduction.',
      features: ['Color Separation', 'File Preparation', 'Print Optimization', 'Quality Assurance'],
      icon: (
        <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Target Alignment Crop Marks */}
          <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
        </svg>
      ),
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Design Consultation',
      description: 'Strategic design consulting to help your brand stand out in the market with visual excellence.',
      features: ['Brand Strategy', 'Design Direction', 'Market Analysis', 'Recommendations'],
      icon: (
        <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Bulb/Strategy */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Custom Design Solutions',
      description: 'Tailored design services for unique projects and specialized branding needs.',
      features: ['Custom Artwork', 'Illustration', 'Photo Retouching', 'Bespoke Design'],
      icon: (
        <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Pen tool drawing vector path */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section id="services" className="py-32 md:py-40 px-6 lg:px-8 bg-slate-900/60 relative overflow-hidden scroll-mt-32">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            Services Offered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive design solutions and prepress expertise tailored to elevate your brand from concept to print.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-panel glass-panel-hover rounded-2xl p-8 shadow-xl hover:shadow-2xl relative overflow-hidden flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Subtle hover gradient light */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* Styled Icon Wrapper */}
                  <motion.div
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50 shadow-inner relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    {service.icon}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-md rounded-xl`} />
                  </motion.div>
                  
                  {/* Decorative card number */}
                  <span className="text-4xl font-extrabold text-slate-800/40 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-8 text-sm leading-relaxed min-h-[72px]">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-300 bg-slate-800/30 p-2 px-3 rounded-lg border border-slate-800/50"
                    >
                      <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 shadow-lg`} />
                      <span className="text-xs font-semibold tracking-wide text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 border border-white/10`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Inquire Service
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
