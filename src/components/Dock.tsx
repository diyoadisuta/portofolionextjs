'use client';

import { motion } from 'framer-motion';
import { Home, User, Cpu, Folder, Briefcase, GraduationCap, Mail } from 'lucide-react';

interface DockProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Dock({ activeSection, scrollToSection }: DockProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', color: 'red' },
    { id: 'about', icon: User, label: 'About', color: 'blue' },
    { id: 'skills', icon: Cpu, label: 'Skills', color: 'yellow' },
    { id: 'projects', icon: Folder, label: 'Projects', color: 'red' },
    { id: 'experience', icon: Briefcase, label: 'Experience', color: 'blue' },
    { id: 'education', icon: GraduationCap, label: 'Education', color: 'yellow' },
    { id: 'contact', icon: Mail, label: 'Contact', color: 'red' },
  ];

  const getColorClass = (color: string, isActive: boolean) => {
    if (!isActive) return 'bg-transparent border-transparent';

    switch (color) {
      case 'red': return 'bg-[#E63946] border-black dark:border-white';
      case 'blue': return 'bg-[#1D3557] dark:bg-[#457B9D] border-black dark:border-white';
      case 'yellow': return 'bg-[#FFB703] border-black dark:border-white';
      default: return 'bg-black dark:bg-white border-black dark:border-white';
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center gap-1 px-2 py-2 bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative group p-3 transition-all duration-100 border-2 ${getColorClass(item.color, activeSection === item.id)}`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Navigate to ${item.label} section`}
          >
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none whitespace-nowrap border-2 border-black dark:border-white`}>
              {item.label}
            </div>

            <item.icon
              size={20}
              className={`transition-colors duration-100 ${activeSection === item.id
                  ? 'text-white dark:text-black'
                  : 'text-black dark:text-white'
                }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
