'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">About Me</motion.h2>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} className="bg-surface rounded-3xl shadow-2xl card-padding max-w-2xl w-full flex flex-col items-center justify-center text-center border-2 border-primary/20">
        <p className="body-large text-secondary mb-6">
          I’m Lingesh, a Computer Science (AIML) student at Sri Krishna College of Technology, passionate about Artificial Intelligence, Machine Learning, and full-stack development. I love building intelligent, impactful applications using React, FastAPI, and modern data science tools.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-muted">
          <div>
            <h3 className="font-semibold mb-2 text-primary heading-3">Languages</h3>
            <ul className="space-y-1 body-normal">
              <li>Tamil</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Telugu</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-primary heading-3">Location</h3>
            <p className="body-normal">Velur, Namakkal - 638182</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 