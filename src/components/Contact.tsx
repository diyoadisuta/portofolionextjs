'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Direct',
      value: 'diyoadisuta@gmail.com',
      link: 'mailto:diyoadisuta@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'WhatsApp Business',
      value: '+62 851-5670-6394',
      link: 'https://wa.me/6285156706394',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'LinkedIn Network',
      value: 'linkedin.com/in/dio-adista',
      link: 'https://www.linkedin.com/in/dio-adista',
    },
  ];

  return (
    <section id="contact" className="py-32 md:py-40 px-6 lg:px-8 bg-slate-950/60 relative overflow-hidden scroll-mt-32">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss layout geometries, color specifications, or design challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Form Section (span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl relative"
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-slate-300 text-sm font-semibold mb-2 tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-slate-900/60 border border-slate-700/60 focus:border-purple-500/80 rounded-xl text-white placeholder-slate-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all duration-300 text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-slate-300 text-sm font-semibold mb-2 tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-slate-900/60 border border-slate-700/60 focus:border-purple-500/80 rounded-xl text-white placeholder-slate-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all duration-300 text-sm"
                        placeholder="yourname@domain.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-slate-300 text-sm font-semibold mb-2 tracking-wide">
                        Message Content
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3.5 bg-slate-900/60 border border-slate-700/60 focus:border-purple-500/80 rounded-xl text-white placeholder-slate-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all duration-300 text-sm resize-none"
                        placeholder="Provide details about structural formats, color profiles, or schedules..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:brightness-110 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2 border border-white/10"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Specifications...</span>
                        </>
                      ) : (
                        <span>Transmit Message</span>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="glass-panel p-10 rounded-3xl border border-emerald-500/30 bg-slate-900/60 shadow-2xl text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <motion.div
                    className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 rounded-full flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  <h3 className="text-3xl font-extrabold text-white mb-3">
                    Message Transmitted!
                  </h3>

                  <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
                    Thank you for reaching out. I've received your query and will reply within 24 business hours to discuss production alignment.
                  </p>

                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-800 border border-slate-700 hover:text-white text-slate-300 rounded-xl text-xs font-bold uppercase tracking-wider"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Cards (span 5) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Contact Channels</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 glass-panel rounded-2xl border border-white/5 hover:border-purple-500/30 group transition-all duration-300 relative overflow-hidden"
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:scale-105 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                          {method.title}
                        </h4>
                        <p className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Spec Board */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent blur-xl rounded-full" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Operational Availability
              </h4>
              <ul className="space-y-3.5 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span>Accepting Packaging Freelance Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span>Available for Full-Time Prepress Roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span>Consulting for Press Optimization Profiles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
