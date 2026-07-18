'use client';

import { exposureProfile, exposureImages } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import Image from 'next/image';

export function ExposureWall() {
  return (
    <section id="exposure" className="py-20 px-6 md:px-12 bg-runway-700/5 perspective-2000 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow label="Network" code="PARTNERS" />

        <p className="text-lg text-ink-900/60 mb-12 max-w-2xl leading-relaxed">
          Trusted by and affiliated with leading organizations across education,
          aviation, research, and industry.
        </p>

        {/* Network / collaboration images */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {exposureImages.map((img, idx) => (
            <ScrollReveal3D key={idx} tiltMax={6} scale={1.02} delay={idx * 0.1}>
              <div className="relative rounded-xl overflow-hidden aspect-[16/7] shadow-3d-sm hover:shadow-3d-md transition-all duration-300 group">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs text-white/90 font-semibold">
                  {img.alt.split('—')[0].trim()}
                </p>
              </div>
            </ScrollReveal3D>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {exposureProfile.map((org, idx) => (
            <ScrollReveal3D
              key={idx}
              delay={(idx % 7) * 0.05}
              tiltMax={15}
              scale={1.08}
              direction="up"
            >
              <div
                className="flex items-center justify-center p-4 bg-white border border-fog-200 rounded-xl hover:shadow-3d-md hover:border-runway-700 transition-all duration-300 transform-style-3d aspect-square cursor-default shadow-3d-sm"
              >
                <div className="text-center" style={{ transform: "translateZ(20px)" }}>
                  <p className="font-mono-text text-xs font-bold text-runway-700 uppercase tracking-wide">
                    {org.code}
                  </p>
                  <p className="text-xs text-ink-900/60 mt-1 line-clamp-2 leading-tight font-medium">
                    {org.name}
                  </p>
                </div>
              </div>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
