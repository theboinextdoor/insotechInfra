'use client';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import Image from 'next/image';

export function AnimatedPinDemo({
  title,
  href,
  heading,
  about,
  image,
}: {
  title: string;
  href: string;
  heading: string;
  about: string;
  image: string;
}) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-800 line-clamp-2 ">{about}</span>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="service-image"
              fill
              priority
              className="object-contain mt-12 overflow-hidden"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
