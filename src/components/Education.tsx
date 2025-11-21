'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-blue-600 dark:text-blue-400">
              <GraduationCap size={48} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                Bachelor of Informatics Engineering
              </h3>
              <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-medium">Universitas Gunadarma</h4>
              
              <div className="flex flex-wrap gap-4 mb-6 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2020 - 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Depok, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold">
                  <Star size={14} />
                  <span>GPA: 3.56 / 4.00</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Key Focus Areas</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Software Engineering", "Web Development", "Mobile Computing", "Artificial Intelligence", "Database Systems"].map((focus) => (
                      <span key={focus} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Achievements</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>Graduated with Honors (Cum Laude)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>Active member of Computer Science Student Association</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
