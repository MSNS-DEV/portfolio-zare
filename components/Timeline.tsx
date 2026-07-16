'use client';

import { education, experience } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function Timeline() {
  // Combine education and experience, already sorted in content.ts
  const timelineItems = [
    ...experience.map((item) => ({ ...item, type: 'experience' as const })),
    ...education.map((item) => ({ ...item, type: 'education' as const })),
  ];

  return (
    <section id="timeline" className="py-20 px-6 md:px-12 bg-runway-700/5">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Timeline" code="EDU-EXP" />

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-24 top-0 bottom-0 w-px bg-runway-700/20" />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-20 -translate-x-1/2 top-2 gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-beacon-500 border-2 border-paper-50" />
                </div>

                {/* Content */}
                <div className="md:ml-32">
                  <div className="bg-white border border-fog-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-ink-900">
                          {item.type === 'education' ? item.degree : item.role}
                        </h3>
                        <p className="text-sm text-runway-700 font-semibold">
                          {item.type === 'education'
                            ? item.institution
                            : item.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono-text text-xs text-beacon-500 font-bold">
                          {item.code}
                        </p>
                        <p className="font-mono-text text-xs text-ink-900/50 mt-1">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <p className="text-sm text-ink-900/70 mb-2">
                      {item.type === 'education'
                        ? item.focus
                        : item.details}
                    </p>

                    {item.type === 'experience' && (
                      <p className="text-xs text-ink-900/50 mt-2 italic">
                        {item.type === 'experience' && item.type && (
                          <>
                            <span className="capitalize font-semibold">
                              {(item as any).type}
                            </span>
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
