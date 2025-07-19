import ServiceHeroSection from '@/components/service/service-hero-section';
import ServiceInfographics from '@/components/service/service-infographics';
import ServiceGrid from '@/components/service/services-grid';

import React from 'react';

const OperationPage = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeroSection />
      <ServiceGrid />
      <ServiceInfographics />
      {/* <ServiceCTASection />
   
    <ContactBanner /> */}
    </div>
  );
};

export default OperationPage;
