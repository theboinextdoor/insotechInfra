// import BgGradient from '@/components/common/BgGradient';
import AboutSection from '@/components/home/about-section';
import { ClientMovingCard } from '@/components/home/client-moving-card';

import HeroSection from '@/components/home/hero-section';
import KeyService from '@/components/home/key-services';

import MissionAndValues from '@/components/home/mission-values';
import WhatWeBuild from '@/components/home/what-we-build';

export default function Home() {
  return (
    <div>
      {/* <BgGradient /> */}
      <HeroSection />
      <AboutSection />
      <MissionAndValues />
      <KeyService />
      <WhatWeBuild />
      <ClientMovingCard />
    </div>
  );
}
