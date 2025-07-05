import React from 'react';
import { MotionDiv } from '../common/motion-wrapper';
import {
  BadgeCheck,
  CalendarCheck,
  Handshake,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import ContentHeading from './content-heading';

const MissionAndValues = () => {
  const cardList = [
    {
      id: 1,
      title: 'Commitment to Quality',
      icon: <BadgeCheck className="w-6 h-6 text-green-500" />,
      desc: 'At Tough Team Infra, quality is the cornerstone of everything we do. We deliver projects that meet the highest standards through strict quality control, skilled workmanship, and adherence to industry best practices.',
    },
    {
      id: 2,
      title: 'Responsibility',
      icon: <CalendarCheck className="w-6 h-6 text-emerald-500" />,
      desc: 'We take full responsibility for delivering safe, sustainable, and high-quality solutions. Accountability, ethical practices, and respect for communities guide every aspect of our work.',
    },
    {
      id: 3,
      title: 'Safety First',
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      desc: 'Safety is our top priority. We are committed to creating safe work environments by implementing rigorous safety standards, proactive training, and a culture where every employee feels empowered to prioritize well-being.',
    },
    {
      id: 4,
      title: 'Innovation & Adaptability',
      icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      desc: 'We embrace modern technologies, advanced techniques, and innovative solutions to overcome challenges and deliver efficient, future-ready infrastructure.',
    },
    {
      id: 5,
      title: 'Sustainability & Environmental Care',
      icon: <Leaf className="w-6 h-6 text-green-700" />,
      desc: 'We strive to minimize our environmental footprint through sustainable construction practices, resource efficiency, and responsible project planning.',
    },
    {
      id: 6,
      title: 'Integrity & Transparency',
      icon: <Handshake className="w-6 h-6 text-sky-500" />,
      desc: 'Honesty, fairness, and transparency are fundamental to how we operate. We believe in building trust with clients, partners, and communities through clear communication and ethical conduct.',
    },
    {
      id: 7,
      title: 'Teamwork & Collaboration',
      icon: <Users className="w-6 h-6 text-orange-500" />,
      desc: 'Our strength lies in collaboration. We foster teamwork within our organization and with our clients, ensuring successful project execution and mutual growth.',
    },
  ];
  return (
    <section className="relative ">
      {/* Background Image with Backdrop */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/gradient-background.jpg"
          alt="Background"
          fill
          priority
          quality={80}
          className="object-cover brightness-75 backdrop-blur-md"
        />
      </div>
      <div className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 ">
        <ContentHeading
          heading="Why Choose Us"
          className="bg-linear-to-r from-gray-900 via-slate-800 to-gray-700"
        />

        {/* Contents */}
        <div className="mt-6 flex flex-col gap-6 w-full">
          {cardList.map((item, index) => (
            <MotionDiv
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              viewport={{ amount: 0.2 }} // Triggers when 20% of card is visible
              className={`flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className="border border-white/20 rounded-xl max-w-xl p-6 flex flex-col gap-4 items-start justify-center bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-2xl  ">
                <h2 className="text-white flex items-center gap-2 text-lg font-semibold  ">
                  {item.title}
                  {item.icon}
                </h2>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndValues;
