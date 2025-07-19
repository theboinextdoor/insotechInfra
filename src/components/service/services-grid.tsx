'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { MotionDiv } from '../common/motion-wrapper';
import BgGradient from '../common/BgGradient';
import ContentHeading from '../home/content-heading';
import { AnimatedPinDemo } from '../home/animated-pin';

type Service = {
  id: number;
  heading: string;
  title: string;
  link: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'utility-diversion-works',
    heading: 'Utility Diversion Works',
    description:
      'Expert handling of electrical, water, sewer, and telecom diversion to support seamless urban development.',
    link: '/services/utility-diversion-works',
    image: '/utility-diversion.jpg',
  },
  {
    id: 2,
    title: 'civil-construction-works',
    heading: 'Civil Construction Works',
    description:
      'Comprehensive civil engineering services including excavation, concrete, shuttering, and finishing.',
    link: '/services/civil-construction-works',
    image: '/roadcons.jpg',
  },
  {
    id: 3,
    title: 'structural-retrofitting',
    heading: 'Structural Retrofitting',
    description:
      'Strengthening and upgrading existing structures for enhanced durability, safety, and compliance.',
    link: '/services/structural-retrofitting',
    image: '/fabri.jpg',
  },
  {
    id: 4,
    title: 'metro-rail-projects',
    heading: 'Metro Rail Projects',
    description:
      'Turnkey solutions for metro pillars, stations, track laying, and associated infrastructure.',
    link: '/services/metro-rail-projects',
    image: '/pipejacking.jpg',
  },
  {
    id: 5,
    title: 'pre-construction-planning',
    heading: 'Pre-Construction & Planning',
    description:
      'Technical surveys, planning, design validation, and coordination for smooth project execution.',
    link: '/services/pre-construction-planning',
    image: '/hdd.jpg',
  },
  {
    id: 6,
    title: 'cast-in-situ-structures',
    heading: 'Cast-in-situ Structures',
    description:
      'In-place concrete pouring for foundations, pillars, and custom infrastructure with high precision.',
    link: '/services/cast-in-situ-structures',
    image: '/cis.jpg',
  },
  {
    id: 7,
    title: 'fabrication-works',
    heading: 'Fabrication Works',
    description:
      'Steel fabrication services for PEBs, reinforcement cages, sheds, and other structural elements.',
    link: '/services/fabrication-works',
    image: '/fabri.jpg',
  },
  {
    id: 8,
    title: 'peb-works',
    heading: 'PEB Works',
    description:
      'Pre-engineered building solutions for warehouses, industrial units, and large-span structures.',
    link: '/services/peb-works',
    image: '/PEB.jpg',
  },
];

const ServiceGrid = () => {
  const [visibleCard, setVisibleCards] = useState(3);
  const cardsToShow = services.slice(0, visibleCard);

  const handleLoadMoreButton = () => {
    setVisibleCards((prev) => Math.min(prev + 3, services.length));
  };

  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BgGradient />

        <ContentHeading
          heading="Key Summary"
          className="bg-linear-to-r text-3xl lg:text-5xl from-slate-800 to-slate-500 font-condensed font-semibold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {cardsToShow.map((item) => (
            <AnimatedPinDemo
              key={item.id}
              title={item.title}
              href={`services/${item.title}`}
              heading={item.heading}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          {visibleCard < services.length && (
            <MotionDiv
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              className="mx-auto"
            >
              <Button
                variant="outline"
                onClick={handleLoadMoreButton}
                className="text-black text-lg lg:text-xl min-w-xs border-2 border-amber-300 px-8 py-6 bg-white shadow-lg hover:bg-amber-400 hover:text-white hover:shadow-2xl transition hover:no-underline"
              >
                <span className="font-condensed font-semibold">Load More</span>
                <ArrowRight className="ml-2 animate-pulse" />
              </Button>
            </MotionDiv>
          )}

          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <Button
              variant="link"
              className="text-black text-lg lg:text-xl border-2 border-amber-300 px-8 py-6 bg-white shadow-lg hover:bg-amber-400 hover:no-underline hover:text-white hover:shadow-2xl transition min-w-xs"
            >
              <Link href="/services" className="flex items-center gap-2">
                <span className="font-condensed font-semibold">View More</span>
                <ArrowRight className="animate-pulse" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
