import CompanyOverview from '@/components/about/company-overview';
import OurPriority from '@/components/about/our-priority';
import BgGradient from '@/components/common/BgGradient';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      <BgGradient />
      <CompanyOverview />
      <OurPriority />
      {/* <LeaderShipTeam />
      <OrganizationalStructure />
      <CommitmenttoQualitySafety /> */}
    </section>
  );
};

export default AboutPage;
