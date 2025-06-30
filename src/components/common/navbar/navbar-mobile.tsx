'use client';

import { AlignJustify, ArrowRight } from 'lucide-react';
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
    <div className="sm:hidden ">
      {/* Toggle Button */}
      <div className="p-2">
        <AlignJustify
          size={28}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Slide-in Menu with Framer Motion */}
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
              // ease: easeIn,
            }}
            className="fixed top-0 right-0 h-full w-2/3 rounded-l-full shadow-2xl shadow-neutral-500/10 z-50 bg-gray-50"
          >
            <div className="py-28 flex items-center justify-center flex-col space-y-6">
              {navbarMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpenMenu(false)}
                  className="text-lg font-medium pb-2 flex flex-col items-center"
                >
                  <MotionP
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.id * 0.2 + 0.1 }}
                    className="text-[16px] text-slate-900 font-normal drop-shadow-xl"
                  >
                    {item.label}
                  </MotionP>
                </Link>
              ))}

              {/* Arrow in Circle Button */}
              <div className="mt-8">
                <div
                  onClick={() => setOpenMenu(false)}
                  className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
                >
                  <ArrowRight size={24} className="text-white" />
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
