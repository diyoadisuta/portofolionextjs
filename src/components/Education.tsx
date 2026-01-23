'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-[#F4F1DE] dark:bg-black relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#E63946] opacity-10 shape-circle"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Education</h2>
          <div className="w-32 h-2 bg-[#FFB703]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white p-8 relative overflow-hidden"
        >
          {/* Color accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#1D3557] dark:bg-[#457B9D]"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
            <div className="p-4 bg-[#1D3557] dark:bg-[#457B9D] border-4 border-black dark:border-white">
              <GraduationCap size={48} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2 uppercase">
                Informatics Engineering
              </h3>
              <h4 className="text-xl text-black dark:text-white mb-4 font-bold">Universitas Nahdlatul Ulama Sidoarjo</h4>

              <div className="flex flex-wrap gap-4 mb-6 text-black dark:text-white">
                <span className="font-bold uppercase">2021 - 2025</span>
                <span className="font-bold">•</span>
                <span className="font-bold uppercase">GPA: 3.63 / 4.00</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Software Engineering", "Web Development", "Mobile Computing", "AI", "Database Systems"].map((focus) => (
                  <span key={focus} className="px-3 py-2 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white text-black dark:text-white text-sm font-bold uppercase">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
