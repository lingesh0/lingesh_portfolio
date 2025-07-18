'use client';

import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: 'AI Resume Builder Chatbot',
    description: 'Python NLP chatbot for creating personalized resumes',
    github: 'https://github.com/lingesh0/ai-resume-builder',
  },
  {
    title: 'Vehicle Number Plate Detection',
    description: 'OpenCV + YOLO + Tesseract OCR system',
    github: 'https://github.com/lingesh0/number-plate-detection',
  },
  {
    title: 'Web Scraping Q&A Generator',
    description: 'Hugging Face T5 + LLM (Llama 7B, Ollama)',
    github: 'https://github.com/lingesh0/web-scraping-qa',
  },
  {
    title: 'AI Task Manager Web App',
    description: 'Full-stack (React, FastAPI, Firebase) with voice input, JWT auth, and AI suggestions',
    github: 'https://github.com/lingesh0/ai-task-manager',
  },
];

function use3DTilt(ref: React.RefObject<HTMLDivElement>) {
  // Simple 3D tilt effect using mouse movement
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

interface Project {
  title: string;
  description: string;
  github: string;
}

function ProjectCard({ project }: { project: Project }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { handleMouseMove, handleMouseLeave } = use3DTilt(ref as React.RefObject<HTMLDivElement>);
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
      <h3 className="heading-3 gradient-primary bg-clip-text text-transparent mb-2">{project.title}</h3>
      <p className="body-normal text-secondary mb-6">{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-base button-primary mt-auto">GitHub</a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Projects</motion.h2>
      <div className="container">
        <div className="grid md:grid-cols-2 grid-normal justify-center w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 