// components/OfficeLocations.tsx
'use client';

import React from 'react';
import { MapPin, Building2 } from 'lucide-react';
import ContentHeading from '../home/content-heading';

export default function OfficeLocationsPage() {
  const mumbaiAddress = {
    street: '302 Paradise Heights, Back Road',
    area: 'Lokhandwala, Andheri (W)',
    city: 'Mumbai - 400053',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.756779188042!2d72.82583847502476!3d19.09635078210344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b719c8f00001%3A0xcb1e2a09a2e6f437!2s302%2C%20Paradise%20Heights%2C%20Lokhandwala%20Complex%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  };

  const jasolaAddress = {
    street: 'Pocket 2, near Sanjeevni Hospital',
    area: 'Jasola',
    city: 'New Delhi - 110025',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.574344719055!2d77.28005402366803!3d28.537586604664734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3aeb6ac34d3%3A0x303b71df4a5f68f5!2sJasola%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin',
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ContentHeading
          heading="Our Global Footprint"
          className="text-base font-semibold uppercase tracking-wide bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-barlow"
          lineWidth={400}
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-amber-500 via-yellow-400 to-stone-600 bg-clip-text text-transparent">
          While we operate across PAN India, our main presence is in key
          metropolitan areas.
        </h1>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-12 md:gap-16">
          {/* Mumbai Office */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <MapPin className="text-blue-500" size={30} /> Mumbai Office
              </h2>
              <address className="not-italic text-lg text-gray-700 dark:text-gray-300 space-y-1">
                <p>{mumbaiAddress.street}</p>
                <p>{mumbaiAddress.area}</p>
                <p>{mumbaiAddress.city}</p>
              </address>
            </div>
            <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <iframe
                src={mumbaiAddress.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mumbai Office"
              ></iframe>
            </div>
          </div>

          {/* Jasola Delhi Office */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                <Building2 className="text-emerald-500" size={30} /> Jasola,
                Delhi Office
              </h2>
              <address className="not-italic text-lg text-gray-700 dark:text-gray-300 space-y-1">
                <p>{jasolaAddress.street}</p>
                <p>{jasolaAddress.area}</p>
                <p>{jasolaAddress.city}</p>
              </address>
            </div>
            <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <iframe
                src={jasolaAddress.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jasola Office"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
