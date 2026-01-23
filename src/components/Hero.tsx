'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, Code } from 'lucide-react';

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
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Geometric Background Shapes - Bauhaus Style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E63946] shape-circle opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-[#1D3557] dark:bg-[#457B9D] opacity-20 shape-triangle"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FFB703] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Content - Asymmetric left column (3/5) */}
          <div className="lg:col-span-3 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block px-6 py-2 bg-[#1D3557] dark:bg-[#457B9D] text-white font-bold text-sm mb-6 border-4 border-black dark:border-white uppercase tracking-wider"
            >
              👋 Portfolio
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-6 tracking-tight text-black dark:text-white uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Dio<br />
              <span className="text-[#E63946]">
                Adista
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-black dark:text-white mb-8 font-bold uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              I build{' '}
              <span className="relative inline-block">
                <TypewriterText texts={["Web Apps", "Mobile Apps", "Solutions", "Interfaces"]} />
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFB703]"></span>
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-black dark:text-white mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Transforming ideas into reality through code. Fresh graduate specializing in building exceptional digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <motion.a
                href="https://drive.usercontent.google.com/download?id=1cnuRChMNZbAonVadsB7B3tbD2o45VGKw&export=download&authuser=0&confirm=t&uuid=ba077f6f-1ccf-4da2-94d0-14cb5906ff88&at=AKSUxGONNDIbh-jrVEHTYaTqG-T8:1759976972616"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#E63946] text-white font-bold uppercase tracking-wider border-4 border-black dark:border-white flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </motion.a>

              <div className="flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/diyoadisuta", color: "#1D3557" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dio-adista", color: "#1D3557" },
                  { icon: Mail, href: "mailto:diyoadisuta@gmail.com", color: "#1D3557" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-[#F4F1DE] dark:bg-black text-black dark:text-white border-4 border-black dark:border-white"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image - Asymmetric right column (2/5) */}
          <motion.div
            className="lg:col-span-2 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              {/* Red circle background accent */}
              <div className="absolute -right-8 -bottom-8 w-3/4 h-3/4 bg-[#E63946] shape-circle z-0"></div>

              {/* Image container */}
              <div className="relative w-full h-full border-8 border-black dark:border-white z-10 overflow-hidden">
                <Image
                  src="/FB_IMG_1590244503401.jpg"
                  alt="Dio Adista Laksono"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Code Badge - Geometric */}
              <motion.div
                whileHover={{ y: -2 }}
                className="absolute -left-4 top-16 bg-[#1D3557] dark:bg-[#457B9D] p-4 border-4 border-black dark:border-white flex items-center gap-3 z-20"
              >
                <div className="bg-[#FFB703] p-2 border-2 border-black">
                  <Code size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-xs text-white font-bold uppercase">Developer</p>
                  <p className="text-sm font-bold text-white">Full Stack</p>
                </div>
              </motion.div>

              {/* Yellow square accent - bottom right */}
              <div className="absolute -right-12 top-1/3 w-24 h-24 bg-[#FFB703] border-4 border-black dark:border-white"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
