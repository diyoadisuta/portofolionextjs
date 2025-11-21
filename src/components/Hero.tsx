'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Star, FileText } from 'lucide-react';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="inline-block min-w-[120px]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 transform -translate-x-1/2"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-800"
            >
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dio Adista
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I build{' '}
              <span className="font-bold text-slate-800 dark:text-white relative inline-block">
                <TypewriterText texts={["Web Apps", "Mobile Apps", "Digital Solution", "User Interface"]} />
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500/30 rounded-full"></span>
              </span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transforming ideas into reality through code. I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="https://drive.usercontent.google.com/download?id=1cnuRChMNZbAonVadsB7B3tbD2o45VGKw&export=download&authuser=0&confirm=t&uuid=ba077f6f-1ccf-4da2-94d0-14cb5906ff88&at=AKSUxGONNDIbh-jrVEHTYaTqG-T8:1759976972616"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.a>
              
              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/diyoadisuta" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dio-adista" },
                  { icon: Mail, href: "mailto:diyoadisuta@gmail.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-md hover:shadow-lg border border-slate-100 dark:border-slate-700 transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[2rem] -rotate-6 opacity-20 animate-pulse delay-75"></div>
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-800">
                <Image
                  src="/RMB05805.png"
                  alt="Dio Adista Laksono"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Developer</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">Full Stack</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Star size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">3+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
