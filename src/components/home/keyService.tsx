import React from 'react';
import { MotionHr } from '../common/motion-wrapper';

const KeyService = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 ">
        {/* Heading */}
        <div className="flex items-center justify-start gap-2 ">
          <h3 className="bg-linear-to-r from-slate-900 to-slate-700 text-transparent bg-clip-text py-2">
            Key Services
          </h3>
          <span>
            <MotionHr
              initial={{ width: 10 }}
              whileInView={{ width: 500 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-[3px] bg-slate-300 md:block hidden  "
            />
          </span>
        </div>

        {/* Content */}
        <div></div>
      </div>
    </section>
  );
};

export default KeyService;
