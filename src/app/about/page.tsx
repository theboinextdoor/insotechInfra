// import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative w-full py-16 md:py-24 xl:py-28 2xl:py-32 bg-white overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl 2xl:max-w-[85rem] mx-auto mt-16 px-4 sm:px-6 lg:px-8 2xl:px-12 text-left">
        {/* Heading Line & Label */}
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-yellow-400" />
          <p className="text-sm sm:text-base text-gray-600 tracking-widest uppercase">
            About Tough Team Infra
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black mt-4 leading-tight max-w-4xl">
          Shaping Tomorrow&apos;s Infrastructure, Today
        </h1>

        {/* Paragraph Section */}
        <div className="mt-8 space-y-6 text-gray-700 max-w-4xl text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
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
