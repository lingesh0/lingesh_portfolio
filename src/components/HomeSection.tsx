'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState, useRef } from 'react';

function isMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function HomeSection() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('isMobile:', isMobile());
    // Always try to fetch for debug
    fetch('/assets/tech-lottie.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch Lottie JSON: ' + res.status);
        return res.json();
      })
      .then(setAnimationData)
      .catch(err => {
        console.error('Lottie fetch error:', err);
        setAnimationData('error');
      });
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-12 overflow-hidden">
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-80 pointer-events-none">
        {animationData === 'error' && (
          <div className="text-red-400 bg-black bg-opacity-60 p-4 rounded">Lottie animation failed to load.</div>
        )}
        {animationData && animationData !== 'error' && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={isInView}
            style={{ width: '100vw', maxWidth: 900, height: '100vh', minHeight: 400, objectFit: 'cover' }}
          />
        )}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4 mx-auto drop-shadow-lg"
      >
        Hi, I’m Lingesh T <span className="inline-block">👋</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-cyan-200 mb-8 mx-auto drop-shadow"
      >
        AI/ML Enthusiast | Full-Stack Developer | Problem Solver
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="flex gap-4 justify-center mb-8 mx-auto"
      >
        <a href="https://github.com/lingesh0" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-blue-700 text-white rounded shadow-xl hover:bg-blue-600 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/t-lingesh-a879b5249/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-blue-700 text-white rounded shadow-xl hover:bg-blue-600 transition">LinkedIn</a>
        <a href="#resume" className="px-5 py-2 bg-blue-700 text-white rounded shadow-xl hover:bg-blue-600 transition">Resume</a>
      </motion.div>
    </section>
  );
} 