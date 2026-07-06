'use client';

import { motion } from 'framer-motion';

export default function About() {
  const creativeSkills = [
    { name: 'Packaging Design & Layouts', level: 95 },
    { name: 'Branding & Corporate Identity', level: 90 },
    { name: 'Typography & Type Layouts', level: 88 },
  ];

  const technicalSkills = [
    { name: 'Prepress Check & Color Separations', level: 92 },
    { name: 'Adobe Suite & Professional Softwares', level: 94 },
    { name: 'Color Theory & PANTONE Matching', level: 89 },
  ];

  const timelineItems = [
    {
      type: 'experience',
      year: 'Jan 2026 - Present',
      title: 'Staff Prepress',
      place: 'Prima Print (Surabaya)',
      description: 'Menyiapkan file desain sesuai standar pre-press agar siap cetak, serta berkoordinasi dengan tim produksi untuk memastikan desain dapat dicetak dengan optimal.',
    },
    {
      type: 'experience',
      year: 'Des 2025 - Present',
      title: 'Web Developer',
      place: 'Joki Proyek',
      description: 'Mengerjakan berbagai proyek pengembangan web secara independen dengan mengimplementasikan solusi front-end maupun integrasi sistem.',
    },
    {
      type: 'education',
      year: 'Feb 2025 - Agt 2025',
      title: 'Front-End & Back-End Developer Cohort',
      place: 'Coding Camp powered by DBS Foundation',
      description: 'Mendalami pengembangan full-stack web development melalui pembelajaran terstruktur, mengeksplorasi sisi kreatif (front-end) dan logika infrastruktur (back-end).',
    },
    {
      type: 'education',
      year: 'Sep 2021 - Agt 2025',
      title: 'S1 Teknik Informatika',
      place: 'Universitas Nahdlatul Ulama Sidoarjo (UNUSIDA)',
      description: 'Menempuh pendidikan sarjana dengan fokus pada rekayasa perangkat lunak, logika pemrograman, dan arsitektur sistem.',
    },
    {
      type: 'education',
      year: 'Sep 2024 - Jan 2025',
      title: 'Cloud Computing Cohort',
      place: 'Bangkit Academy by Google, GoTo, & Traveloka',
      description: 'Berfokus pada layanan dan infrastruktur Google Cloud, serta berkolaborasi dalam Capstone Project yang mengintegrasikan Machine Learning, Mobile Development, dan Cloud.',
    },
    {
      type: 'experience',
      year: 'Nov 2024 - Des 2025',
      title: 'Desainer Grafis',
      place: 'SP Digital Printing (Sidoarjo)',
      description: 'Menangani desain visual untuk kebutuhan digital printing klien dan mengoperasikan mesin cetak digital untuk memastikan hasil output warna yang akurat.',
    },
    {
      type: 'experience',
      year: 'Nov 2021 - Apr 2024',
      title: 'Graphic Designer',
      place: 'CV. Karya Makmur (Surabaya)',
      description: 'Membuat desain berbagai kebutuhan cetak seperti brosur dan kemasan, menyiapkan file sesuai standar pre-press, dan berkoordinasi dengan tim produksi.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-32 md:py-40 px-6 lg:px-8 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A software engineer turned graphic designer, fusing logical precision with creative styling.
          </p>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-300 text-lg leading-relaxed"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              I am Dio Adista Laksono
            </h3>
            <p>
              I hold a degree in Informatics Engineering, which equips me with a structured, technical perspective on digital layouts and color mathematics. My main focus is crafting beautiful branding and packaging layouts that look spectacular on screen and translate seamlessly into physical print media.
            </p>
            <p>
              With over a decade of hands-on design experience, I bridge the gap between creative visual designs and mechanical print requirements (prepress validations, ink densities, bleed margins, spot color mapping).
            </p>
            <p>
              I believe visual communication should be gorgeous yet structurally sound. Whether preparing vector assets for high-speed flexography or establishing a visual layout from scratch, I verify every detail.
            </p>
          </motion.div>

          {/* Skills Categorization */}
          <div className="grid grid-cols-1 gap-14">
            {/* Creative Skills Card */}
            <motion.div
              className="glass-panel rounded-2xl p-6 border border-white/5 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 flex items-center gap-2">
                <span>🎨</span> Creative Specialties
              </h4>
              <div className="space-y-5">
                {creativeSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 text-sm font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills Card */}
            <motion.div
              className="glass-panel rounded-2xl p-6 border border-white/5 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-6 flex items-center gap-2">
                <span>🖨️</span> Technical & Prepress
              </h4>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 text-sm font-semibold">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline (Education & Experience) */}
        <div className="mt-36">
          <motion.h3
            className="text-4xl font-bold text-center text-white mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Education & Professional Milestones
          </motion.h3>

          <div className="max-w-3xl mx-auto space-y-0">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-8 md:gap-12"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Left side: line and dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-2 bg-slate-950 flex items-center justify-center ${
                    item.type === 'education' ? 'border-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]' : 'border-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                  }`} />
                  {index !== timelineItems.length - 1 && (
                    <div className="w-0.5 flex-grow bg-gradient-to-b from-purple-500/20 to-slate-800/10 my-2 min-h-[40px]" />
                  )}
                </div>
                
                {/* Right side: content card */}
                <div className="flex-grow pb-12">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold font-mono tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold italic">
                        {item.place}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
