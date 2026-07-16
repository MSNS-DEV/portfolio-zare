'use client';

import { useEffect, useState } from 'react';

export function ScrollProgressRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const scrollPercent = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-screen w-1 bg-fog-200 z-40 pointer-events-none">
      <div
        className="w-full bg-runway-700 transition-all duration-300"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
