'use client';

import { gallery } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import Image from 'next/image';
import { useState } from 'react';

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-paper-50 perspective-2000 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionEyebrow label="Visual Journey" code="GALLERY" />

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink-900 mb-6 text-balance">
            Moments of Growth & Achievement
          </h2>
          <p className="text-lg text-ink-900/60 max-w-2xl leading-relaxed">
            A visual chronicle of academic leadership, professional development, and meaningful engagements across aviation education, research, and institutional development at University of Sialkot and beyond.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {gallery.map((item, idx) => (
            <ScrollReveal3D
              key={item.id}
              delay={(idx % 4) * 0.05}
              tiltMax={8}
              scale={1.04}
              direction="up"
            >
              <div
                className={`${item.span} relative group overflow-hidden rounded-2xl cursor-pointer shadow-3d-sm hover:shadow-3d-lg transition-all duration-500 h-full transform-style-3d`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono-text uppercase tracking-wider text-beacon-500 font-bold">
                        {item.category}
                      </span>
                      <div className="flex-grow h-px bg-white/20" />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Border Accent */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none" />
              </div>
            </ScrollReveal3D>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-20 pt-12 border-t border-fog-200 grid grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-display font-bold text-beacon-500 mb-2">
              18+
            </p>
            <p className="text-sm text-ink-900/60 font-medium">
              Professional Moments
            </p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold text-beacon-500 mb-2">
              10+
            </p>
            <p className="text-sm text-ink-900/60 font-medium">
              Years of Experience
            </p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold text-beacon-500 mb-2">
              5
            </p>
            <p className="text-sm text-ink-900/60 font-medium">
              Key Categories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
