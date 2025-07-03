// import BgGradient from '@/components/common/BgGradient';
import AboutSection from '@/components/home/about-section';
import HeroSection from '@/components/home/hero-section';
import MissionAndValues from '@/components/home/mission-values';

export default function Home() {
  return (
    <div>
      {/* <BgGradient /> */}
      <HeroSection />
      <AboutSection />
      <MissionAndValues />
    </div>
  );
}
