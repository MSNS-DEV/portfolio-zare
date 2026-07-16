'use client';

import { skills, languages, specializations } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { DotRating } from '@/components/ui/DotRating';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Capabilities" code="SKILLS" />

        {/* Specializations Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {specializations.map((spec, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-fog-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:border-runway-700/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-3">
                {spec.icon === 'briefcase' && '💼'}
                {spec.icon === 'book' && '📚'}
                {spec.icon === 'compass' && '🧭'}
              </div>
              <h3 className="font-display font-bold text-ink-900 mb-2">
                {spec.title}
              </h3>
              <p className="text-sm text-ink-900/60">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical & Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-bold text-lg text-ink-900 mb-6 pb-3 border-b border-fog-200">
              Professional Skills
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skills.map((skill, idx) => (
                <motion.div variants={itemVariants} key={idx} className="flex justify-between items-center group">
                  <span className="text-sm font-medium text-ink-900 group-hover:text-runway-700 transition-colors">
                    {skill.name}
                  </span>
                  <DotRating dots={skill.dots} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-bold text-lg text-ink-900 mb-6 pb-3 border-b border-fog-200">
              Languages
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {languages.map((lang, idx) => (
                <motion.div variants={itemVariants} key={idx} className="flex justify-between items-center group">
                  <span className="text-sm font-medium text-ink-900 group-hover:text-runway-700 transition-colors">
                    {lang.name}
                  </span>
                  <DotRating dots={lang.dots} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
