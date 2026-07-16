'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  tilt?: boolean;
  tiltMax?: number; // max tilt in degrees
  scale?: number; // scale on hover
  depth?: number; // translateZ of children
  threshold?: number;
}

export function ScrollReveal3D({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  tilt = true,
  tiltMax = 10,
  scale = 1.02,
  depth = 30,
  threshold = -50,
}: ScrollReveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position relative to element center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt values
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to element top-left
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to range [-0.5, 0.5]
    const normalizedX = (mouseX / width) - 0.5;
    const normalizedY = (mouseY / height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Scroll reveal variants
  const getRevealVariants = () => {
    const offset = 40;
    const initialPos = {
      up: { y: offset, opacity: 0 },
      down: { y: -offset, opacity: 0 },
      left: { x: offset, opacity: 0 },
      right: { x: -offset, opacity: 0 },
      none: { opacity: 0, scale: 0.95 },
    };

    return {
      hidden: initialPos[direction],
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 20,
          delay: delay,
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: `${threshold}px` }}
      variants={getRevealVariants()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={tilt ? { scale: scale } : {}}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}
