'use client';
import { motion } from 'motion/react';
import React from 'react';
import { ImagesSlider } from '../ui/images-slider';
import { Typewriter } from 'react-simple-typewriter';
import { MotionDiv, MotionP } from '../common/motion-wrapper';
import { containerVarients, itemVariants } from '@/utils/constant';
import { Badge } from '../ui/badge';
import { CheckCircle, Lightbulb, Sparkles } from 'lucide-react';
import Link from 'next/link';

const NewHeroSection = () => {
  const images = ['/slide2.jpg', '/slide3.jpg', '/slide4.jpg', '/slide5.jpg'];

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
    <ImagesSlider className="min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
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
                <span className="text-blue-950 font-barlow">{items.label}</span>
              </Badge>
            </MotionDiv>
          ))}
        </div>
        <MotionDiv
          variants={containerVarients}
          className="flex flex-row flex-wrap items-center justify-center gap-2 text-white mt-10 sm:mt-12"
        >
          <h1 className="text-4xl font-condensed sm:text-5xl lg:text-7xl 2xl:text-8xl font-bold">
            <Typewriter
              words={['Insotech Infra Pvt Ltd', 'Tough Team Infra']}
              loop={true}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              cursorBlinking={true}
            />
          </h1>
        </MotionDiv>
        <MotionP
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-md sm:text-xl 2xl:text-3xl bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text text-transparent  mt-4 sm:mt-6 max-w-xl sm:max-w-2xl font-condensed font-bold"
        >
          Building the Future, Underground and Above
        </MotionP>
        <button className="px-4 py-2 backdrop-blur-sm  border-2 bg-white  text-black mx-auto text-center border-amber-400 relative mt-8">
          <Link href={'/project'}>View Our Project →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default NewHeroSection;
