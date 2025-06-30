import { containerVarients } from '@/utils/constant';
import { MotionDiv } from './motion-wrapper';
import Link from 'next/link';
import Image from 'next/image';
import LaptopNavbar from './navbar/navbar-laptop';
import MobileNavBar from './navbar/navbar-mobile';

const Header = () => {
  return (
    <div className="container flex items-center justify-between py-2 md:py-4 lg:py-6 mx-auto px-4 md:px-6 lg:px-8 ">
      <MotionDiv
        variants={containerVarients}
        whileHover={{ scale: 1.15 }}
        className="relative w-10 h-10 md:w-40 md:h-12 lg:w-48 lg:h-16"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain curso "
          />
        </Link>
      </MotionDiv>
      <LaptopNavbar />
      <MobileNavBar />
    </div>
  );
};

export default Header;
