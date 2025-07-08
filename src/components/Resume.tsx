'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Resume</motion.h2>
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-surface rounded-3xl shadow-2xl card-padding mb-8 max-w-3xl mx-auto">
          <iframe
            src="/assets/LingeshCV.pdf"
            title="Lingesh T Resume"
            className="w-full h-[600px] rounded-xl bg-white"
          />
        </motion.div>
        <div className="flex justify-center">
          <a href="/assets/LingeshCV.pdf" download className="button-base button-primary">Download Resume</a>
        </div>
      </div>
    </section>
  );
} 