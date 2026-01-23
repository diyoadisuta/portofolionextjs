'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#F4F1DE] dark:bg-black relative overflow-hidden">
      {/* Geometric background accents */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-[#FFB703] opacity-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1D3557] dark:bg-[#457B9D] opacity-10 shape-circle"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Asymmetric grid layout */}
        <div className="grid lg:grid-cols-7 gap-12 items-start">
          {/* Left column - 4/7 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">About Me</h2>
            <div className="w-32 h-2 bg-[#E63946] mb-8"></div>
            <p className="text-lg text-black dark:text-white mb-6 leading-relaxed">
              I am a fresh graduate in Informatics Engineering with a strong passion for software development.
              My journey in tech started with a curiosity about how things work, which led me to explore various technologies
              from web development to mobile apps and machine learning.
            </p>
            <p className="text-lg text-black dark:text-white mb-8 leading-relaxed">
              I enjoy solving complex problems and turning ideas into functional, user-friendly applications.
              I am constantly learning and adapting to new technologies to build better solutions.
            </p>

            {/* Stats - Geometric containers */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#E63946] border-4 border-black dark:border-white">
                <h3 className="text-5xl font-bold text-white mb-1">10+</h3>
                <p className="text-sm text-white uppercase font-bold tracking-wider">Projects</p>
              </div>
              <div className="p-6 bg-[#1D3557] dark:bg-[#457B9D] border-4 border-black dark:border-white">
                <h3 className="text-5xl font-bold text-white mb-1">3+</h3>
                <p className="text-sm text-white uppercase font-bold tracking-wider">Years</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - 3/7 staggered */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3 grid gap-6 lg:mt-20"
          >
            {[
              { icon: Globe, title: "Web Development", color: "#E63946" },
              { icon: Smartphone, title: "Mobile Development", color: "#1D3557" },
              { icon: Database, title: "Backend Systems", color: "#FFB703" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="p-6 bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="p-3 border-4 border-black dark:border-white"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white uppercase">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
