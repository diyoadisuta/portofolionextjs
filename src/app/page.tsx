'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, FileText, Download, Star, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 relative overflow-hidden">
      {/* Additional background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent pointer-events-none"></div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-50 border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Dio Adista Laksono
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-spin slow"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
              {/* Profile Image */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-75 animate-pulse"></div>
                  <Image
                    src="/RMB05805.png"
                    alt="Dio Adista Laksono Profile Picture"
                    width={300}
                    height={300}
                    className="relative rounded-lg shadow-2xl object-cover border-4 border-white/20 backdrop-blur-sm"
                    priority
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <Star size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Dio Adista Laksono
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="relative">
                    Fresh Graduate Informatics Engineer
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 animate-[scale-x_2s_ease-in-out_0.6s_forwards] origin-left"></span>
                  </span>
                </motion.p>
                <motion.p 
                  className="text-lg text-slate-500 dark:text-slate-400 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Passionate about creating innovative software solutions and exploring cutting-edge technologies. 
                  Ready to contribute to impactful projects and grow in a dynamic development environment.
                </motion.p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { href: "https://linkedin.com/in/dio-adista", icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" },
                { href: "https://github.com/diyoadisuta", icon: Github, label: "GitHub", color: "from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black" },
                { href: "mailto:diyoadisuta@gmail.com", icon: Mail, label: "Email", color: "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" },
                { href: "https://docs.google.com/document/d/1UwGEdHCMGfzg38Sl_0iN4vhxdeN6iSWkFqjT8iEkIUc/edit?usp=sharing", icon: FileText, label: "View CV", color: "from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800" },
                { href: "https://drive.usercontent.google.com/download?id=1izLBEggnEtVLBqBJL2wTsEMoPyw7Zhhn&export=download&authuser=0", icon: Download, label: "Download CV", color: "from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800" }
              ].map((button, index) => (
                <motion.a
                  key={button.label}
                  href={button.href}
                  target={button.href.startsWith('http') ? "_blank" : undefined}
                  rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${button.color} text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <button.icon size={20} className="relative z-10" />
                  <span className="relative z-10 font-medium">{button.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block cursor-pointer group"
              onClick={() => scrollToSection('about')}
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <ChevronDown 
                  size={32} 
                  className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                As a fresh graduate in Informatics Engineering, I bring a strong foundation in computer science principles 
                combined with practical experience in modern web development technologies. I'm passionate about creating 
                user-friendly applications and solving complex problems through code.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                During my studies, I've worked on various projects involving web development, mobile applications, 
                and database management. I'm eager to apply my knowledge in a professional environment and contribute 
                to innovative software solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Code, title: "Web Development", desc: "Modern frameworks and responsive design", color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
                  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform development", color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20" },
                  { icon: Database, title: "Database", desc: "Design and optimization", color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-900/20" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    viewport={{ once: true }}
                    className={`text-center p-6 rounded-xl ${item.bgColor} backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Frontend", skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'], color: "from-blue-500 to-cyan-500" },
                { title: "Backend", skills: ['Node.js', 'Express.js', 'Python', 'PHP', 'Java', 'REST API'], color: "from-green-500 to-emerald-500" },
                { title: "Database", skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'], color: "from-purple-500 to-violet-500" },
                { title: "Tools", skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'AWS'], color: "from-orange-500 to-red-500" }
              ].map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {category.title}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-slate-400 mr-3 group-hover:bg-blue-500 transition-colors duration-300"></div>
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "KomposKita",
                  description: "AI-powered waste classification web app for composting education. Helps users identify compostable waste and provides composting guidance.",
                  tech: ["Next.js", "TensorFlow", "Machine Learning", "Supabase"],
                  image: "♻️",
                  github: "https://github.com/diyoadisuta/KomposKita",
                  demo: "https://kompos-kita-steel.vercel.app/"
                },
                {
                  title: "TaskWise",
                  description: "Modern task management application built with Next.js. Features task organization, priority management, and productivity tracking.",
                  tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
                  image: "📋",
                  github: "https://github.com/diyoadisuta/TaskWise",
                  demo: "https://task-wise-five.vercel.app/"
                },
                {
                  title: "Moodiometry",
                  description: "Bangkit 2024 Capstone Project - Mental health tracking mobile app with mood monitoring and stress level analysis for better well-being.",
                  tech: ["Kotlin", "Cloud Computing", "Machine Learning", "Mobile Development"],
                  image: "📱",
                  github: "https://github.com/diyoadisuta/Moodiometry",
                  demo: null
                },
                {
                  title: "Story Submission",
                  description: "Interactive web application for story submission and management. Built with modern JavaScript and responsive design principles.",
                  tech: ["JavaScript", "Vite", "CSS", "HTML"],
                  image: "�",
                  github: "https://github.com/diyoadisuta/StorySubmission",
                  demo: null
                },
                {
                  title: "Portfolio Website",
                  description: "Modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and featuring smooth animations.",
                  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                  image: "�",
                  github: "https://github.com/diyoadisuta/portofolionextjs",
                  demo: null
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech} 
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-all duration-300 group/link"
                      >
                        <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="font-medium">Code</span>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-green-600 hover:text-green-800 dark:hover:text-green-400 transition-all duration-300 group/link"
                        >
                          <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                          <span className="font-medium">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Experience</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Bangkit Academy Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-blue-900/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 dark:border-blue-700/50"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="text-blue-500 w-8 h-8" />
                  </motion.div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative z-10">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Cloud Computing Learning Path
                    </motion.h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">Bangkit Academy 2024 Batch 2</p>
                    <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <Globe size={16} />
                      Indonesia
                    </p>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 mt-2 md:mt-0 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                    <p className="font-medium">30 Agustus 2024 – 20 Januari 2025</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-300 relative z-10">
                  {[
                    "Mempelajari materi Cloud Computing menggunakan Google Cloud Platform (GCP), termasuk Compute Engine, Cloud Storage, Cloud SQL, dan Kubernetes Engine.",
                    "Menyelesaikan proyek akhir berbasis cloud sebagai bagian dari tim lintas disiplin (Machine Learning, Mobile Development, dan Cloud Computing).",
                    "Mengimplementasikan CI/CD pipeline dan menerapkan best practice dalam pengelolaan infrastruktur cloud."
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mt-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {['Google Cloud Platform', 'Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Kubernetes', 'CI/CD'].map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-100 text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-blue-300 dark:border-blue-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* CodingCamp Experience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50 dark:from-slate-700 dark:to-green-900/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200/50 dark:border-green-700/50"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Briefcase className="text-green-500 w-8 h-8" />
                  </motion.div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative z-10">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Front-End and Back-End Developer Learning Path
                    </motion.h3>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-1">CodingCamp by DBS Foundation 2024</p>
                    <p className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <Globe size={16} />
                      Indonesia
                    </p>
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 mt-2 md:mt-0 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                    <p className="font-medium">Februari 2025 – Juli 2025</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-300 relative z-10">
                  {[
                    "Mengembangkan aplikasi web menggunakan HTML, CSS, JavaScript, dan framework modern untuk front-end dan back-end.",
                    "Mengimplementasikan sistem autentikasi, manajemen data dengan MySQL, serta pengolahan API untuk kebutuhan aplikasi.",
                    "Bekerja dalam tim agile untuk menyelesaikan proyek akhir berbasis studi kasus nyata, dengan penggunaan Git untuk kolaborasi versi."
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mt-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {['HTML', 'CSS', 'JavaScript', 'MySQL', 'API Development', 'Git', 'Agile'].map((tech, index) => (
                    <motion.span 
                      key={tech} 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 text-green-800 dark:text-green-100 text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-green-300 dark:border-green-600"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Education</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Sarjana Komputer - Teknik Informatika</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">Universitas Nahdlatul Ulama Sidoarjo</p>
                  <p className="text-slate-600 dark:text-slate-300">Sidoarjo, Jawa Timur</p>
                  <p className="text-slate-600 dark:text-slate-300">Semester 8 (Sekarang)</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Program Focus</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Management Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Web Development</li>
                      <li>• Mobile Application Development</li>
                      <li>• Computer Networks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Academic Performance</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• IPK: 3.65/4.0</li>
                      <li>• Strong interest in software development</li>
                      <li>• Focus on practical programming skills</li>
                      <li>• Experience with modern frameworks</li>
                      <li>• Passion for continuous learning</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Mahasiswa semester 8 dengan minat besar pada pengembangan perangkat lunak, 
                    kecerdasan buatan, dan analisis data. Berpengalaman dalam partisipasi 
                    program Bangkit 2024 dari Google, Tokopedia, Gojek, & Traveloka yang 
                    mengusung pembelajaran dalam pengembangan keahlian di bidang pemrograman, 
                    pengembangan aplikasi web, dan pemodelan data.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="mailto:diyoadisuta@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">diyoadisuta@gmail.com</p>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/dio-adista"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Linkedin className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-300">linkedin.com/in/dio-adista</p>
              </motion.a>
              
              <motion.a
                href="https://github.com/diyoadisuta"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Github className="w-12 h-12 text-slate-800 dark:text-white mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-300">github.com/diyoadisuta</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Dio Adista Laksono. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
