'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LaptopNavbar from './navbar/navbar-laptop';
import MobileNavBar from './navbar/navbar-mobile';
import { MotionDiv } from './motion-wrapper';
import { containerVarients } from '@/utils/constant';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopSection, setIsTopSection] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroSectionHeight = 600;

      // Enable transparency on top section (only on homepage)
      if (pathname === '/') {
        setIsTopSection(currentScroll < heroSectionHeight);
      } else {
        setIsTopSection(false);
      }

      // Hide header when scrolling down (only for wider screens)
      if (window.innerWidth >= 768) {
        setShowHeader(currentScroll < lastScrollY);
        setLastScrollY(currentScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, pathname]);

  const headerClasses = `
    fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out
    ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
    ${isTopSection && isHomePage ? 'bg-transparent' : 'bg-white/60 shadow-md'}
  `;

  return (
    <header className={headerClasses}>
      <div className="w-full flex items-center justify-between py-2 md:py-4 lg:py-6 2xl:py-3 px-4 sm:px-6 lg:px-16 2xl:px-32">
        <MotionDiv
          variants={containerVarients}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-12 h-12 md:w-40 md:h-12 lg:w-48 lg:h-14"
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
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
