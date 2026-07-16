'use client';

import { publications, aviationProjects, researchProjects } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';

export function Research() {
  return (
    <section id="research" className="py-20 px-6 md:px-12 perspective-2000 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Research" code="PROJECTS" />

        {/* Publications */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8 flex items-center gap-3">
            <span>International Publications</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-runway-700/20 to-transparent" />
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, idx) => (
              <ScrollReveal3D
                key={idx}
                delay={idx * 0.1}
                tiltMax={8}
                scale={1.03}
              >
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block card-3d-glass rounded-xl p-6 shadow-3d-sm hover:shadow-3d-md hover:border-runway-700 transition-all duration-300 transform-style-3d h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1" style={{ transform: "translateZ(20px)" }}>
                      <p className="font-mono-text text-xs text-runway-700 font-bold mb-1 uppercase tracking-wider">
                        {pub.journal}
                      </p>
                      <h4 className="font-display font-bold text-lg text-ink-900 group-hover:text-runway-700 transition-colors leading-tight">
                        {pub.title}
                      </h4>
                    </div>
                    <span 
                      className="text-beacon-500 text-xs font-mono-text font-bold ml-4 bg-beacon-500/10 px-2 py-0.5 rounded flex-shrink-0"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {pub.year}
                    </span>
                  </div>
                  <p 
                    className="text-xs text-ink-900/50 group-hover:text-runway-700 transition-colors mt-auto font-medium"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    View publication →
                  </p>
                </a>
              </ScrollReveal3D>
            ))}
          </div>
        </div>

        {/* Aviation Projects */}
        <div className="mb-20">
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8 flex items-center gap-3">
            <span>Aviation Projects</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-runway-700/20 to-transparent" />
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aviationProjects.map((project, idx) => (
              <ScrollReveal3D
                key={idx}
                delay={idx * 0.05}
                tiltMax={10}
                scale={1.02}
              >
                <div
                  className="bg-white border border-fog-200 rounded-xl p-6 shadow-3d-sm hover:shadow-3d-md hover:border-runway-700/30 transition-all duration-300 transform-style-3d h-full cursor-default"
                >
                  <div 
                    className="flex items-center gap-2 mb-3"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <span className="text-beacon-500 text-xl leading-none">✈️</span>
                    <h4 className="font-display font-bold text-lg text-ink-900 leading-tight">
                      {project.title}
                    </h4>
                  </div>
                  <p 
                    className="text-sm text-ink-900/60 leading-relaxed"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {project.description}
                  </p>
                </div>
              </ScrollReveal3D>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div>
          <h3 className="font-display font-bold text-2xl text-ink-900 mb-8 flex items-center gap-3">
            <span>Research Projects</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-runway-700/20 to-transparent" />
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, idx) => (
              <ScrollReveal3D
                key={idx}
                delay={idx * 0.05}
                tiltMax={10}
                scale={1.02}
              >
                <div
                  className="bg-white border border-fog-200 rounded-xl p-6 shadow-3d-sm hover:shadow-3d-md hover:border-runway-700/30 transition-all duration-300 transform-style-3d h-full cursor-default"
                >
                  <div 
                    className="flex items-center gap-2 mb-3"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <span className="text-beacon-500 text-xl leading-none">📊</span>
                    <h4 className="font-display font-bold text-lg text-ink-900 leading-tight">
                      {project.title}
                    </h4>
                  </div>
                  <p 
                    className="text-sm text-ink-900/60 leading-relaxed"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {project.description}
                  </p>
                </div>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
