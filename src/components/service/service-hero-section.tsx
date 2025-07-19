import Image from 'next/image';
import React from 'react';

const ServiceHeroSection = () => {
  return (
    <section className="relative">
      <div className="">
        <div className="w-full h-[300px] md:h-[500px]">
          <Image
            src="/servicepage.webp"
            alt="alt-page"
            layout="fill"
            objectFit="cover"
            className="brightness-75 "
            priority
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
          <div className="absolute inset-0 flex items-center justify-end flex-col text-center text-white p-4">
            <h1 className="text-4xl md:text-7xl font-bold font-condensed">
              Our Services
            </h1>
            <p className="mt-4 text-lg max-w-2xl font-barlow">
              Empowering infrastructure with precision, innovation, and
              excellence across civil, metro, and utility projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
