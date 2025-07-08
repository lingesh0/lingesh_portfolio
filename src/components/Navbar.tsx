'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Active section detection
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`navbar fixed top-0 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-5xl z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-surface/80 shadow-xl border border-primary/20' : 'bg-surface/60 border border-primary/10'} rounded-b-2xl mt-4`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between w-full px-8 py-3 md:py-4">
        {/* Logo/Brand */}
        <a href="#home" className="font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg pr-8 select-none" aria-label="Home">
          
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center justify-center flex-1" role="menubar">
          {navLinks.map(link => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                role="menuitem"
                aria-current={active === link.name ? 'page' : undefined}
                onClick={e => handleNavClick(e, link.href)}
                className={`nav-item px-5 py-2 mx-2 rounded-xl font-semibold text-secondary transition-all duration-200 relative focus-visible:outline-2 focus-visible:outline-primary focus-visible:bg-primary/10 ${active === link.name ? 'active bg-gradient-to-r from-primary to-secondary text-white shadow-xl' : 'hover:bg-primary/10 hover:text-primary'}`}
                tabIndex={0}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-1 rounded-full gradient-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>
        {/* CTA + Theme Toggle */}
        <div className="flex items-center gap-4 pl-8">
          <a href="#resume" className="hidden md:inline-block px-6 py-2 bg-primary text-white rounded-xl font-semibold shadow hover:bg-secondary transition-all duration-200 ml-2 text-lg">Resume</a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 p-2 rounded-full bg-surface-light hover:bg-primary/20 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded-full bg-surface-light hover:bg-primary/20 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="flex flex-col gap-4 items-center justify-center py-6 md:hidden" role="menubar">
          {navLinks.map(link => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                role="menuitem"
                aria-current={active === link.name ? 'page' : undefined}
                onClick={e => handleNavClick(e, link.href)}
                className={`nav-item px-4 py-2 mx-1 rounded-xl font-medium text-secondary transition-all duration-200 relative focus-visible:outline-2 focus-visible:outline-primary focus-visible:bg-primary/10 ${active === link.name ? 'active bg-gradient-to-r from-primary to-secondary text-white shadow-xl' : 'hover:bg-primary/10 hover:text-primary'}`}
                tabIndex={0}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-1 rounded-full gradient-primary" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a href="#resume" className="block px-5 py-2 bg-primary text-white rounded-xl font-semibold shadow hover:bg-secondary transition-all duration-200 mt-2">Resume</a>
          </li>
        </ul>
      )}
      <style jsx>{`
        .navbar {
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 0 0 20px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          outline: none;
        }
        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
        .nav-item:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          background: rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </nav>
  );
} 