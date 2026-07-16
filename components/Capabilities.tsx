'use client';

import { skills, languages, specializations } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { DotRating } from '@/components/ui/DotRating';

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Capabilities" code="SKILLS" />

        {/* Specializations Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {specializations.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white border border-fog-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-3">
                {spec.icon === 'briefcase' && '💼'}
                {spec.icon === 'book' && '📚'}
                {spec.icon === 'compass' && '🧭'}
              </div>
              <h3 className="font-display font-bold text-ink-900 mb-2">
                {spec.title}
              </h3>
              <p className="text-sm text-ink-900/60">{spec.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical & Professional Skills */}
          <div>
            <h3 className="font-display font-bold text-lg text-ink-900 mb-6 pb-3 border-b border-fog-200">
              Professional Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-ink-900">
                    {skill.name}
                  </span>
                  <DotRating dots={skill.dots} />
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-display font-bold text-lg text-ink-900 mb-6 pb-3 border-b border-fog-200">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-ink-900">
                    {lang.name}
                  </span>
                  <DotRating dots={lang.dots} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
