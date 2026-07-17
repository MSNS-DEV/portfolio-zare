'use client';

import { useRef } from 'react';
import { profile } from '@/lib/content';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scrolling hooks
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yBlob2 = useTransform(scrollY, [0, 800], [0, 120]);
  const yText = useTransform(scrollY, [0, 800], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);

  // Mouse tilt values for 3D card layout
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 150 };
  const rotateX = useSpring(tiltX, springConfig);
  const rotateY = useSpring(tiltY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse relative to center of screen
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Convert to max tilt angles (-10deg to 10deg)
    tiltX.set(-(mouseY / (height / 2)) * 8);
    tiltY.set((mouseX / (width / 2)) * 8);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // Name animation variants
  const nameLetterVariants = {
    hidden: { y: 50, opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.03,
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden perspective-2000"
    >
      {/* Background ambient blobs with scroll parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-runway-700/8 blur-[120px] animate-float-slow" 
        />
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute top-[45%] -left-[10%] w-[500px] h-[500px] rounded-full bg-beacon-500/8 blur-[120px] animate-float-medium" 
        />
        
        {/* Modern 3D Floating SVG Shapes */}
        <motion.div
          animate={{ rotate: 360, y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 opacity-10 hidden lg:block"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="var(--color-runway-700)" strokeWidth="1" strokeDasharray="5 5" />
            <polygon points="60,10 110,90 10,90" stroke="var(--color-beacon-500)" strokeWidth="1.5" />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360, x: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 opacity-10 hidden lg:block"
        >
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <rect x="25" y="25" width="100" height="100" stroke="var(--color-runway-700)" strokeWidth="1" />
            <line x1="0" y1="0" x2="150" y2="150" stroke="var(--color-beacon-500)" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      <motion.div 
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          y: yText,
          opacity: opacityText
        }}
        variants={containerVariants} 
        initial="hidden" 
        animate="show"
        className="max-w-4xl mb-12 relative z-10 mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div 
          variants={itemVariants} 
          style={{ transform: "translateZ(30px)" }}
          className="mb-6 font-mono-text text-xs uppercase tracking-widest text-runway-700"
        >
          <span className="bg-runway-700/10 px-4 py-1.5 rounded-full border border-runway-700/20 inline-block shadow-3d-sm backdrop-blur-sm">
            Role Code → QHSE · HRM · AVIATION · UK
          </span>
        </motion.div>

        {/* 3D Character reveal for name */}
        <h1 className="text-6xl md:text-8xl font-display font-bold text-ink-900 mb-6 tracking-tight flex flex-wrap gap-x-4 select-none leading-none">
          {profile.name.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="flex overflow-hidden" style={{ transform: "translateZ(60px)" }}>
              {word.split("").map((letter, letterIdx) => {
                const globalIdx = wordIdx * 10 + letterIdx;
                return (
                  <motion.span
                    custom={globalIdx}
                    variants={nameLetterVariants}
                    key={letterIdx}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>
        
        <motion.p 
          variants={itemVariants} 
          style={{ transform: "translateZ(40px)" }}
          className="text-2xl md:text-3xl text-ink-900/80 mb-8 text-balance font-light leading-snug"
        >
          {profile.tagline}
        </motion.p>
        
        <motion.p 
          variants={itemVariants} 
          style={{ transform: "translateZ(30px)" }}
          className="text-lg text-ink-900/60 max-w-2xl mb-12 leading-relaxed"
        >
          {profile.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={itemVariants} 
          style={{ transform: "translateZ(50px)" }}
          className="flex gap-4 flex-wrap"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-3.5 bg-beacon-500 text-white font-semibold rounded-lg overflow-hidden shadow-3d-md hover:shadow-3d-lg hover:scale-105 active:scale-95 transition-all duration-300 transform-style-3d"
          >
            <span className="relative z-10 inline-block group-hover:translate-z-[10px] transition-transform">Get In Touch</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-runway-700 text-runway-700 font-semibold rounded-lg hover:bg-runway-700 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-3d-sm hover:shadow-3d-md inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn Profile
          </a>
          <a
            href={profile.resume}
            download
            className="px-8 py-3.5 border border-beacon-500/50 text-beacon-500 font-semibold rounded-lg hover:bg-beacon-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-3d-sm hover:shadow-3d-md inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ y: yText }}
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
