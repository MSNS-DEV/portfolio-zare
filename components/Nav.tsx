'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/content';

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
    <nav className="fixed top-0 left-4 right-4 z-50 h-16 flex items-center justify-between border-b border-fog-200 bg-paper-50/95 backdrop-blur-sm md:left-0 md:right-0 md:px-8">
      <button
        onClick={() => scrollToSection('hero')}
        className="flex items-center gap-2 font-display font-bold text-ink-900"
      >
        <div className="w-8 h-8 bg-runway-700 text-white flex items-center justify-center text-xs font-bold rounded-full">
          {profile.initials}
        </div>
      </button>

      <div className="hidden md:flex items-center gap-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-1.5 text-xs font-mono-text rounded-full transition-all ${
              activeSection === section.id
                ? 'bg-runway-700 text-white'
                : 'text-ink-900/60 hover:bg-fog-200'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <button className="md:hidden text-ink-900">☰</button>
    </nav>
  );
}
