'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700"></div>

          {[
            {
              title: "Front-End and Back-End Developer Learning Path",
              company: "CodingCamp by DBS Foundation 2025",
              date: "Feb 2025 - Jul 2025",
              location: "Indonesia",
              description: "Mengembangkan aplikasi web full-stack dan berkolaborasi dalam tim agile.",
              achievements: [
                "Mengembangkan aplikasi web full-stack menggunakan HTML, CSS, JS, MySQL",
                "Mengimplementasikan sistem autentikasi pengguna dan manajemen data",
                "Membuat dan mengonsumsi API untuk data dinamis",
                "Berkolaborasi dalam tim agile menggunakan Git/GitHub"
              ],
              icon: Award,
              color: "bg-blue-500"
            },
            {
              title: "Cloud Computing Learning Path",
              company: "BANGKIT ACADEMY 2024 BATCH 2",
              date: "Aug 2024 - Jan 2025",
              location: "Indonesia",
              description: "Mempelajari layanan Google Cloud Platform dan membangun proyek akhir berbasis cloud.",
              achievements: [
                "Mempelajari dan menerapkan layanan Google Cloud Platform (GCP)",
                "Berkolaborasi dalam tim lintas disiplin untuk proyek akhir",
                "Mengimplementasikan pipeline CI/CD untuk otomatisasi deployment"
              ],
              icon: Briefcase,
              color: "bg-purple-500"
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10 mt-6"></div>

              {/* Content Card */}
              <div className="flex-1 ml-6 md:ml-0">
                <div className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow relative group ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full ${exp.color} rounded-l-2xl md:rounded-none md:${index % 2 === 0 ? 'rounded-l-2xl' : 'rounded-r-2xl'}`}></div>
                  
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`p-2 rounded-lg ${exp.color} bg-opacity-10 text-${exp.color.replace('bg-', '')}`}>
                      <exp.icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">{exp.company}</h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty Space for alignment */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
