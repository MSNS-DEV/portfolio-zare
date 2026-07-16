'use client';

import { about } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 overflow-hidden perspective-1000">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="About" code="WHY-ME" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Main intro & Highlights */}
          <div className="md:col-span-2 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-ink-900/80"
            >
              {about.intro}
            </motion.p>

            {/* Highlights box wrapped in 3D tilt */}
            <ScrollReveal3D tiltMax={8} scale={1.01} className="w-full">
              <div 
                className="card-3d-glass rounded-xl p-8 shadow-3d-md hover:shadow-3d-lg transform-style-3d border border-runway-700/20"
              >
                <h3 
                  className="font-display text-xl font-bold text-runway-700 mb-6"
                  style={{ transform: "translateZ(30px)" }}
                >
                  Why Work Together?
                </h3>
                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {about.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx} 
                      variants={itemVariants}
                      className="flex gap-3 text-sm text-ink-900/70 items-start"
                    >
                      <span className="text-beacon-500 font-bold text-lg leading-none">✓</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Side info / Specializations */}
          <ScrollReveal3D tiltMax={12} direction="right" className="w-full">
            <div 
              className="bg-white border border-fog-200 shadow-3d-sm hover:shadow-3d-md rounded-xl p-6 md:pl-8 transform-style-3d"
            >
              <h4 
                className="font-display font-bold text-ink-900 text-lg mb-6 pb-2 border-b border-fog-200"
                style={{ transform: "translateZ(25px)" }}
              >
                Specializations
              </h4>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 text-sm text-ink-900/60"
                style={{ transform: "translateZ(15px)" }}
              >
                {['✈️ Aviation & Ops', '👥 HR Strategy', '📊 Research Methods', '🎓 Education', '⚙️ QHSE Mgmt'].map((spec, i) => (
                  <motion.li 
                    key={i}
                    variants={itemVariants}
                    className="hover:text-runway-700 hover:translate-x-2 transition-all cursor-default flex items-center gap-2 font-medium"
                  >
                    <span>{spec}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
}
