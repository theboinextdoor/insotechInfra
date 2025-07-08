'use client';

import React, { useEffect, useState } from 'react';
import ContentHeading from '../home/content-heading';
import Image from 'next/image';
// import Image from 'next/image';

const CompanyOverview = () => {
  const images = [
    '/aboutPage.jpg',
    '/ap2.jpg',
    '/ap3.jpg',
    '/ap4.jpg',
    '/ap5.jpg',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full py-10 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentHeading
          heading="About Tough Team Infra"
          className="text-base font-semibold uppercase tracking-wide text-green-700"
          lineWidth={400}
        />

        <div className="mt-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-800 text-sm md:text-md leading-relaxed">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              <span className="block">Where</span>
              <span className="text-green-700">Vision Meets Structure</span>
            </h1>
            <div className="flex flex-col gap-6">
              <p>
                Welcome to <strong>TOUGH TEAM INFRA</strong>, a pioneering force
                in India’s infrastructure development. With over{' '}
                <strong>7+ years</strong> of unwavering commitment and
                expertise, we specialize in a diverse range of civil engineering
                services across PAN India.
              </p>
              <p>
                Our strong presence in <strong>Delhi</strong> and{' '}
                <strong>Mumbai</strong> marks our dedication to timely delivery,
                innovation, and long-lasting client relationships. From utility
                diversion to structural fabrication, we continually raise the
                bar for infrastructure excellence.
              </p>
              <p>
                <strong>TOUGH TEAM INFRA</strong> is more than just a
                construction firm — it’s a promise to build smarter, stronger,
                and more sustainable cities for tomorrow.
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 z-10 pointer-events-none" />
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                fill
                priority
                alt={`slide-${index}`}
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
            {/* Decorative glow */}
            {/* <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full blur-[80px] opacity-30 z-0 animate-pulse" />
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-300 rounded-full blur-[60px] opacity-30 z-0 animate-pulse delay-1000" />
          </div>  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
