import React, { ReactNode } from 'react';
import BgGradient from '../common/BgGradient';
import ContentHeading from '../home/content-heading';
import { MotionDiv } from '../common/motion-wrapper';
import {
  BadgeCheck,
  Gavel,
  // MoveRight,
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
    icon: <ShieldCheck size={64} strokeWidth={1.5} />,
    label: 'Safety',
    description:
      'Ensuring the health, safety, and well-being of our employees, clients, and stakeholders is our foremost responsibility',
  },
  {
    icon: <Gavel size={64} strokeWidth={1.5} />,
    label: 'Compliance with Rules and Regulations',
    description:
      'We strictly adhere to all applicable laws, industry standards, and regulatory requirements to maintain operational excellence and legal integrity',
  },
  {
    icon: <Smile size={64} strokeWidth={1.5} />,
    label: 'Client Satisfaction',
    description:
      'Delivering high-quality products and services that meet or exceed client expectations, fostering trust and long-term relationships',
  },
  {
    icon: <BadgeCheck size={64} strokeWidth={1.5} />,
    label: 'Company Reputation',
    description:
      'Upholding a strong and positive corporate image through ethical practices, professional conduct, and consistent performance.',
  },
  {
    icon: <TrendingUp size={64} strokeWidth={1.5} />,
    label: 'Profitability',
    description:
      'Achieving sustainable growth and profitability to support innovation, employee development, and continued value to stakeholders.',
  },
];

const OurPriority = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BgGradient />
        <ContentHeading
          heading="Our Priority"
          className="bg-linear-to-r text-[19px] from-slate-800 to-slate-700"
        />

        {/* policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx}
              className="relative p-6"
            >
              <div className="relative flex items-stretch">
                <StepItem {...step} />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPriority;

function StepItem({ icon, label, description }: Steps) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full">
      <div className="flex flex-col gap-4 h-full">
        <div
          className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl 
                        bg-gradient-to-br from-rose-500/10 to-transparent 
                        group-hover:from-rose-500/20 transition-colors"
        >
          {icon}
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
