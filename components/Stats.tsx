'use client';

import { stats } from '@/lib/content';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-runway-700/5 border-y border-fog-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex items-baseline gap-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-ink-900/60 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
