'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Mail, title: "Email", value: "diyoadisuta@gmail.com", href: "mailto:diyoadisuta@gmail.com", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20", border: "hover:border-red-200 dark:hover:border-red-800" },
            { icon: Linkedin, title: "LinkedIn", value: "linkedin.com/in/dio-adista", href: "https://linkedin.com/in/dio-adista", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20", border: "hover:border-blue-200 dark:hover:border-blue-800" },
            { icon: Github, title: "GitHub", value: "github.com/diyoadisuta", href: "https://github.com/diyoadisuta", color: "text-slate-800 dark:text-white", bg: "bg-slate-100 dark:bg-slate-800", border: "hover:border-slate-300 dark:hover:border-slate-600" }
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.title !== "Email" ? "_blank" : undefined}
              rel={item.title !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent ${item.border} group`}
            >
              <div className={`p-4 rounded-full ${item.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
