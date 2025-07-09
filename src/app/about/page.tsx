import CompanyOverview from '@/components/about/company-overview';
import LeaderShipTeam from '@/components/about/leader-ship-team';
import OfficeLocationsPage from '@/components/about/office-locations-page';
import OurPriority from '@/components/about/our-priority';
import QualitySafetyPage from '@/components/about/quality-safety-page';

import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      <CompanyOverview />
      <LeaderShipTeam />
      <OurPriority />
      <OfficeLocationsPage />
      <QualitySafetyPage />
    </section>
  );
};

export default AboutPage;
