'use client';

import { motion } from 'framer-motion';

interface DotRatingProps {
  dots: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function DotRating({ dots, max = 5, size = 'md' }: DotRatingProps) {
  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0.3 },
    show: (isActive: boolean) => ({
      scale: 1,
      opacity: 1,
      backgroundColor: isActive ? 'var(--color-beacon-500)' : 'var(--color-fog-200)',
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 10
      }
    })
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="flex gap-1"
    >
      {Array.from({ length: max }).map((_, i) => {
        const isActive = i < dots;
        return (
          <motion.div
            custom={isActive}
            variants={dotVariants}
            key={i}
            className={`rounded-full ${sizes[size]} shadow-3d-sm`}
          />
        );
      })}
    </motion.div>
  );
}
