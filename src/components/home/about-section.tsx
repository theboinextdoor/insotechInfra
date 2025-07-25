import React from 'react';
import { MotionDiv, MotionP } from '../common/motion-wrapper';
import { containerVarients, itemVariants } from '@/utils/constant';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// import BgGradient from '../common/BgGradient';
import ContentHeading from './content-heading';
// import Image from 'next/image';

const AboutSection = () => {
  const paraList = [
    {
      id: 1,
      para: 'Tough Team Infra is a trusted construction firm with over 7 years of proven expertise, delivering projects across India from our operational hubs in Delhi and Mumbai.',
    },
    {
      id: 2,
      para: 'We specialize in utility diversion works, road construction, fabrication, and cast-in-situ structures, providing reliable solutions for complex urban infrastructure challenges.',
    },
    {
      id: 3,
      para: `Our success is driven by a skilled workforce of nearly 90 dedicated professionals, including seasoned engineers and technicians, ensuring quality, safety, and efficiency in every project.`,
    },
    {
      id: 4,
      para: `We have a strong track record of executing civil and mechanical projects using cutting-edge technologies such as Horizontal Directional Drilling (HDD) and Micro Tunnelling (m-TBM), minimizing environmental impact while maximizing project efficiency.`,
    },
    {
      id: 5,
      para: `At Tough Team Infra, we prioritize safety, sustainability, and client satisfaction, consistently exceeding industry standards through meticulous planning and innovative execution.`,
    },
    {
      id: 6,
      para: `Our projects play a crucial role in shaping resilient infrastructure, contributing to India's rapidly evolving urban landscape with integrity and excellence.`,
    },
    {
      id: 7,
      para: `We proudly contribute to critical infrastructure projects, partnering with leading public and private sector organizations to deliver sustainable development across India.`,
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden py-4 md:py-20 lg:py-12 bg-[#00693C]  "
      id="about"
    >
      {/* Main Container */}
      <div className="pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12  ">
        <ContentHeading
          heading="Background & History"
          lineWidth={400}
          className="font-condensed  text-3xl lg:text-5xl  font-bold bg-gradient-to-r from-white via-slate-400 to-white"
        />

        {/* Paragraph */}
        <MotionDiv
          variants={containerVarients}
          className="mt-6 flex flex-col lg:flex-row gap-4 rounded-md p-2 max-w-4xl"
        >
          <div className="flex flex-col items-center justify-between gap-2">
            {paraList.map((item) => (
              <MotionP
                variants={itemVariants}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: item.id * 0.07 }}
                key={item.id}
                className="p-2 text-[18px] font-normal text-white leading-6 "
              >
                {item.para}
              </MotionP>
            ))}
          </div>
          <MotionDiv
            variants={itemVariants}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="px-8 flex lg:flex-col gap-6"
          >
            <div className="flex flex-col items-strat justify-center">
              <h1 className="text-4xl text-amber-600">7+</h1>
              <p className="text-lg text-white">Years in Operation</p>
            </div>
            <div>
              <h1 className="text-4xl text-amber-600">20+</h1>
              <p className="text-lg text-white">Projects</p>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Button */}
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex justify-center"
        >
          <Button
            variant="link"
            className="text-black  mt-6 text-base sm:text-lg lg:text-xl border-2  border-amber-300  px-6 sm:px-10 lg:px-12 py-8 sm:py-7 lg:py-6 lg:mt-16 bg-white hover:shadow-2xl hover:shadow-gray-700 hover:no-underline shadow-lg "
          >
            <Link href="/about " className="flex gap-2 items-center">
              <span className="font-condensed font-semibold">About</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
};

export default AboutSection;
