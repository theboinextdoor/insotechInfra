'use client';
import React, { useState } from 'react';
import ContentHeading from './content-heading';
import { MotionHr } from '../common/motion-wrapper';

const WhatWeBuild = () => {
  const [activeLink, setActiveLink] = useState<string>(
    'Utility Diversion Work'
  );

  const menuItems = ['Utility Diversion Work', 'PEB Works'];

  return (
    <section className="relative w-full py-4 md:py-10 xl:py-14 bg-[#36383D] overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[85rem] mx-auto mt-12 px-4 sm:px-6 lg:px-8 2xl:px-12 text-left">
        {/* Heading Line & Label */}
        <ContentHeading
          heading="What We Build"
          className="text-white/70 text-[16px]"
        />

        <div className="flex flex-col md:flex-row items-end justify-between gap-0 md:gap-12">
          {/* Tagline */}
          <h1 className="text-3xl md:text-5xl flex-1 font-bold mt-4 leading-tight max-w-4xl bg-gradient-to-r from-orange-700 to-amber-300 bg-clip-text text-transparent">
            Transforming Challenges into Lasting Infrastructure
          </h1>

          {/* brief explanation of work */}
          <div className="mt-8 space-y-6 flex-1 text-white/80 max-w-4xl text-base  leading-relaxed ">
            <p className="p-2">
              Tough Team Infra stands as a trusted name in India’s construction
              industry, delivering critical infrastructure solutions with
              precision and innovation. From metro projects to utility works, we
              combine expertise, technology, and a skilled workforce to ensure
              safe, sustainable, and future-ready developments that elevate
              communities across the nation
            </p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mt-6 mx-auto">
          <div className="flex items-center gap-6 text-white">
            {menuItems.map((item) => (
              <div key={item}>
                <h3
                  className={`text-[17px] sm:text-[19px] md:text-lg cursor-pointer transition ${
                    activeLink === item
                      ? 'text-amber-400 '
                      : 'hover:text-amber-300'
                  }`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </h3>
                {activeLink === item && (
                  <MotionHr
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7 }}
                    className="h-[2px] bg-amber-400 mt-1 origin-left w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
