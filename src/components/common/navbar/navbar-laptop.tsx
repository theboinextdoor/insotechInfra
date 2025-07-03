import { navbarMenu } from '@/lib/common/navbar-menu';
import React from 'react';
import NavLink from './navlink';

const LaptopNavbar = () => {
  return (
    <div className="hidden sm:flex items-center justify-between gap-6 ">
      {navbarMenu.map((items) => (
        <NavLink key={items.id} href={items.link} className="mr-3  text-[16px]">
          {items.label}
        </NavLink>
      ))}
    </div>
  );
};

export default LaptopNavbar;
