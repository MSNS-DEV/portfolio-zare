'use client';

import { publications, aviationProjects, researchProjects } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import Link from 'next/link';

export function Research() {
  return (
    <section id="research" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Research" code="PROJECTS" />

        {/* Publications */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8">
            International Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, idx) => (
              <a
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-fog-200 rounded-lg p-6 hover:shadow-lg hover:border-runway-700 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <p className="font-mono-text text-xs text-runway-700 font-semibold mb-1">
                      {pub.journal}
                    </p>
                    <h4 className="font-display font-bold text-ink-900 group-hover:text-runway-700 transition-colors">
                      {pub.title}
                    </h4>
                  </div>
                  <span className="text-beacon-500 text-xs font-semibold ml-2 flex-shrink-0">
                    {pub.year}
                  </span>
                </div>
                <p className="text-xs text-ink-900/50">View publication →</p>
              </a>
            ))}
          </div>
        </div>

        {/* Aviation Projects */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8">
            Aviation Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aviationProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-fog-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-beacon-500 text-lg">✈️</span>
                  <h4 className="font-display font-bold text-ink-900">
                    {project.title}
                  </h4>
                </div>
                <p className="text-sm text-ink-900/60">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div>
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8">
            Research Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-fog-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-beacon-500 text-lg">📊</span>
                  <h4 className="font-display font-bold text-ink-900">
                    {project.title}
                  </h4>
                </div>
                <p className="text-sm text-ink-900/60">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
