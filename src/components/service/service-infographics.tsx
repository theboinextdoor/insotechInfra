'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const infographics = [
  {
    title: 'Microtunnelling',
    description:
      'A trenchless construction method for installing pipelines beneath surface obstacles using remotely controlled tunneling machines.',
    image: '/microtunneling.jpeg',
  },
  {
    title: 'Horizontal Directional Drilling (HDD)',
    description:
      'HDD is used for installing pipelines and cables underground with minimal surface disruption, ideal for river or road crossings.',
    image: '/hdd.jpg',
  },
  {
    title: 'Pipe Jacking',
    description:
      'A technique for installing underground pipes by pushing them through the ground using hydraulic jacks behind a shield or TBM.',
    image: '/pipejacking.jpg',
  },
];

export default function ServiceInfographics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Core Technologies
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {infographics.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300"
            >
              <div className="relative w-full h-52 mx-auto mb-6">
                <Image
                  src={info.image}
                  alt={info.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
