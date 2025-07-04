import React from 'react';
import { MotionHr } from '../common/motion-wrapper';
import { AnimatedPinDemo } from './animated-pin';

const KeyService = () => {
  const serviceList = [
    {
      id: 1,
      heading: 'Utility Diversion Works',
      title: '/utility-diversion-works',
      link: '/services/utility-diversion-work',
      about:
        'Tough Team Infra specializes in the diversion of utilities such as sewer lines, water pipelines, storm water drains (SWD), electrical installations, and pre-fabricated buildings...',
    },
    {
      id: 2,
      heading: 'Pipe Jacking Method',
      title: '/pipe-jacking-method',
      link: '/services/pipe-jacking-method',
      about:
        'A hydraulic method for installing underground pipes by pushing pre-assembled sections through the ground from a drive shaft to a reception shaft...',
    },
    {
      id: 3,
      heading: 'Horizontal Directional Drilling (HDD)',
      title: '/horizontal-directional-drilling',
      link: '/services/hdd',
      about:
        'A steerable trenchless technique used to install underground pipes, conduits, and cables with minimal surface disruption...',
    },
    {
      id: 4,
      heading: 'PEB (Pre-Engineered Building) Works',
      title: '/pre-engineered-building',
      link: '/services/peb',
      about:
        'Tough Team Infra undertakes PEB works, including the construction of various structures...',
    },
    {
      id: 5,
      heading: 'Road Construction',
      title: '/road-construction',
      link: '/services/road-construction',
      about:
        'Tough Team Infra specializes in road construction. Their work includes repairing, widening, and upgrading roads...',
    },
    {
      id: 6,
      heading: 'Fabrication',
      title: '/fabrication',
      link: '/services/fabrication',
      about:
        'Tough Team Infra has expertise in fabrication. The company employs skilled fabricators, welders, and fitters...',
    },
    {
      id: 7,
      heading: 'Cast-in-situ Structures',
      title: 'cast-in-situ-structures',
      link: '/services/cast-in-situ',
      about: 'The company specializes in cast-in-situ structures...',
    },
  ];

  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-start gap-2 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Key Summary
          </h3>
          <MotionHr
            initial={{ width: 10 }}
            whileInView={{ width: 300 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-slate-300 hidden md:block"
          />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {serviceList.map((items) => (
            <AnimatedPinDemo
              key={items.id}
              title={items.heading}
              href={items.link}
              heading={items.heading}
              about={items.about}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyService;
