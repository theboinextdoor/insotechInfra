'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LaptopNavbar from './navbar/navbar-laptop';
import MobileNavBar from './navbar/navbar-mobile';
import { MotionDiv } from './motion-wrapper';
import { containerVarients } from '@/utils/constant';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // Scrolling Down
        setShowHeader(false);
      } else {
        // Scrolling Up
        setShowHeader(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white shadow transition-all duration-500 ease-in-out ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full flex items-center justify-between py-2 md:py-4 lg:py-6  px-4 md:px-6 lg:px-28">
        <MotionDiv
          variants={containerVarients}
          whileHover={{ scale: 1.35 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-12 h-12 md:w-40 md:h-12 lg:w-48 lg:h-12 "
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain  "
            />
          </Link>
        </MotionDiv>
        <LaptopNavbar />
        <MobileNavBar />
      </div>
    </header>
  );
};

export default Header;
