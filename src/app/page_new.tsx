"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Award,
  GraduationCap,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: "JavaScript/TypeScript", icon: Code, level: 85 },
    { name: "React/Next.js", icon: Globe, level: 80 },
    { name: "Node.js", icon: Server, level: 75 },
    { name: "Python", icon: Code, level: 80 },
    { name: "Database (SQL/NoSQL)", icon: Database, level: 70 },
    { name: "Mobile Development", icon: Smartphone, level: 65 },
  ];

  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johndoe/ecommerce-app",
      live: "https://ecommerce-demo.vercel.app",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management Mobile App",
      description: "React Native mobile application for task management with real-time synchronization, offline support, and push notifications.",
      tech: ["React Native", "Firebase", "TypeScript"],
      github: "https://github.com/johndoe/task-manager",
      live: null,
      image: "/api/placeholder/400/250"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics using Python, built for analyzing university research data.",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"],
      github: "https://github.com/johndoe/analytics-dashboard",
      live: "https://analytics-dashboard-demo.streamlit.app",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div 
            className="relative z-10 text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold"
            >
              JD
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              John Doe
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Fresh Graduate Informatics Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Passionate about creating innovative software solutions and building the future through technology. 
              Ready to contribute fresh perspectives and modern technical skills to your team.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Projects
              </button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="https://github.com/johndoe" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com/in/johndoe" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="mailto:john.doe@email.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white/5 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I am a recent graduate in Informatics Engineering with a strong foundation in software development, 
                  data structures, algorithms, and modern web technologies. During my studies, I developed a passion 
                  for creating efficient, scalable solutions and gained hands-on experience through various academic 
                  and personal projects.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I thrive in collaborative environments and am eager to apply my technical skills and fresh perspective 
                  to real-world challenges. My goal is to contribute to innovative projects while continuously learning 
                  and growing as a software engineer.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={20} className="text-purple-400" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone size={20} className="text-purple-400" />
                    <span>+62 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail size={20} className="text-purple-400" />
                    <span>john.doe@email.com</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="text-purple-400" size={24} />
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white">Bachelor of Informatics Engineering</h4>
                      <p className="text-purple-300">University of Technology</p>
                      <p className="text-gray-400">2020 - 2024 | GPA: 3.7/4.0</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-purple-400" size={24} />
                    <h3 className="text-xl font-semibold text-white">Achievements</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>• Dean's List - Top 10% of graduating class</p>
                    <p>• Best Final Project Award - Software Engineering</p>
                    <p>• Programming Competition - 2nd Place Regional</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Here are the technologies and tools I've worked with during my studies and personal projects.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="text-purple-400" size={24} />
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{skill.level}% Proficiency</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-white/5 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Here are some of the projects I've worked on that showcase my skills and passion for development.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <Code size={48} className="text-white/50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                      {project.live && (
                        <Link
                          href={project.live}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                I'm actively seeking opportunities to start my career in software development. 
                If you're looking for a motivated fresh graduate with strong technical skills and 
                a passion for learning, I'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="mailto:john.doe@email.com"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Send Email
                </Link>
                <Link
                  href="https://linkedin.com/in/johndoe"
                  className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-black/30 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 John Doe. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
