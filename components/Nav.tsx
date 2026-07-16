'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/content';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'research', label: 'Research' },
  { id: 'exposure', label: 'Network' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between border-b border-fog-200 bg-paper-50/80 backdrop-blur-md px-4 md:px-8 shadow-sm"
    >
      <button
        onClick={() => scrollToSection('hero')}
        className="flex items-center gap-2 font-display font-bold text-ink-900 group"
      >
        <div className="w-8 h-8 bg-runway-700 text-white flex items-center justify-center text-xs font-bold rounded-full group-hover:scale-105 group-hover:bg-beacon-500 transition-all duration-300">
          {profile.initials}
        </div>
      </button>

      <div className="hidden md:flex items-center gap-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative px-4 py-1.5 text-xs font-mono-text rounded-full transition-colors ${
              activeSection === section.id
                ? 'text-white'
                : 'text-ink-900/60 hover:text-ink-900 hover:bg-fog-200'
            }`}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="active-nav-pill"
                className="absolute inset-0 bg-runway-700 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </button>
        ))}
      </div>

      <button className="md:hidden text-ink-900">☰</button>
    </motion.nav>
  );
}
