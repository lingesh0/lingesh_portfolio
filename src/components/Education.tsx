'use client';

import { motion } from 'framer-motion';
import React from 'react';

const education = [
  {
    degree: 'B.E. CSE (AIML)',
    school: 'Sri Krishna College of Technology',
    details: 'CGPA: 8.08 (2022–2026)',
  },
  {
    degree: '12th',
    school: 'Green Park Int. School',
    details: '75%',
  },
  {
    degree: '10th',
    school: 'Narayana Olympiad School',
    details: '99.8%',
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

interface EducationItem {
  degree: string;
  school: string;
  details: string;
}

function EducationCard({ edu }: { edu: EducationItem }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { handleMouseMove, handleMouseLeave } = use3DTilt(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl shadow-2xl card-padding card-hover bg-surface text-primary flex flex-col items-center justify-center text-center border-2 border-primary/20 cursor-pointer mb-8"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="heading-3 gradient-primary bg-clip-text text-transparent mb-2">{edu.degree}</h3>
      <p className="body-normal text-secondary mb-1">{edu.school}</p>
      <span className="body-small text-muted">{edu.details}</span>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Education</motion.h2>
      <div className="container">
        <div className="grid md:grid-cols-3 grid-normal justify-center w-full">
          {education.map((edu) => (
            <EducationCard key={edu.degree} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
} 