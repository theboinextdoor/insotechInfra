import React from 'react';
import { MotionHr } from '../common/motion-wrapper';

const WhatWeBuild = () => {
  return (
    <section className="relative bg-[#36383D]">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        {/* Heading */}
        <div className="flex items-center justify-start gap-2 ">
          <h3 className="bg-linear-to-r from-amber-300 to-yellow-500 text-transparent bg-clip-text py-2 text-[20px]">
            Delivering Complex Projects with Precision
          </h3>
          <span>
            <MotionHr
              initial={{ width: 10 }}
              whileInView={{ width: 500 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-[3px] bg-amber-300 md:block hidden  "
            />
          </span>
        </div>
        {/* Tag Line */}
        <div className="flex items-center justify-start  mt-4">
          <div className="grid grid-rows-2 lg:grid-cols-2 items-start justify-end gap-6 lg:gap-30">
            <h3 className=" py-2 text-white text-5xl">
              Reliable, Sustainable, Future-Ready Infrastructure
            </h3>
            <p className="text-sm text-white">
              Tough Team Infra stands as a trusted name in India’s construction
              industry, delivering critical infrastructure solutions with
              precision and innovation. From metro projects to utility works, we
              combine expertise, technology, and a skilled workforce to ensure
              safe, sustainable, and future-ready developments that elevate
              communities across the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
