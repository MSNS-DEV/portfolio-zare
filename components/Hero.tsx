'use client';

import { profile } from '@/lib/content';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-runway-700/5 blur-[100px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-beacon-500/5 blur-[100px]" 
        />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show"
        className="max-w-4xl mb-12 relative z-10"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-6 font-mono-text text-xs uppercase tracking-widest text-runway-700">
          <span className="bg-runway-700/10 px-3 py-1 rounded-full border border-runway-700/20 inline-block shadow-sm">
            Role Code → HR-MGT · AVIATION · LHR
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-display font-bold text-ink-900 mb-6 text-balance tracking-tight">
          {profile.name}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-ink-900/80 mb-8 text-balance font-light">
          {profile.tagline}
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-ink-900/60 max-w-2xl mb-12 leading-relaxed">
          {profile.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
          <Link
            href="#contact"
            className="group relative px-8 py-3 bg-beacon-500 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-beacon-500/30 transition-all duration-300"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-runway-700 text-runway-700 font-semibold rounded-lg hover:bg-runway-700 hover:text-white transition-all duration-300 shadow-sm"
          >
            LinkedIn Profile
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-20 flex flex-col items-center gap-2 animate-bounce relative z-10"
      >
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
      </motion.div>
    </section>
  );
}
