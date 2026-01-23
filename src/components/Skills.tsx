'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Geometric background accents */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-[#E63946] opacity-10 shape-circle"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FFB703] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Technical Skills</h2>
          <div className="w-32 h-2 bg-[#1D3557] dark:bg-[#457B9D]"></div>
        </motion.div>

        {/* Asymmetric grid - varying sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              category: "Frontend",
              icon: Globe,
              skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
              color: "#E63946",
              size: "lg:col-span-1"
            },
            {
              category: "Backend",
              icon: Database,
              skills: ["Node.js", "Express", "PostgreSQL", "Firebase"],
              color: "#1D3557",
              size: "lg:col-span-1"
            },
            {
              category: "Mobile",
              icon: Smartphone,
              skills: ["Kotlin", "Android", "React Native"],
              color: "#FFB703",
              size: "lg:col-span-1"
            },
            {
              category: "Tools",
              icon: Code,
              skills: ["Git/GitHub", "VS Code", "Figma", "Postman"],
              color: "#000000",
              size: "lg:col-span-1"
            }
          ].map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`${category.size} bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white p-6 relative overflow-hidden`}
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-2"
                style={{ backgroundColor: category.color }}
              ></div>

              <div className="flex items-center gap-3 mb-6 mt-2">
                <div
                  className="p-3 border-4 border-black dark:border-white"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon size={24} className={category.color === "#FFB703" ? "text-black" : "text-white"} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-white dark:bg-[#0a0a0a] text-black dark:text-white text-sm font-bold border-2 border-black dark:border-white uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
