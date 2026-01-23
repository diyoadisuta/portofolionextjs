'use client';

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function ProjectsDesign() {
    return (
        <section id="projects" className="py-20 px-4 bg-[#F4F1DE] dark:bg-black relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB703] opacity-10 shape-triangle"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Design Projects</h2>
                    <div className="w-32 h-2 bg-[#FFB703]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Packaging Design", category: ["Packaging", "Brand"], color: "#FFB703" },
                        { title: "Brochure & Catalog", category: ["Layout", "Print"], color: "#E63946" },
                        { title: "Calendar Design", category: ["Calendar", "Corporate"], color: "#1D3557" },
                        { title: "Brand Identity", category: ["Logo", "Branding"], color: "#FFB703" },
                        { title: "Large Format Print", category: ["Banner", "Signage"], color: "#E63946", span: "md:col-span-2" },
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            viewport={{ once: true }}
                            className={`${project.span || ''} bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white p-6 relative overflow-hidden`}
                        >
                            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: project.color }}></div>

                            <div className="flex justify-between items-start mb-4 ml-4">
                                <h3 className="text-2xl font-bold text-black dark:text-white uppercase">{project.title}</h3>
                                <motion.button whileHover={{ y: -2 }} className="p-2 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white">
                                    <Eye size={16} className="text-black dark:text-white" />
                                </motion.button>
                            </div>

                            <div className="flex flex-wrap gap-2 ml-4">
                                {project.category.map((cat) => (
                                    <span key={cat} className="px-2 py-1 bg-[#F4F1DE] dark:bg-black border-2 border-black dark:border-white text-black dark:text-white text-xs font-bold uppercase">
                                        {cat}
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
