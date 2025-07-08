// components/OfficeLocations.tsx
'use client'; // Required if you plan to add any client-side interactivity, otherwise optional

import React from 'react';
import { MapPin, Building2 } from 'lucide-react'; // Importing icons from lucide-react

export default function OfficeLocationsPage() {
  const mumbaiAddress = {
    street: '302 Paradise Heights, Back Road',
    area: 'Lokhandwala, Andheri (W)',
    city: 'Mumbai - 400053',
    // This is a placeholder for the Google Maps embed URL
    // You will need to generate this from Google Maps directly.
    // Go to Google Maps, search for the address, click 'Share', then 'Embed a map'.
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.756779188042!2d72.82583847502476!3d19.09635078210344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b719c8f00001%3A0xcb1e2a09a2e6f437!2s302%2C%20Paradise%20Heights%2C%20Lokhandwala%20Complex%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Replace with your actual embed URL
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            Our Global Footprint
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            While we operate across PAN India, our main presence is in key
            metropolitan areas.
          </p>
        </div>

        {/* Office Locations Grid/Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Mumbai Office Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <MapPin className="text-blue-500" size={30} /> Mumbai Office
              </h2>
              <address className="not-italic text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-1">
                <p>{mumbaiAddress.street}</p>
                <p>{mumbaiAddress.area}</p>
                <p>{mumbaiAddress.city}</p>
              </address>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {mumbaiAddress.mapEmbedUrl ? (
                <iframe
                  src={mumbaiAddress.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mumbai Office Location on Google Maps"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  <p>Google Map embed is missing. Please add your embed URL.</p>
                </div>
              )}
            </div>
          </div>

          {/* Delhi Presence Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Building2 className="text-teal-500" size={30} /> Delhi Presence
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Tough Team Infra maintains a significant presence in Delhi to
                cater to projects and clients in the region.
                <br />
                <br />
              </p>
            </div>
            {/* Optional: Add a placeholder image or a stylized empty state for Delhi */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-center p-4">
              <p className="text-2xl font-bold">
                Connecting across Delhi & NCR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
