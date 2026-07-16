'use client';

import { useRef } from 'react';
import { education, experience } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion, useScroll, useSpring } from 'framer-motion';

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Combine education and experience, already sorted in content.ts
  const timelineItems = [
    ...experience.map((item) => ({ ...item, type: 'experience' as const })),
    ...education.map((item) => ({ ...item, type: 'education' as const })),
  ];

  // Scroll progress for vertical line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25
  });

  return (
    <section 
      ref={sectionRef}
      id="timeline" 
      className="py-20 px-6 md:px-12 bg-runway-700/5 overflow-hidden perspective-2000"
    >
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Timeline" code="EDU-EXP" />

        <div className="relative">
          {/* Vertical line that draws on scroll */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="hidden md:block absolute left-24 top-2 bottom-2 w-[2px] bg-runway-700/30" 
          />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 10 }}
                  className="hidden md:flex absolute left-24 -translate-x-1/2 top-4 z-10"
                >
                  <div className="w-4 h-4 rounded-full bg-beacon-500 border-4 border-paper-50 shadow-3d-sm animate-pulse" />
                </motion.div>

                {/* Content Card wrapped in 3D reveal */}
                <ScrollReveal3D
                  direction="left"
                  delay={0.1}
                  tiltMax={8}
                  scale={1.02}
                  className="md:ml-32"
                >
                  <div className="bg-white border border-fog-200 rounded-xl p-6 shadow-3d-sm hover:shadow-3d-md hover:border-runway-700/30 transition-all duration-300 transform-style-3d">
                    {/* Header row */}
                    <div 
                      className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink-900 leading-tight">
                          {item.type === 'education' ? item.degree : item.role}
                        </h3>
                        <p className="text-sm text-runway-700 font-semibold mt-1">
                          {item.type === 'education'
                            ? item.institution
                            : item.company}
                        </p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="font-mono-text text-xs text-beacon-500 font-bold uppercase tracking-wider">
                          {item.code}
                        </p>
                        <p className="font-mono-text text-xs text-ink-900/50 mt-1">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <p 
                      className="text-sm text-ink-900/70 mb-2 leading-relaxed"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {item.type === 'education'
                        ? item.focus
                        : item.details}
                    </p>

                    {item.type === 'experience' && (
                      <div 
                        className="text-xs text-ink-900/50 mt-4 pt-2 border-t border-fog-200 flex justify-between items-center"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <span className="capitalize font-semibold tracking-wider text-[10px] bg-runway-700/10 text-runway-700 px-2 py-0.5 rounded">
                          {(item as any).type}
                        </span>
                      </div>
                    )}
                  </div>
                </ScrollReveal3D>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
