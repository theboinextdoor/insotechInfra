'use client';
import { Typewriter } from 'react-simple-typewriter';
import { MotionDiv, MotionP } from '../common/motion-wrapper';
import { itemVariants } from '@/utils/constant';
import { Badge } from '../ui/badge';
import { CheckCircle, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const images = [
    // '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg',
    '/slide5.jpg',
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const tagline = [
    {
      id: 1,
      label: 'Innovate',
      icon: (
        <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600 animate-pulse" />
      ),
    },
    {
      id: 2,
      label: 'Inspire',
      icon: (
        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600 animate-pulse" />
      ),
    },
    {
      id: 3,
      label: 'Achieve',
      icon: (
        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600 animate-pulse" />
      ),
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen h-screen max-h-[1400px] overflow-hidden px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-40 py-16 sm:py-20 lg:py-24 z-0">
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            fill
            priority
            quality={80}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center z-10 max-w-[90%] xl:max-w-6xl 2xl:max-w-7xl">
        {/* Tagline Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {tagline.map((items) => (
            <MotionDiv
              key={items.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: items.id * 0.2 + 0.1 }}
              className="relative p-[2px] overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-700 animate-gradient-x group"
            >
              <Badge
                variant="secondary"
                className="relative flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
              >
                {items.icon}
                <span className="text-blue-600 font-barlow">{items.label}</span>
              </Badge>
            </MotionDiv>
          ))}
        </div>

        {/* Headline */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-white mt-10 sm:mt-12">
          <h1 className="text-3xl font-condensed sm:text-5xl lg:text-7xl 2xl:text-8xl font-bold">
            <Typewriter
              words={['Insotech Infra Pvt Ltd', 'Tough Team Infra']}
              loop={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>

        {/* Subheadline */}
        <MotionP
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-md sm:text-xl 2xl:text-3xl text-amber-400  mt-4 sm:mt-6 max-w-xl sm:max-w-2xl font-barlow font-bold"
        >
          Building the Future, Underground and Above
        </MotionP>

        {/* Button */}
        <Button
          variant="link"
          className="text-white mt-6 sm:mt-10  rounded-xl px-6 sm:px-7 lg:px-7 py-6 sm:py-7  bg-gradient-to-r from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 hover:no-underline shadow-lg"
        >
          <Link href="/project" className="flex gap-2 items-center">
            <span className="text-base sm:text-sm md:text-md lg:text-lg font-barlow font-semibold">
              View Our Projects
            </span>
            <ArrowRight className="animate-pulse w-10 h-10" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
