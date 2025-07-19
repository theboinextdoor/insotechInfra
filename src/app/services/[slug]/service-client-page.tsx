'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Service } from '@/lib/services/services';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceClientPage({ service }: { service: Service }) {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src={service.image}
          alt={service.heading}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0  bg-black/60 flex items-end justify-center">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="text-white text-5xl lg:text-6xl font-bold text-center px-4 py-18"
          >
            {service.heading}
          </motion.h1>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 space-y-14">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {service.content}
          </p>
        </motion.div>

        {/* Process */}
        {service.process && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Projects */}
        {service.projects && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Project Highlights
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {service.projects.map((proj, i) => (
                <div
                  key={i}
                  className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-800">
                    {proj.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{proj.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Testimonial */}
        {service.testimonial && (
          <motion.blockquote
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-lg shadow-inner"
          >
            <p className="italic text-lg text-gray-800">
              “{service.testimonial.quote}”
            </p>
            <footer className="mt-4 text-right font-semibold text-slate-700">
              — {service.testimonial.author}
            </footer>
          </motion.blockquote>
        )}
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-600 py-20 px-6 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-3">Let’s Build Together</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Need expert help with <strong>{service.heading}</strong>? Connect with
          our technical team for tailored solutions, site assessment, and a
          fast-track quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-slate-100 transition"
        >
          Contact Our Team
        </a>
      </motion.section>
    </main>
  );
}
