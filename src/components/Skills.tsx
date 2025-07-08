'use client';

import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  { category: 'Programming', items: ['Python', 'Java', 'C++'] },
  { category: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'] },
  { category: 'Backend & APIs', items: ['Spring Boot', 'FastAPI', 'Node.js', 'Express.js'] },
  { category: 'AI/ML', items: ['TensorFlow', 'Keras', 'scikit-learn', 'OpenCV', 'NumPy', 'Pandas'] },
  { category: 'Tools', items: ['Firebase', 'Docker', 'Git', 'Google Colab', 'Jupyter', 'Hugging Face'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
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

interface Skill {
  category: string;
  items: string[];
}

function SkillCard({ skill }: { skill: Skill }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { handleMouseMove, handleMouseLeave } = use3DTilt(ref as React.RefObject<HTMLDivElement>);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl shadow-2xl card-padding card-hover bg-surface text-primary flex flex-col items-center justify-center text-center border-2 border-primary/20 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="heading-3 gradient-primary bg-clip-text text-transparent mb-4">{skill.category}</h3>
      <ul className="space-y-1 body-normal text-secondary">
        {skill.items.map(item => (
          <li key={item} className="hover:text-accent transition-colors text-lg font-medium">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Skills</motion.h2>
      <div className="grid md:grid-cols-3 grid-normal justify-center w-full max-w-6xl">
        {skills.map((skill) => (
          <SkillCard key={skill.category} skill={skill} />
        ))}
      </div>
    </section>
  );
} 