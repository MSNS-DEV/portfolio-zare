'use client';

import { profile, contactInfo } from '@/lib/content';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-paper-50 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-8 border-b border-paper-50/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-beacon-500 text-white flex items-center justify-center text-xs font-bold rounded-full">
                {profile.initials}
              </div>
              <span className="font-display font-bold">{profile.initials}</span>
            </div>
            <p className="text-sm text-paper-50/70">{profile.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-paper-50/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-paper-50 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-paper-50 transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="hover:text-paper-50 transition-colors"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-paper-50/70">
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper-50 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-paper-50 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-paper-50/70">
              <p>{contactInfo.location}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-paper-50/50">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p>Crafted with precision and care.</p>
        </div>
      </div>
    </footer>
  );
}
