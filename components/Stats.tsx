'use client';

import { stats } from '@/lib/content';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';

export function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-runway-700/5 border-y border-fog-200 perspective-1000">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal3D
              key={idx}
              delay={idx * 0.1}
              tiltMax={12}
              scale={1.05}
              className="h-full"
            >
              <div className="flex flex-col gap-3 p-6 rounded-xl bg-white border border-fog-200 shadow-3d-sm hover:shadow-3d-md hover:border-runway-700/30 transition-all duration-300 transform-style-3d h-full">
                <div 
                  className="flex items-baseline gap-1"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p 
                  className="text-sm text-ink-900/60 leading-relaxed"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
