'use client';

import { achievements } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200 } },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-runway-700/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Achievements" code="CERT-LIST" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              key={idx}
              className="flex gap-3 p-4 bg-white border border-fog-200 rounded-lg shadow-sm hover:shadow-md hover:border-beacon-500/30 transition-colors cursor-default"
            >
              <span className="text-beacon-500 font-bold text-lg flex-shrink-0">
                ✓
              </span>
              <p className="text-sm text-ink-900/70">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
