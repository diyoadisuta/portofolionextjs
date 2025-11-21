'use client';

import { motion } from 'framer-motion';
import { Home, User, Cpu, Folder, Briefcase, GraduationCap, Mail } from 'lucide-react';

interface DockProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Dock({ activeSection, scrollToSection }: DockProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl ring-1 ring-black/5">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative group p-3 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Navigate to ${item.label} section`}
          >
            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-white text-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap`}>
              {item.label}
              <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-white"></div>
            </div>
            
            <item.icon 
              size={24} 
              className={`transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white'
              }`} 
            />
            
            {activeSection === item.id && (
              <motion.div
                layoutId="activeDock"
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
