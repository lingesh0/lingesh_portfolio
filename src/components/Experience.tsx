'use client';

import { motion } from 'framer-motion';
import React from 'react';

const experiences = [
  {
    title: 'Project Intern at CDAC Chennai',
    period: 'May–June 2025',
    description: 'Worked on LLM-based system, model training, data integration',
  },
  {
    title: 'Intern at ITI Limited, Bangalore',
    period: 'July 2024',
    description: 'Gained experience in SMT, 3D Printing, Data Centers, 4G lab',
  },
];

function use3DTilt(ref: React.RefObject<HTMLDivElement>) {
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
  };
  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = '';
  };
  return { handleMouseMove, handleMouseLeave };
}

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { handleMouseMove, handleMouseLeave } = use3DTilt(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl shadow-2xl card-padding card-hover bg-surface text-primary flex flex-col items-center justify-center text-center border-2 border-primary/20 cursor-pointer w-full max-w-2xl relative mb-8"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-8 h-8 gradient-primary rounded-full border-4 border-surface shadow-lg z-10" />
      <h3 className="heading-3 gradient-primary bg-clip-text text-transparent mb-2">{exp.title}</h3>
      <span className="body-small text-secondary mb-2">{exp.period}</span>
      <p className="body-normal text-muted mt-2">{exp.description}</p>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Experience</motion.h2>
      <div className="container">
        <div className="relative flex flex-col gap-12 items-center justify-center w-full max-w-4xl">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
} 