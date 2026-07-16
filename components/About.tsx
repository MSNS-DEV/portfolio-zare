'use client';

import { about } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="About" code="WHY-ME" />

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main intro */}
          <div className="md:col-span-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-ink-900/80 mb-8"
            >
              {about.intro}
            </motion.p>

            {/* Highlights box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-runway-700/5 border border-runway-700/20 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-display text-lg font-bold text-runway-700 mb-4">
                Why Work Together?
              </h3>
              <ul className="space-y-3">
                {about.highlights.map((highlight, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex gap-3 text-sm text-ink-900/70"
                  >
                    <span className="text-beacon-500 font-bold">✓</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Side info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:border-l border-fog-200 md:pl-8"
          >
            <h4 className="font-display font-bold text-ink-900 mb-4">
              Specializations
            </h4>
            <ul className="space-y-2 text-sm text-ink-900/60">
              {['✈️ Aviation & Ops', '👥 HR Strategy', '📊 Research Methods', '🎓 Education', '⚙️ QHSE Mgmt'].map((spec, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="hover:text-runway-700 hover:translate-x-1 transition-transform cursor-default"
                >
                  {spec}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
