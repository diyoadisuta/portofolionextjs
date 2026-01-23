'use client';

import { motion } from 'framer-motion';
import { Palette, Printer, Eye } from 'lucide-react';

export default function AboutDesign() {
    return (
        <section id="about" className="py-20 px-4 bg-[#F4F1DE] dark:bg-black relative overflow-hidden">
            {/* Geometric background accents */}
            <div className="absolute top-20 right-0 w-48 h-48 bg-[#E63946] opacity-10"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#FFB703] opacity-10 shape-circle"></div>

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
                        <div className="w-32 h-2 bg-[#FFB703] mb-8"></div>
                        <p className="text-lg text-black dark:text-white mb-6 leading-relaxed">
                            Saya adalah Spesialis Prepress dan Desain Grafis yang berpengalaman menangani alur kerja produksi cetak.
                            Memiliki keahlian mendalam dalam persiapan file siap cetak, akurasi warna, dan operasional mesin digital printing.
                        </p>
                        <p className="text-lg text-black dark:text-white mb-8 leading-relaxed">
                            Berkomitmen menjaga standar kualitas tinggi dan ketepatan waktu pengiriman di setiap proyek.
                            Dari desain brosur, kemasan, kalender hingga produksi cetak skala besar.
                        </p>

                        {/* Stats - Geometric containers */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-[#FFB703] border-4 border-black dark:border-white">
                                <h3 className="text-5xl font-bold text-black mb-1">5+</h3>
                                <p className="text-sm text-black uppercase font-bold tracking-wider">Years Experience</p>
                            </div>
                            <div className="p-6 bg-[#E63946] border-4 border-black dark:border-white">
                                <h3 className="text-5xl font-bold text-white mb-1">100+</h3>
                                <p className="text-sm text-white uppercase font-bold tracking-wider">Projects</p>
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
                            { icon: Palette, title: "Graphic Design", color: "#FFB703" },
                            { icon: Printer, title: "Prepress Production", color: "#E63946" },
                            { icon: Eye, title: "Color Accuracy", color: "#1D3557" }
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
                                        <item.icon size={24} className={item.color === "#FFB703" ? "text-black" : "text-white"} />
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
