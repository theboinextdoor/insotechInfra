// components/QualitySafetyPage.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import {
  Award,
  ShieldCheck,
  ClipboardList,
  // Lightbulb,
  HeartHandshake,
  FileDown,
  Rocket,
  Users,
  Handshake,
  RefreshCcw,
  MessageSquareText,
  FlaskConical,
} from 'lucide-react'; // Comprehensive icons for policies
import { MotionDiv } from '../common/motion-wrapper';

export default function QualitySafetyPage() {
  const downloadLinks = {
    qualityPolicyPdf: 'http://example.com/quality-policy.pdf', // Replace with actual PDF link
    safetyPolicyPdf: 'http://example.com/safety-policy.pdf', // Replace with actual PDF link
  };

  // Animation variants for sections
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Data for safety policy key elements with icons
  const safetyKeyElements = [
    {
      icon: FlaskConical,
      title: 'Hazard Identification & Risk Assessment',
      description:
        'Regular identification and assessment of potential hazards in all work areas, followed by the implementation of control measures to mitigate risks.',
    },
    {
      icon: Users,
      title: 'Training and Competency',
      description:
        'Providing comprehensive safety training to all employees, ensuring they have the knowledge and skills to perform their tasks safely.',
    },
    {
      icon: Rocket,
      title: 'Emergency Preparedness',
      description:
        'Developing and implementing robust emergency response plans, including fire safety, first aid, and evacuation procedures.',
    },
    {
      icon: ClipboardList,
      title: 'Incident Reporting and Investigation',
      description:
        'Encouraging prompt reporting of all incidents, near misses, and unsafe conditions, followed by thorough investigations to identify root causes and prevent recurrence.',
    },
    {
      icon: HeartHandshake,
      title: 'Health and Well-being',
      description:
        'Promoting a healthy work-life balance and providing access to medical facilities and wellness programs.',
    },
    {
      icon: ShieldCheck,
      title: 'Personal Protective Equipment (PPE)',
      description:
        'Ensuring the availability and mandatory use of appropriate PPE for all tasks, and regular inspection for effectiveness.',
    },
    {
      icon: Handshake,
      title: 'Contractor Safety',
      description:
        'Collaborating with contractors and suppliers to ensure their adherence to our safety standards and policies.',
    },
    {
      icon: RefreshCcw,
      title: 'Continuous Improvement',
      description:
        'Regularly reviewing the effectiveness of this safety policy and its implementation.',
    },
    {
      icon: MessageSquareText,
      title: 'Communication',
      description:
        'Display and communicate this policy statement prominently across the organization, and review it at least bi-annually to ensure ongoing relevance and compliance with statutory obligations.',
    },
  ];

  return (
    <section className="relative mt-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16 md:mb-29"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-6"
            variants={itemVariants}
          >
            Commitment to Quality & Safety
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our unwavering dedication to excellence and safety forms the bedrock
            of every project we undertake.
          </motion.p>
        </motion.div>

        {/* Policy Overviews Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Quality Policy Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-8 border border-blue-100 dark:border-blue-700"
            variants={itemVariants}
          >
            <Award
              className="text-yellow-500 mb-6"
              size={64}
              strokeWidth={1.5}
            />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Our Quality Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
              We are committed to delivering engineering excellence through the
              consistent provision of high-quality products and services that
              meet or exceed client expectations and regulatory requirements.
            </p>
          </motion.div>

          {/* Safety Policy Overview Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-8 border border-red-100 dark:border-red-700"
            variants={itemVariants}
          >
            <ShieldCheck
              className="text-red-500 mb-6"
              size={64}
              strokeWidth={1.5}
            />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Our Safety Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
              Our Safety Policy is founded on the principle that the health and
              well-being of our employees, partners, and the public are
              paramount. We are committed to providing a safe and healthy
              working environment, preventing accidents, and minimizing
              occupational risks. This policy outlines our proactive approach to
              safety management, continuous improvement, and compliance with all
              applicable safety laws and regulations.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Elements of Safety Policy */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
            variants={itemVariants}
          >
            Key Elements of Our Safety Policy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyKeyElements.map((element, index) => (
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md  transition-all duration-300 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-500"
                variants={itemVariants}
              >
                <element.icon
                  className="text-indigo-500 mb-4"
                  size={48}
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {element.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {element.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </motion.div>

        {/* Download Policies Call to Action */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
            variants={itemVariants}
          >
            Access Our Full Policy Documents
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <a
              href={downloadLinks.qualityPolicyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-out border border-green-600"
            >
              <FileDown className="mr-3" size={24} /> Download Quality Policy
            </a>
            <a
              href={downloadLinks.safetyPolicyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-out border border-red-600"
            >
              <FileDown className="mr-3" size={24} /> Download Safety Policy
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
