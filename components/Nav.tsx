'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

        {/* Desktop Menu */}
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

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-ink-900 p-2 hover:bg-fog-200 rounded-full transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink-900/30 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-paper-50 border-l border-fog-200 shadow-2xl p-6 flex flex-col md:hidden"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-fog-200">
                <span className="font-display font-bold text-ink-900 text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:bg-fog-200 rounded-full text-ink-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-2 overflow-y-auto pr-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-4 py-3 text-sm font-mono-text rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-runway-700 text-white font-medium shadow-sm'
                        : 'text-ink-900/70 hover:bg-fog-200 hover:text-ink-900'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Footer inside drawer */}
              <div className="mt-auto pt-6 border-t border-fog-200 text-center">
                <span className="text-xs font-mono-text text-ink-900/40">
                  © {new Date().getFullYear()} {profile.initials}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
