'use client';

import { achievements } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion } from 'framer-motion';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-runway-700/5 overflow-hidden perspective-2000">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Achievements" code="CERT-LIST" />

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => (
            <ScrollReveal3D
              key={idx}
              delay={idx * 0.05}
              tiltMax={6}
              scale={1.02}
              direction="up"
              className="h-full"
            >
              <div 
                className="flex gap-3 p-5 bg-white border border-fog-200 rounded-xl shadow-3d-sm hover:shadow-3d-md hover:border-beacon-500/30 transition-all duration-300 transform-style-3d h-full cursor-default"
              >
                {/* Custom animated checkmark svg */}
                <div className="flex-shrink-0 mt-0.5" style={{ transform: "translateZ(20px)" }}>
                  <svg className="w-5 h-5 text-beacon-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (idx * 0.05) }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p 
                  className="text-sm text-ink-900/70 leading-relaxed font-medium"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {achievement}
                </p>
              </div>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
