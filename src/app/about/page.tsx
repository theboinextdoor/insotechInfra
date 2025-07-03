// import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Content */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 text-left">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-yellow-400"></div>
          <p className="text-sm text-gray-600 tracking-widest uppercase">
            About Tough Team Infra
          </p>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-black mt-4">
          Shaping Tomorrow&apos;s Infrastructure, Today
        </h1>

        {/* Paragraphs */}
        <div className="mt-8 space-y-6 text-gray-700 max-w-4xl">
          {/* <p>
            From small renovations to complex billion dollar projects; from
            sports arenas to water treatment plants and metro infrastructure,
            Tough Team Infra has you covered.
          </p> */}
          <p>
            We redefine full-service and bring expertise across all project
            types, at all scales, and under all procurement models. As
            innovative solution providers and construction specialists, we
            leverage our expertise to customize the right approach for your
            project to exceed expectations.
          </p>
          <p>
            Collaborative, driven, and innovative: we&apos;re focused on finding
            the best way forward and elevating your vision of success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
