'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#FFB703] opacity-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Experience</h2>
          <div className="w-32 h-2 bg-[#1D3557] dark:bg-[#457B9D]"></div>
        </motion.div>

        <div className="relative">
          {/* Thick vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black dark:bg-white"></div>

          {[
            {
              title: "Front-End and Back-End Developer",
              company: "CodingCamp by DBS Foundation",
              date: "Feb 2025 - Jul 2025",
              color: "#E63946",
              icon: Award,
            },
            {
              title: "Cloud Computing Learning Path",
              company: "BANGKIT ACADEMY 2024 BATCH 2",
              date: "Aug 2024 - Jan 2025",
              color: "#1D3557",
              icon: Briefcase,
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8"
            >
              {/* Geometric timeline marker */}
              <div
                className="absolute -left-10 top-6 w-4 h-4 border-4 border-black dark:border-white"
                style={{ backgroundColor: exp.color }}
              ></div>

              {/* Content Card */}
              <div className="bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white p-6 relative">
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: exp.color }}
                ></div>

                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div
                    className="p-2 border-4 border-black dark:border-white"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-black dark:text-white uppercase">{exp.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-1 uppercase">{exp.title}</h3>
                <h4 className="text-lg text-black dark:text-white mb-4">{exp.company}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
