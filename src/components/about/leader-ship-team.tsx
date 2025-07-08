'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  User,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from '../common/motion-wrapper';
import { variants } from '@/utils/constant';
import { leaders } from '@/utils/leader-array';
import ContentHeading from '../home/content-heading';

export default function LeaderShipTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === leaders.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? leaders.length - 1 : prevIndex - 1
    );
  };

  const currentLeader = leaders[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-28 ">
          <ContentHeading heading="Our Visionary Leadership " lineWidth={400} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize mt-4 leading-tight max-w-5xl bg-gradient-to-r from-black to-gray-700 tracking-wide bg-clip-text text-transparent ">
            Building Trust, Inspiring Growth – Leadership at the Core of Tough
            Team Infra.
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto max-w-4xl min-h-[600px] sm:min-h-[520px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <MotionDiv
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`
    flex flex-col 
    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
    items-center rounded-xl shadow-lg dark:shadow-2xl 
    bg-white dark:bg-gray-800 overflow-hidden 
    border border-gray-200 dark:border-gray-700 
    w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  `}
            >
              {/* Image Section */}
              <div
                className={`
      relative w-full md:w-1/2 
      h-72 sm:h-80 md:h-[460px] 
      bg-gray-200 dark:bg-gray-700 flex-shrink-0
      ${isEven ? 'md:rounded-l-xl' : 'md:rounded-r-xl'}
    `}
              >
                {currentLeader.photoSrc.includes('placeholder') ? (
                  <User className="w-28 h-28 text-gray-500 dark:text-gray-400 mx-auto my-auto" />
                ) : (
                  <Image
                    src={currentLeader.photoSrc}
                    alt={`${currentLeader.name}'s photo`}
                    fill
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                )}
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-10 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {currentLeader.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold text-lg sm:text-xl flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Briefcase size={22} /> {currentLeader.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                  {currentLeader.bio}
                </p>

                <div className="flex flex-col items-center md:items-start space-y-3">
                  {currentLeader.email && (
                    <a
                      href={`mailto:${currentLeader.email}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-base sm:text-lg transition-colors"
                    >
                      <Mail size={20} className="mr-2" />
                      {currentLeader.email}
                    </a>
                  )}
                  {currentLeader.phone && (
                    <a
                      href={`tel:${currentLeader.phone.replace(/\s/g, '')}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-base sm:text-lg transition-colors"
                    >
                      <Phone size={20} className="mr-2" />
                      {currentLeader.phone}
                    </a>
                  )}
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
            aria-label="Previous Leader"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:-right-10 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
            aria-label="Next Leader"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
