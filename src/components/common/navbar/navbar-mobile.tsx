'use client';

import { AlignJustify, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { MotionDiv, MotionP } from '../motion-wrapper';
import { containerVarients } from '@/utils/constant';
import { navbarMenu } from '@/lib/common/navbar-menu';
import Link from 'next/link';
import React from 'react';

const MobileNavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="sm:hidden">
      {/* Toggle Button */}
      <div className="p-2">
        {openMenu ? (
          <X size={28} onClick={toggleMenu} className="cursor-pointer" />
        ) : (
          <AlignJustify
            size={28}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {openMenu && (
          <MotionDiv
            variants={containerVarients}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 0.2,
            }}
            className="fixed top-0 right-0 min-h-screen min-w-2/3 z-50 mt-14.5 bg-white/90 backdrop-blur-md shadow-2xl shadow-neutral-500/10"
          >
            <div className="py-18 flex items-center justify-center flex-col space-y-6">
              {navbarMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpenMenu(false)}
                  className="text-lg pb-2 flex flex-col items-center"
                >
                  <MotionP
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.id * 0.2 }}
                    className="text-[16px] text-slate-900 font-semibold drop-shadow-xl font-barlow"
                  >
                    {item.label}
                  </MotionP>
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
