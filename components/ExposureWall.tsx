'use client';

import { exposureProfile } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function ExposureWall() {
  return (
    <section id="exposure" className="py-20 px-6 md:px-12 bg-runway-700/5">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Network" code="PARTNERS" />

        <p className="text-lg text-ink-900/60 mb-12">
          Trusted by and affiliated with leading organizations across education,
          aviation, research, and industry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {exposureProfile.map((org, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-4 bg-white border border-fog-200 rounded-lg hover:shadow-md hover:border-runway-700 transition-all aspect-square"
            >
              <div className="text-center">
                <p className="font-mono-text text-xs font-bold text-runway-700">
                  {org.code}
                </p>
                <p className="text-xs text-ink-900/60 mt-1 line-clamp-2">
                  {org.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
