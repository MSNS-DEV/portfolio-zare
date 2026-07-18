'use client';

import { useRef, useState } from 'react';
import { education, experience } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

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

  const openModal = (url: string, title: string) => {
    setModalImage(url);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle('');
  };

  return (
    <>
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
                        className="text-sm text-ink-900/70 mb-4 leading-relaxed"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        {item.type === 'education'
                          ? item.focus
                          : item.details}
                      </p>

                      {/* Interactive Button to View Certificate / Letter */}
                      {item.type === 'experience' && (item as any).image && (
                        <div className="mb-4" style={{ transform: "translateZ(12px)" }}>
                          <button
                            onClick={() => openModal((item as any).image, (item as any).documentLabel || (item as any).role)}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-runway-700/30 hover:border-runway-700 text-runway-700 hover:text-white text-xs font-semibold rounded-lg hover:bg-runway-700 transition-all shadow-3d-sm cursor-pointer"
                          >
                            <Eye size={14} />
                            <span>{(item as any).documentLabel || 'View Document'}</span>
                          </button>
                        </div>
                      )}

                      {/* Sub-role section (for nested HR Manager under Admin Officer) */}
                      {item.type === 'experience' && (item as any).subRole && (
                        <div 
                          className="bg-runway-700/5 rounded-lg p-4 mb-4 border border-runway-700/10"
                          style={{ transform: "translateZ(12px)" }}
                        >
                          <h4 className="font-semibold text-sm text-ink-900 mb-2">
                            {(item as any).subRole}
                          </h4>
                          <p className="text-xs text-ink-900/70 mb-3">
                            {(item as any).subDetails}
                          </p>
                          {(item as any).subImage && (
                            <div className="mt-2">
                              <button
                                onClick={() => openModal((item as any).subImage, (item as any).subDocumentLabel || (item as any).subRole)}
                                className="inline-flex items-center gap-2 px-3 py-1.5 border border-runway-700/30 hover:border-runway-700 text-runway-700 hover:text-white text-xs font-semibold rounded-lg hover:bg-runway-700 transition-all shadow-3d-sm cursor-pointer"
                              >
                                <Eye size={14} />
                                <span>{(item as any).subDocumentLabel || 'View Credentials'}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      )}

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

      {/* Lightbox / Modal for certificates and letters */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={24} />
            </button>

            {/* Modal Image Wrapper */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center select-none"
            >
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden border border-white/20 shadow-3d-lg bg-black/40">
                <img 
                  src={modalImage} 
                  alt={modalTitle}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-display font-bold text-xl text-white">
                  {modalTitle}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
