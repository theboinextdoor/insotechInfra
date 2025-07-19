'use client';

import React, { useEffect, useState } from 'react';
import ContentHeading from '../home/content-heading';
import Image from 'next/image';
import BgGradient from '../common/BgGradient';
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
      <BgGradient gradient="bg-gradient-to-r from-red-300 via-emrald-400 to-pink-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentHeading
          heading="About Tough Team Infra"
          className="text-base font-semibold uppercase tracking-wide text-green-700 font-barlow "
          lineWidth={400}
        />

        <div className="mt-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-gray-950 text-sm md:text-md leading-relaxed">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
              <span className="block">Where</span>
              <span className="text-green-700">Vision Meets Structure</span>
            </h1>
            <div className="flex flex-col gap-6 leading-6 font-normal text-[16px]">
              <p>
                Absolutely! Building on the strong foundation you&apos;ve
                provided, here are some additional lines that emphasize{' '}
                <strong>TOUGH TEAM INFRA&apos;s</strong> core strengths and
                vision:
              </p>
              <p>
                At <strong>TOUGH TEAM INFRA</strong>, our success is built on a
                foundation of uncompromised quality, meticulous planning, and
                rigorous safety standards. We leverage cutting-edge technology
                and innovative methodologies to transform ambitious blueprints
                into tangible realities, ensuring every project, regardless of
                its scale, is executed with precision and efficiency.
              </p>
              <p>
                Our team of seasoned engineers, skilled technicians, and
                dedicated professionals are the bedrock of our operations. Their
                collective expertise and problem-solving acumen enable us to
                navigate complex challenges, deliver on stringent timelines, and
                consistently exceed client expectations. We believe in fostering
                collaborative partnerships, working closely with our clients to
                understand their unique needs and deliver tailor-made solutions
                that stand the test of time.
              </p>
              <p>
                As we continue to expand our footprint across India, our
                unwavering commitment remains to contribute significantly to the
                nation&apos;s progress by constructing vital infrastructure that
                empowers communities and drives economic growth. We are not just
                building structures; we are crafting legacies of resilience,
                connectivity, and sustainable development.
              </p>
              <p>
                <strong>At TOUGH TEAM INFRA, we don’t just build </strong> we
                deliver quality, meet challenges head-on, and construct with
                purpose. From blueprint to breakthrough, our legacy is built to
                last.
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
