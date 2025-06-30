// import { navbarMenu } from '@/lib/common/navbar-menu';
import Image from 'next/image';
import React from 'react';
import NavLink from './navlink';
import { navbarMenu } from '@/lib/common/navbar-menu';

const Header = () => {
  return (
    <div className="container flex items-center justify-between py-4 md:py-6 lg:py-8 mx-auto px-2 md:px-4 lg:px-6 ">
      {/* Left Hand Side :- Icons */}
      <div className="relative w-32 h-10 md:w-40 md:h-12 lg:w-48 lg:h-16">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Middle Part :- Menu */}
      <div className="text-sm">
        {navbarMenu.map((items) => (
          <NavLink key={items.id} href={items.link} className="mr-3">
            {items.label}
          </NavLink>
        ))}
      </div>

      {/* Right Hand Side :- SignIn */}
      <div className="text-sm">Right</div>
    </div>
  );
};

export default Header;
