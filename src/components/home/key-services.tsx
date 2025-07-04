import React from 'react';
import { MotionDiv, MotionHr } from '../common/motion-wrapper';
import { AnimatedPinDemo } from './animated-pin';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BgGradient from '../common/BgGradient';

const KeyService = () => {
  const serviceList = [
    {
      id: 1,
      heading: 'Utility Diversion Works',
      title: '/utility-diversion-works',
      link: '/services/utility-diversion-work',
      about:
        'Tough Team Infra specializes in the diversion of utilities such as sewer lines, water pipelines, storm water drains (SWD), electrical installations, and pre-fabricated buildings...',
      image: '/utility-diversion.jpg',
    },
    {
      id: 2,
      heading: 'Pipe Jacking Method',
      title: '/pipe-jacking-method',
      link: '/services/pipe-jacking-method',
      about:
        'A hydraulic method for installing underground pipes by pushing pre-assembled sections through the ground from a drive shaft to a reception shaft...',
      image: '/pipejacking.jpg',
    },
    {
      id: 3,
      heading: 'Horizontal Directional Drilling (HDD)',
      title: '/horizontal-directional-drilling',
      link: '/services/horizontal-directional-drilling',
      about:
        'A steerable trenchless technique used to install underground pipes, conduits, and cables with minimal surface disruption...',
      image: '/hdd.jpg',
    },
    {
      id: 4,
      heading: 'PEB (Pre-Engineered Building) Works',
      title: '/pre-engineered-building',
      link: '/services/pre-engineered-building',
      about:
        'Tough Team Infra undertakes PEB works, including the construction of various structures...',
      image: '/PEB.jpg',
    },
    {
      id: 5,
      heading: 'Road Construction',
      title: '/road-construction',
      link: '/services/road-construction',
      about:
        'Tough Team Infra specializes in road construction. Their work includes repairing, widening, and upgrading roads...',
      image: '/roadcons.jpg',
    },
    {
      id: 6,
      heading: 'Fabrication',
      title: '/fabrication',
      link: '/services/fabrication',
      about:
        'Tough Team Infra has expertise in fabrication. The company employs skilled fabricators, welders, and fitters...',
      image: '/fabri.jpg',
    },
    {
      id: 7,
      heading: 'Cast-in-situ Structures',
      title: '/cast-in-situ-structures',
      link: '/services/cast-in-situ-structures',
      about: 'The company specializes in cast-in-situ structures...',
      image: '/cis.jpg',
    },
  ];

  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BgGradient />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {serviceList.map((items) => (
            <AnimatedPinDemo
              key={items.id}
              title={items.title}
              href={items.link}
              heading={items.heading}
              about={items.about}
              image={items.image}
            />
          ))}
        </div>

        {/* Button */}
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex justify-center "
        >
          <Button
            variant="link"
            className="text-gray-700 mt-6 text-base sm:text-lg lg:text-xl rounded-xl px-6 sm:px-10 lg:px-12 py-8 sm:py-7 lg:py-6 lg:mt-16 bg-transparent hover:shadow-2xl hover:shadow-gray-700 hover:no-underline shadow-lg "
          >
            <Link href="/about " className="flex gap-2 items-center">
              <span>View More</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
};

export default KeyService;
