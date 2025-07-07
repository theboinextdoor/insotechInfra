'use client';

import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import BgGradient from '../common/BgGradient';
import ContentHeading from './content-heading';

export function ClientMovingCard() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BgGradient gradient="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
        <ContentHeading
          heading="Trusted by Industry Leaders"
          className="bg-linear-to-r from-slate-800 to-slate-500 text-[16px]"
        />
        <div className="flex flex-col md:flex-row items-strat justify-between gap-0 md:gap-12">
          {/* Tagline */}
          <h1 className="text-3xl md:text-5xl flex-1 font-bold mt-4 leading-tight max-w-4xl bg-gradient-to-r from-orange-700 tracking-wide to-amber-300 bg-clip-text text-transparent">
            Your Vision, Our Expertise. A Partnership You Can Rely On.
          </h1>

          {/* brief explanation of work */}
          <div className="mt-8 space-y-6 flex-1 text-black/80 max-w-4xl text-base tracking-wide  leading-relaxed ">
            <p className="p-2">
              The consistent trust placed in us by our diverse client base
              stands as a testament to our unwavering commitment to quality,
              reliability, and professional excellence. We are dedicated to
              fostering long-term partnerships built on mutual respect and
              outstanding results.
            </p>
          </div>
        </div>
        <div className="h-[12rem] sm:h-[14rem] rounded-xl flex flex-col antialiased items-center justify-center relative overflow-hidden gap-4 p-4 ">
          <InfiniteMovingCards items={cards} direction="right" speed="fast" />
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    id: 1,
    img: '/afcons.png',
    alt: 'Afcons',
  },
  {
    id: 2,
    img: '/DMRC.png',
    alt: 'dmrc',
  },
  {
    id: 3,
    img: '/mmrda.png',
    alt: 'mmrda',
  },
  {
    id: 4,
    img: '/kec.png',
    alt: 'kec',
  },
  {
    id: 5,
    img: '/sp.png',
    alt: 'sp',
  },
  {
    id: 6,
    img: '/download.png',
    alt: 'mcgm',
  },
  {
    id: 7,
    img: '/jk.png',
    alt: 'Jk',
  },
];
