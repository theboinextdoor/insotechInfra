import React, { ReactNode } from 'react';
// Assuming '../common/BgGradient' and '../home/content-heading' are correctly implemented and provide necessary wrappers/styles.
// If not, ContentHeading's styling should be managed directly, and MotionDiv can be replaced with direct 'motion.div' from framer-motion.
import ContentHeading from '../home/content-heading'; // Assuming this component exists and handles your heading structure
import { MotionDiv } from '../common/motion-wrapper'; // Assuming this is a simple wrapper for 'motion.div' from framer-motion
import {
  BadgeCheck, // Company Reputation
  Gavel, // Compliance with Rules and Regulations
  ShieldCheck, // Safety
  Smile, // Client Satisfaction
  TrendingUp, // Profitability
} from 'lucide-react'; // Ensure lucide-react is installed: npm install lucide-react

type Steps = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Steps[] = [
  {
    icon: <ShieldCheck size={48} strokeWidth={1.5} />,
    label: 'Safety',
    description:
      'Ensuring the health, safety, and well-being of our employees, clients, and stakeholders is our foremost responsibility.',
  },
  {
    icon: <Gavel size={48} strokeWidth={1.5} />,
    label: 'Compliance & Regulations', // Slightly shortened for conciseness
    description:
      'We strictly adhere to all applicable laws, industry standards, and regulatory requirements to maintain operational excellence and legal integrity.',
  },
  {
    icon: <Smile size={48} strokeWidth={1.5} />,
    label: 'Client Satisfaction',
    description:
      'Delivering high-quality products and services that meet or exceed client expectations, fostering trust and long-term relationships.',
  },
  {
    icon: <BadgeCheck size={48} strokeWidth={1.5} />,
    label: 'Company Reputation',
    description:
      'Upholding a strong and positive corporate image through ethical practices, professional conduct, and consistent performance.',
  },
  {
    icon: <TrendingUp size={48} strokeWidth={1.5} />,
    label: 'Sustainable Profitability', // Added "Sustainable" for better context
    description:
      'Achieving sustainable growth and profitability to support innovation, employee development, and continued value to stakeholders.',
  },
];

const OurPriorities = () => {
  // Renamed component for better semantic accuracy
  return (
    <section className="relative z-10 bg-gradient-to-r from-emerald-900 to-[#00502F] text-white py-20 md:py-28 overflow-hidden">
      {/* Animated Blurred Background Shapes - Uncommented and refined */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Dynamic and subtle pulses */}
        <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500 opacity-10 rounded-full blur-[100px] animate-pulse-slow-1" />
        <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-green-500 opacity-8 rounded-full blur-[120px] animate-pulse-slow-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white opacity-5 rounded-full blur-[80px] animate-pulse-slow-3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Heading */}
        <ContentHeading
          heading="Our Core Priorities"
          className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-extrabold text-center text-3xl md:text-4xl  lg:text-6xl"
          lineWidth={300}
        />
        <p className="mt-4 text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          At Tough Team Infra, our foundation is built upon a clear set of
          priorities that guide every decision and action.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }} // Added scale for a subtler pop-in
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400 transition duration-300 shadow-xl hover:shadow-2xl group cursor-pointer" // Added cursor-pointer
            >
              <div className="flex flex-col items-center gap-6 text-center">
                {' '}
                {/* Increased gap */}
                <div className="bg-gradient-to-tr from-green-500/10 to-white/5 p-5 rounded-full group-hover:from-green-500/30 transition duration-300 transform group-hover:scale-110">
                  {' '}
                  {/* Larger padding, hover scale for icon background */}
                  <div className="text-green-400 group-hover:text-green-300 transition duration-300">
                    {' '}
                    {/* Icon color change on hover */}
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-wide">
                  {step.label}
                </h4>{' '}
                {/* Larger font, tracking-wide */}
                <p className="text-base text-gray-300 leading-relaxed">
                  {step.description}
                </p>{' '}
                {/* Base font, relaxed leading */}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPriorities;
