'use client';

import { achievements } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-runway-700/5">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Achievements" code="CERT-LIST" />

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="flex gap-3 p-4 bg-white border border-fog-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-beacon-500 font-bold text-lg flex-shrink-0">
                ✓
              </span>
              <p className="text-sm text-ink-900/70">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
