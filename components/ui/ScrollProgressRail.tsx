'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  
  // Create a smooth spring animation for scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-0 top-0 h-screen w-1.5 bg-fog-200/40 z-40 pointer-events-none">
      <motion.div
        className="w-full h-full bg-gradient-to-b from-runway-700 via-beacon-500 to-runway-700 origin-top shadow-[0_0_8px_rgba(201,122,61,0.5)]"
        style={{ scaleY }}
      />
    </div>
  );
}
