'use client';

import { profile } from '@/lib/content';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center"
    >
      {/* Eyebrow */}
      <div className="mb-6 font-mono-text text-xs uppercase tracking-widest text-runway-700">
        <span className="bg-runway-700/10 px-3 py-1 rounded-full border border-runway-700/20 inline-block">
          Role Code → HR-MGT · AVIATION · LHR
        </span>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-6xl md:text-7xl font-bold text-ink-900 mb-4 text-balance">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-ink-900/70 mb-8 text-balance">
          {profile.tagline}
        </p>
        <p className="text-lg text-ink-900/60 max-w-2xl mb-12 leading-relaxed">
          {profile.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="#contact"
            className="px-8 py-3 bg-beacon-500 text-white font-semibold rounded-lg hover:bg-beacon-500/90 transition-all"
          >
            Get In Touch
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-runway-700 text-runway-700 font-semibold rounded-lg hover:bg-runway-700/5 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
        <p className="font-mono-text text-xs text-ink-900/50 uppercase tracking-widest">
          Scroll to explore
        </p>
        <svg
          className="w-5 h-5 text-runway-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
