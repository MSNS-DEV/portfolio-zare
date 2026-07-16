'use client';

import { about } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="About" code="WHY-ME" />

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main intro */}
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink-900/80 mb-8">
              {about.intro}
            </p>

            {/* Highlights box */}
            <div className="bg-runway-700/5 border border-runway-700/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold text-runway-700 mb-4">
                Why Work Together?
              </h3>
              <ul className="space-y-3">
                {about.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-ink-900/70">
                    <span className="text-beacon-500 font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side info */}
          <div className="md:border-l border-fog-200 md:pl-8">
            <h4 className="font-display font-bold text-ink-900 mb-4">
              Specializations
            </h4>
            <ul className="space-y-2 text-sm text-ink-900/60">
              <li>✈️ Aviation & Ops</li>
              <li>👥 HR Strategy</li>
              <li>📊 Research Methods</li>
              <li>🎓 Education</li>
              <li>⚙️ QHSE Mgmt</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
