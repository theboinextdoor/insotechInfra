import React, { ReactNode } from 'react';
// import BgGradient from '../common/BgGradient';
import ContentHeading from '../home/content-heading';
import { MotionDiv } from '../common/motion-wrapper';
import {
  BadgeCheck,
  Gavel,
  ShieldCheck,
  Smile,
  TrendingUp,
} from 'lucide-react';

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
      'Ensuring the health, safety, and well-being of our employees, clients, and stakeholders is our foremost responsibility',
  },
  {
    icon: <Gavel size={48} strokeWidth={1.5} />,
    label: 'Compliance with Rules and Regulations',
    description:
      'We strictly adhere to all applicable laws, industry standards, and regulatory requirements to maintain operational excellence and legal integrity',
  },
  {
    icon: <Smile size={48} strokeWidth={1.5} />,
    label: 'Client Satisfaction',
    description:
      'Delivering high-quality products and services that meet or exceed client expectations, fostering trust and long-term relationships',
  },
  {
    icon: <BadgeCheck size={48} strokeWidth={1.5} />,
    label: 'Company Reputation',
    description:
      'Upholding a strong and positive corporate image through ethical practices, professional conduct, and consistent performance.',
  },
  {
    icon: <TrendingUp size={48} strokeWidth={1.5} />,
    label: 'Profitability',
    description:
      'Achieving sustainable growth and profitability to support innovation, employee development, and continued value to stakeholders.',
  },
];

const OurPriority = () => {
  return (
    <section className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated Blurred Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-100px] left-[40%] w-[500px] h-[500px] bg-cyan-500 opacity-20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-150px] right-[20%] w-[600px] h-[600px] bg-green-500 opacity-10 rounded-full blur-[100px] animate-spin-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContentHeading
          heading="Our Priority"
          className="text-[20px] from-pink-400  to-rose-400 bg-gradient-to-r bg-clip-text text-transparent font-semibold"
        />

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400 transition duration-300 shadow-lg hover:shadow-2xl group"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-gradient-to-tr from-green-500/10 to-white/5 p-4 rounded-full group-hover:from-green-500/30 transition duration-300">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{step.label}</h4>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPriority;
