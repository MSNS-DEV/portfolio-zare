'use client';

import { profile, contactInfo } from '@/lib/content';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-paper-50 py-16 px-6 md:px-12 perspective-1000 overflow-hidden border-t border-paper-50/10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal3D tilt={false} direction="up" className="w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-12 pb-8 border-b border-paper-50/10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-9 h-9 bg-beacon-500 text-white flex items-center justify-center text-xs font-bold rounded-full cursor-pointer shadow-3d-sm"
                >
                  {profile.initials}
                </motion.div>
                <span className="font-display font-bold text-lg tracking-wider">{profile.initials}</span>
              </div>
              <p className="text-sm text-paper-50/70 leading-relaxed">{profile.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-beacon-500">Quick Links</h4>
              <ul className="space-y-2 text-sm text-paper-50/70">
                <li>
                  <a
                    href="#about"
                    className="hover:text-beacon-500 hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="hover:text-beacon-500 hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#capabilities"
                    className="hover:text-beacon-500 hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-beacon-500">Connect</h4>
              <ul className="space-y-2 text-sm text-paper-50/70">
                <li>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-beacon-500 hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-beacon-500 hover:translate-x-1 transition-all inline-block duration-200"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-beacon-500">Contact</h4>
              <div className="space-y-2 text-sm text-paper-50/70">
                <p className="hover:text-paper-50 transition-colors duration-200">{contactInfo.location}</p>
                <p className="hover:text-paper-50 transition-colors duration-200">{contactInfo.phone}</p>
                <p className="hover:text-paper-50 transition-colors duration-200">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </ScrollReveal3D>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-paper-50/40 gap-4">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="italic">Crafted with precision, strategy and care.</p>
        </div>
      </div>
    </footer>
  );
}
