import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Timeline } from '@/components/Timeline';
import { Capabilities } from '@/components/Capabilities';
import { Achievements } from '@/components/Achievements';
import { Research } from '@/components/Research';
import { Gallery } from '@/components/Gallery';
import { ExposureWall } from '@/components/ExposureWall';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgressRail } from '@/components/ui/ScrollProgressRail';

export default function Home() {
  return (
    <>
      <ScrollProgressRail />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Capabilities />
        <Achievements />
        <Research />
        <Gallery />
        <ExposureWall />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
