'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              category: "Frontend", 
              icon: Globe, 
              skills: ["React", "Next.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript/TypeScript"],
              color: "from-blue-400 to-cyan-500"
            },
            { 
              category: "Backend", 
              icon: Database, 
              skills: ["Node.js", "Express", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
              color: "from-green-400 to-emerald-500"
            },
            { 
              category: "Mobile", 
              icon: Smartphone, 
              skills: ["Kotlin", "Android Studio", "React Native", "Flutter"],
              color: "from-purple-400 to-pink-500"
            },
            { 
              category: "Tools & Others", 
              icon: Code, 
              skills: ["Git/GitHub", "VS Code", "Figma", "Postman", "Vercel"],
              color: "from-orange-400 to-red-500"
            }
          ].map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-md`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
