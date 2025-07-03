import React from 'react';
import { MotionHr } from '../common/motion-wrapper';

const MissionAndValues = () => {
  return (
    <section className="relative bg-slate-700">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 ">
        {/* Heading */}
        <div className="flex items-center justify-start gap-2 ">
          <h3 className="bg-linear-to-r from-orange-700 to-amber-400 text-transparent bg-clip-text py-2">
            Mission and Values
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
      </div>
    </section>
  );
};

export default MissionAndValues;
