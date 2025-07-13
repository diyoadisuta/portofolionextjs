'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-slate-800 dark:text-white"
            >
              Dio Adista Laksono
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                DA
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
                Dio Adista Laksono
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                Fresh Graduate Informatics Engineer
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Passionate about creating innovative software solutions and exploring cutting-edge technologies. 
                Ready to contribute to impactful projects and grow in a dynamic development environment.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://linkedin.com/in/dio-adista"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/diyoadisuta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:diyoadisuta@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="animate-bounce"
          >
            <ChevronDown 
              size={32} 
              className="mx-auto text-slate-400 cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
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
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Web Development</h3>
                  <p className="text-slate-600 dark:text-slate-300">Modern frameworks and responsive design</p>
                </div>
                <div className="text-center">
                  <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Mobile Apps</h3>
                  <p className="text-slate-600 dark:text-slate-300">Cross-platform development</p>
                </div>
                <div className="text-center">
                  <Database className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Database</h3>
                  <p className="text-slate-600 dark:text-slate-300">Design and optimization</p>
                </div>
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
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Frontend</h3>
                <div className="space-y-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((skill) => (
                    <div key={skill} className="text-slate-600 dark:text-slate-300">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Backend</h3>
                <div className="space-y-2">
                  {['Node.js', 'Express.js', 'Python', 'PHP', 'Java', 'REST API'].map((skill) => (
                    <div key={skill} className="text-slate-600 dark:text-slate-300">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Database</h3>
                <div className="space-y-2">
                  {['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'].map((skill) => (
                    <div key={skill} className="text-slate-600 dark:text-slate-300">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tools</h3>
                <div className="space-y-2">
                  {['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'AWS'].map((skill) => (
                    <div key={skill} className="text-slate-600 dark:text-slate-300">{skill}</div>
                  ))}
                </div>
              </div>
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
                  title: "E-Commerce Web App",
                  description: "Full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
                  tech: ["React", "Node.js", "MongoDB", "Stripe"],
                  image: "🛒"
                },
                {
                  title: "Task Management System",
                  description: "Collaborative task management application with real-time updates and team collaboration features.",
                  tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
                  image: "📋"
                },
                {
                  title: "Weather Dashboard",
                  description: "Responsive weather application with location-based forecasts and interactive maps.",
                  tech: ["JavaScript", "OpenWeather API", "Chart.js"],
                  image: "🌤️"
                },
                {
                  title: "Personal Finance Tracker",
                  description: "Mobile-first application for tracking expenses and managing personal budgets.",
                  tech: ["React Native", "Firebase", "Chart.js"],
                  image: "💰"
                },
                {
                  title: "University Course Portal",
                  description: "Academic portal for course registration, grade tracking, and student-teacher communication.",
                  tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
                  image: "🎓"
                },
                {
                  title: "Chat Application",
                  description: "Real-time messaging app with group chats, file sharing, and emoji reactions.",
                  tech: ["Socket.io", "Express", "MongoDB", "React"],
                  image: "💬"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Github size={16} />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-white dark:bg-slate-800">
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
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Bachelor of Informatics Engineering</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">University Name</p>
                  <p className="text-slate-600 dark:text-slate-300">2020 - 2024</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Coursework</h4>
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
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Achievements</h4>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• GPA: 3.7/4.0</li>
                      <li>• Dean's List (2022, 2023)</li>
                      <li>• Best Final Project Award</li>
                      <li>• Programming Competition Winner</li>
                      <li>• Student Organization Leader</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
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
