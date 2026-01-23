'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {isDark ? (
          <Sun size={24} className="text-[#FFB703]" />
        ) : (
          <Moon size={24} className="text-black" />
        )}
      </div>
    </motion.button>
  );
}
