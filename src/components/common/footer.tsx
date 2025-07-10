'use client';

import React, { useState } from 'react';
import { ChevronRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { navbarMenu } from '@/lib/common/navbar-menu';
import { ourService } from '@/lib/common/footer-quick-link';
import { motion, AnimatePresence } from 'motion/react';

const AccordionSection = ({
  id,
  title,
  items,
  openSection,
  toggleSection,
}: {
  id: string;
  title: string;
  items: { label: string; href: string }[];
  openSection: string | null;
  toggleSection: (section: string) => void;
}) => (
  <div className="pb-2">
    <button
      className="w-full flex justify-between items-center text-amber-400 bg-transparent font-semibold text-lg"
      onClick={() => toggleSection(id)}
    >
      {title}
      {openSection === id ? <Minus /> : <Plus />}
    </button>
    <AnimatePresence initial={false}>
      {openSection === id && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden mt-2 space-y-2 text-sm text-white"
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center hover:text-white whitespace-pre-line leading-6 text-[16px] font-barlow font-medium tracking-wide"
              >
                {/* <ChevronRight className="h-4 w-4 mr-2 text-amber-400" /> */}
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
);

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const accordionData = [
    {
      id: 'services',
      title: 'Our Services',
      items: ourService.map((item) => ({ label: item, href: '#keyservices' })),
    },
    {
      id: 'quicklinks',
      title: 'Quick Links',
      items: navbarMenu.map((item) => ({ label: item.label, href: item.link })),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      items: [
        { label: '📞 +91-931-072-7282\n📞 +91-958-272-7282', href: '#' },
        {
          label: '📧 insotechinfra@gmail.com',
          href: 'mailto:insotechinfra@gmail.com',
        },
        {
          label:
            '🏢 302 Paradise Heights, Back Road Lokhandwala, Andheri (W), Mumbai - 400053',
          href: '#',
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#00693C] text-white pt-10 border-t ">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4  gap-6 max-w-7xl mx-auto px-6 pb-10 m">
        {/* Image */}
        <div className="flex flex-col items-start justify-start">
          <Image src="/logo.png" alt="logo" width={100} height={50} />
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-wider text-amber-400 font-barlow font-semibold">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {ourService.map((item, i) => (
              <li key={i}>
                <Link
                  href="#keyservices"
                  className="hover:no-underline hover:text-amber-400 font-barlow font-semibold leading-6 text-[17px] flex items-center"
                >
                  <ChevronRight className="lg:w-6 lg:h-6 group transition-all  hover:-translate-x-3 " />
                  <span className="group transition-all hover:translate-x-3 ">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-wider text-amber-400 font-barlow font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {navbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="hover:no-underline hover:text-amber-400 font-barlow font-semibold leading-6 text-[17px] flex items-center"
                >
                  <ChevronRight className="lg:w-6 lg:h-6" />
                  <span className="group transition-all hover:translate-x-3 ">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className=" mb-4 text-sm uppercase tracking-wider text-amber-400 font-barlow font-semibold">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3  font-barlow font-semibold leading-6 text-[17px]">
            <li>
              📞 +91-931-072-7282
              <br />
              📞 +91-958-272-7282
            </li>
            <li>
              📧{' '}
              <Link
                href="mailto:insotechinfra@gmail.com"
                className="hover:no-underline hover:text-amber-400"
              >
                insotechinfra@gmail.com
              </Link>
            </li>
            <li>
              🏢 302 Paradise Heights, Back Road Lokhandwala, Andheri (W),
              Mumbai - 400053
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile View - Accordion */}
      <div className="md:hidden px-4 py-8 space-y-4">
        <div className="flex justify-start mt-4 mb-6 gap-4">
          <Image src="/logo.png" alt="logo" width={100} height={40} />
          <p className="text-sm text-white animate-pulse flex flex-col gap-2 items-start justify-start">
            <span>Innovate.</span>
            <span>Inspire</span>
            <span>Achieve</span>
          </p>
        </div>

        {accordionData.map((section) => (
          <AccordionSection
            key={section.id}
            id={section.id}
            title={section.title}
            items={section.items}
            openSection={openSection}
            toggleSection={toggleSection}
          />
        ))}
      </div>

      <div className="border-t border-gray-300 py-4 px-4 text-center text-xs text-white max-w-7xl mx-auto">
        <span className="font-condensed font-semibold text-[17px] tracking-wide">
          {' '}
          © {new Date().getFullYear()} Tough Team Infra. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
