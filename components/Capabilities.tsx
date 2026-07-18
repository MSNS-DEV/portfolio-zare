'use client';

import { skills, languages, specializations } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { DotRating } from '@/components/ui/DotRating';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 md:px-12 overflow-hidden perspective-2000">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Capabilities" code="SKILLS" />

        {/* Specializations Cards — now with images */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {specializations.map((spec, idx) => (
            <ScrollReveal3D
              key={idx}
              delay={idx * 0.1}
              tiltMax={12}
              scale={1.03}
              className="h-full"
            >
              <div className="bg-white border border-fog-200 rounded-xl overflow-hidden shadow-3d-sm hover:shadow-3d-md hover:border-runway-700/30 transition-all duration-300 transform-style-3d h-full cursor-default group">
                {/* Specialization image */}
                {spec.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div 
                    className="text-4xl mb-4"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {spec.icon === 'briefcase' && '💼'}
                    {spec.icon === 'book' && '📚'}
                    {spec.icon === 'compass' && '🧭'}
                  </div>
                  <h3 
                    className="font-display font-bold text-xl text-ink-900 mb-3"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {spec.title}
                  </h3>
                  <p 
                    className="text-sm text-ink-900/60 leading-relaxed"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {spec.description}
                  </p>
                </div>
              </div>
            </ScrollReveal3D>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Technical & Professional Skills */}
          <ScrollReveal3D direction="left" tilt={false} className="w-full">
            <div className="bg-white border border-fog-200 shadow-3d-sm rounded-xl p-8">
              <h3 className="font-display font-bold text-xl text-ink-900 mb-8 pb-3 border-b border-fog-200 flex justify-between items-center">
                <span>Professional Skills</span>
                <span className="font-mono-text text-[10px] text-runway-700/50">PRO-MGT</span>
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {skills.map((skill, idx) => (
                  <motion.div 
                    variants={itemVariants} 
                    key={idx} 
                    className="flex justify-between items-center group"
                  >
                    <span className="text-sm font-medium text-ink-900/80 group-hover:text-runway-700 group-hover:translate-x-1 transition-all duration-300">
                      {skill.name}
                    </span>
                    <div className="flex-shrink-0">
                      <DotRating dots={skill.dots} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal3D>

          {/* Languages */}
          <ScrollReveal3D direction="right" tilt={false} className="w-full">
            <div className="bg-white border border-fog-200 shadow-3d-sm rounded-xl p-8">
              <h3 className="font-display font-bold text-xl text-ink-900 mb-8 pb-3 border-b border-fog-200 flex justify-between items-center">
                <span>Languages</span>
                <span className="font-mono-text text-[10px] text-runway-700/50">LANG-5</span>
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {languages.map((lang, idx) => (
                  <motion.div 
                    variants={itemVariants} 
                    key={idx} 
                    className="flex justify-between items-center group"
                  >
                    <span className="text-sm font-medium text-ink-900/80 group-hover:text-runway-700 group-hover:translate-x-1 transition-all duration-300">
                      {lang.name}
                    </span>
                    <div className="flex-shrink-0">
                      <DotRating dots={lang.dots} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
}
