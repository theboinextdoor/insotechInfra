'use client';
import { Typewriter } from 'react-simple-typewriter';
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
} from '../common/motion-wrapper';
import { itemVariants } from '@/utils/constant';
import { Badge } from '../ui/badge';
import { CheckCircle, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

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
    <MotionSection className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:py-20 transition-all animate-in px-4 sm:px-6 lg:px-12 w-full h-screen text-center  overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 w-screen h-screen">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            fill
            priority
            objectPosition="bottom"
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />{' '}
        {/* Overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Tagline Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {tagline.map((items) => (
            <MotionDiv
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: items.id * 0.2 + 0.1 }}
              key={items.id}
              className="relative p-[2px] overflow-hidden rounded-full bg-gradient-to-r from-blue-500  via-slate-500 to-red-500 animate-gradient-x group"
            >
              <Badge
                variant="secondary"
                className="relative flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
              >
                {items.icon}
                <span className="text-blue-600">{items.label}</span>
              </Badge>
            </MotionDiv>
          ))}
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 text-3xl sm:text-5xl lg:text-7xl font-bold text-white mt-12">
          <h1 className="text-blue-300">
            <Typewriter
              words={['Insotech', 'Tough Team']}
              loop={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <MotionH1
            variants={itemVariants}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
          >
            Infra Pvt. Ltd.
          </MotionH1>
        </div>

        {/* Subheadline */}
        <MotionP
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeIn' }}
          className="text-sm sm:text-base lg:text-lg mt-4 max-w-xl text-gray-200 text-center"
        >
          Delivering Innovative Infrastructure & Metro Projects with Excellence.
        </MotionP>

        {/* Button */}
        <MotionDiv variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <Button
            variant="link"
            className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-6 lg:mt-16 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-rose-500 hover:to-orange-500 hover:no-underline shadow-lg"
          >
            <Link href="/career" className="flex gap-2 items-center">
              <span>Career</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default HeroSection;
