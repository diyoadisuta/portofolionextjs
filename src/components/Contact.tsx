'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E63946] opacity-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-black dark:text-white mb-6 uppercase">Contact</h2>
          <div className="w-32 h-2 bg-[#E63946]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E63946] border-4 border-black dark:border-white">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white uppercase mb-2">Email</h3>
                <p className="text-black dark:text-white">diyoadisuta@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1D3557] dark:bg-[#457B9D] border-4 border-black dark:border-white">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white uppercase mb-2">Location</h3>
                <p className="text-black dark:text-white">Sidoarjo, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#F4F1DE] dark:bg-black border-4 border-black dark:border-white p-6"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="NAME"
                className="w-full p-3 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white font-bold uppercase"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full p-3 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white font-bold uppercase"
              />
              <textarea
                rows={4}
                placeholder="MESSAGE"
                className="w-full p-3 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white text-black dark:text-white placeholder-black dark:placeholder-white font-bold uppercase resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-[#E63946] text-white font-bold uppercase border-4 border-black dark:border-white flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
