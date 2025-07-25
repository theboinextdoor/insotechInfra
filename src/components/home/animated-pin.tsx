'use client';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import Image from 'next/image';

interface AnimatedPinProps {
  title: string;
  href: string;
  heading: string;
  description: string;
  image: string;
}
export function AnimatedPinDemo({
  title,
  href,
  heading,
  description,
  image,
}: AnimatedPinProps) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-wide text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-800 font-condensed ">
            {heading}
          </h3>

          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-800 line-clamp-3 font-barlow leading-6">
              {description}
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4">
            <Image
              src={image}
              alt="service-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
