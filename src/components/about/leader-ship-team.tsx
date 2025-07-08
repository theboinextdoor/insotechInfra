import React from 'react';
import BgGradient from '../common/BgGradient';
import ContentHeading from '../home/content-heading';

const LeaderShipTeam = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BgGradient />
        <ContentHeading
          heading="Our Priority"
          className="bg-linear-to-r text-[19px] from-slate-800 to-slate-700"
        />
      </div>
    </section>
  );
};

export default LeaderShipTeam;
