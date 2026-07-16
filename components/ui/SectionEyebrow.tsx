'use client';

import { motion } from 'framer-motion';

interface SectionEyebrowProps {
  label: string;
  code?: string;
}

export function SectionEyebrow({ label, code }: SectionEyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="flex items-center gap-4 mb-10"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-runway-700/5 border border-runway-700/20 rounded-full shadow-3d-sm hover:bg-runway-700/10 hover:border-runway-700/30 transition-all duration-300 transform-style-3d">
        <span className="font-mono-text text-xs uppercase tracking-widest text-runway-700 font-semibold">
          {label}
        </span>
        {code && (
          <>
            <span className="text-runway-700/30">·</span>
            <span className="font-mono-text text-xs text-runway-700/60 font-semibold">{code}</span>
          </>
        )}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="h-[1px] flex-1 bg-gradient-to-r from-runway-700/25 to-transparent origin-left"
      />
    </motion.div>
  );
}
