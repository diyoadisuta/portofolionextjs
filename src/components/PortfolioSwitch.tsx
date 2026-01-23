'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Palette } from 'lucide-react';

interface PortfolioSwitchProps {
    currentPage: 'it' | 'design';
}

export default function PortfolioSwitch({ currentPage }: PortfolioSwitchProps) {
    const isIT = currentPage === 'it';
    const targetPage = isIT ? '/design' : '/';

    return (
        <Link href={targetPage}>
            <motion.div
                className="fixed top-20 right-4 z-50 cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white p-2 flex items-center gap-0">
                    {/* IT Icon */}
                    <div className={`p-3 border-2 transition-all duration-100 ${isIT
                            ? 'bg-[#E63946] border-black dark:border-white text-white'
                            : 'bg-transparent border-transparent text-black dark:text-white'
                        }`}>
                        <Code size={20} />
                    </div>

                    {/* Design Icon */}
                    <div className={`p-3 border-2 transition-all duration-100 ${!isIT
                            ? 'bg-[#FFB703] border-black dark:border-white text-black'
                            : 'bg-transparent border-transparent text-black dark:text-white'
                        }`}>
                        <Palette size={20} />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
