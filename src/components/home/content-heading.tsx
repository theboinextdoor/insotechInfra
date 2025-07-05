import React from 'react';
import { MotionHr } from '../common/motion-wrapper';
import { cn } from '@/lib/utils';

interface ContentProps {
  heading: string;
  className?: string;
}

const ContentHeading = ({ heading, className }: ContentProps) => {
  return (
    <div className="flex items-center justify-start gap-2 ">
      <div className="md:hidden h-[2px] w-16 bg-yellow-400" />
      <h3
        className={cn(
          'bg-linear-to-r from-slate-700 to-amber-700 text-transparent bg-clip-text py-2',
          className
        )}
      >
        {heading}
      </h3>
      <span>
        <MotionHr
          initial={{ width: 10 }}
          whileInView={{ width: 500 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="hidden sm:block h-[3px] bg-amber-300 md:block  "
        />
      </span>
    </div>
  );
};

export default ContentHeading;
