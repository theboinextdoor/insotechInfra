'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import Image from 'next/image';
import { MotionDiv, MotionH3 } from './motion-wrapper';

export function ExpandableCardDemo({ project }: { project: string }) {
  const [active, setActive] = useState<
    (typeof utilitycards)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(false);
    };
    document.body.style.overflow = active ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <div className="fixed inset-0 grid place-items-center z-50 p-4">
            <motion.div
              ref={ref}
              layoutId={`card-${active.projectHeading}-${id}`}
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <Image
                src={active.src}
                alt={active.projectHeading}
                width={1200}
                height={800}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  {active.projectHeading}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {active.projectParagraph}
                </p>
                <a
                  href={active.ctaLink}
                  target="_blank"
                  className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md hover:scale-105 transition"
                >
                  {active.ctaText}
                </a>
              </div>
            </motion.div>

            {/* Close Button */}
            <motion.button
              onClick={() => setActive(false)}
              className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <CloseIcon />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {(project === 'Utility Diversion Work' ? utilitycards : pebWork).map(
          (card) => (
            <MotionDiv
              layoutId={`card-${card.projectHeading}-${id}`}
              key={card.id}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: card.id * 0.07,
                ease: 'easeInOut',
                type: 'spring',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 8px 20px rgba(255, 255, 255, 1)',
              }}
              onClick={() => setActive(card)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-800"
            >
              <Image
                src={card.src}
                alt={card.projectHeading}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 space-y-2">
                <MotionH3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {card.projectHeading}
                </MotionH3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {card.projectParagraph}
                </p>
              </div>
            </MotionDiv>
          )
        )}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const utilitycards = [
  {
    id: 1,
    projectHeading:
      'Sewer Line Diversion (DN-700) at Dahisar Checknaka, Mumbai',
    projectParagraph:
      'This project involved the precise diversion of an existing 700mm diameter sewer line beneath the busy Dahisar Checknaka in Mumbai...',
    src: '/ud1.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 2,
    projectHeading:
      'Sewer Line Diversion (DN-800) for MMRDA at Barfiwala Nala, Mumbai',
    projectParagraph:
      'This critical project entailed the diversion of an 800mm diameter sewer line near Barfiwala Nala for the MMRDA...',
    src: '/ud2.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 3,
    projectHeading:
      'Utility Diversion Works at different Metro Station locations (DMRC)',
    projectParagraph:
      'An extensive undertaking involving diversion of various essential utilities at multiple Metro Station locations for DMRC...',
    src: '/ud3.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 4,
    projectHeading: 'Sewer Line Diversion (DN-600) for MMRDA at Mahul, Mumbai',
    projectParagraph:
      'This project focused on efficient diversion of a 600mm diameter sewer line at Mahul for MMRDA...',
    src: '/ud4.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 5,
    projectHeading: 'Utility Diversion for MTHL at Shivaji Nagar, Mumbai',
    projectParagraph:
      'A critical project facilitating the monumental MTHL construction at Shivaji Nagar...',
    src: '/ud5.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 6,
    projectHeading:
      'Utility Diversion for Metro Line 7 & 2A at Dahisar East, Mumbai',
    projectParagraph:
      'Strategic diversion of essential utilities to support Metro Line 7 and 2A at Dahisar East...',
    src: '/ud6.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 7,
    projectHeading: 'Utility Diversion works at Cuffe Parade, Mumbai',
    projectParagraph:
      'Precise diversion of utilities at Cuffe Parade, Mumbai, ensuring minimal disruption...',
    src: '/ud7.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
  {
    id: 8,
    projectHeading:
      'Utility Diversion works for NHAI at Delhi-Mumbai Expressway',
    projectParagraph:
      'Large-scale diversion of utilities along the Delhi-Mumbai Expressway for NHAI...',
    src: '/ud8.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/utlity-diversion-work',
  },
];

const pebWork = [
  {
    id: 1,
    projectHeading:
      'Construction of 3 Labour Camps (G+1) at Bandra Casting Yard',
    projectParagraph:
      'Tough Team Infra successfully constructed three G+1 (Ground + One floor) labour camps at Bandra Casting Yard for MMRDA, serving as essential and modern accommodation facilities for project personnel during their major infrastructure developments in the region.',
    src: '/ud9.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/pre-engineered-building',
  },
  {
    id: 2,
    projectHeading:
      'Construction of 2 Labour Camps at China Casting Yard, Thane',
    projectParagraph:
      'As part of their specialized PEB expertise, Tough Team Infra efficiently built two crucial labour camps at the China Casting Yard in Thane for MMRDA, providing robust and timely support facilities for ongoing large-scale projects.',
    src: '/ud8.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/pre-engineered-building',
  },
  {
    id: 3,
    projectHeading: 'Fencing work around a project office',
    projectParagraph:
      'Tough Team Infra also undertook essential fencing work around a project office for J Kumar Infraprojects Ltd., ensuring comprehensive site security and clear demarcation for efficient project operations and material management.',
    src: '/ud7.jpg',
    ctaText: 'Visit Project',
    ctaLink: '/services/pre-engineered-building',
  },
];
