'use client';

import { motion } from 'framer-motion';
import React from 'react';

const certifications = [
  { name: 'NPTEL – Fundamentals of AI', logo: null },
  { name: 'NPTEL – Entrepreneurship', logo: null },
  { name: 'CISCO – Networking', logo: null },
  { name: 'Infosys – Spring Boot', logo: null },
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

interface Certification {
  name: string;
  logo: null | string;
}

function CertificationCard({ cert }: { cert: Certification }) {
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
      {/* Optionally add logo here */}
      <span className="heading-3 text-white font-semibold text-center drop-shadow-lg">{cert.name}</span>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding w-full flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="heading-2 text-center gradient-primary bg-clip-text text-transparent">Certifications</motion.h2>
      <div className="container">
        <div className="grid md:grid-cols-4 grid-normal justify-center w-full">
          {certifications.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
} 