// components/ContactPage.tsx
'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Send,
  User,
  MessageSquare,
  BookOpen, // For "Request a Quote"
  CheckCircle, // For success message icon
  XCircle, // For error message icon
} from 'lucide-react';
import BgGradient from '@/components/common/BgGradient';
import { MotionDiv } from '@/components/common/motion-wrapper';

// // Define types for contact persons
// interface ContactPerson {
//   name: string;
//   role?: string;
//   phone?: string;
//   email?: string;
// }

// Data for contact information
const contactInfo = {
  mainEmail: 'insotechinfra@gmail.com',
  mainPhone: '+91 9310727282',
  altPhone: '+91 9582727282',
  persons: [
    {
      name: 'Jazib Zia',
      role: 'Director',
      phone: '+91 9310727282',
      email: 'insotechinfra@gmail.com',
    },
    {
      name: 'Mustak Ali',
      role: 'Contact Person (Civil/Utility/PEB)',
      phone: '+91 8452846400',
    },
    {
      name: 'Praval Pratap Singh',
      role: 'Contact Person (Engineer)',
      phone: '+91 9754237331',
    },
    {
      name: 'Arjun Mule',
      role: 'Contact Person (Admin)',
      phone: '+91 7021068355',
    },
  ],
  associates: [
    {
      name: 'Mr. Baldev Singh',
      role: 'Angel Global Corporate Consultants Pvt. Ltd.',
    },
  ],
  mumbaiOffice: {
    address:
      '302 Paradise Heights, Back Road, Lokhandwala, Andheri (W), Mumbai - 400053',
    photo: '/path/to/mumbai-office-photo.jpg', // Replace with actual photo
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.756779188042!2d72.82583847502476!3d19.09635078210344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b719c8f00001%3A0xcb1e2a09a2e6f437!2s302%2C%20Paradise%20Heights%2C%20Lokhandwala%20Complex%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // REPLACE THIS
  },
  delhiOffice: {
    address: 'Plot No. 162, Third Floor, Pocket 2, Jasola, New Delhi-110025',
    photo: '/path/to/delhi-office-photo.jpg', // Replace with actual photo
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.607490076751!2d77.27931367500585!3d28.55246737570498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37e3d1c4a1b%3A0x1d4a0b2d3c4e5f6g!2sPlot%20No.%20162%2C%20Pocket%202%2C%20Jasola%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin', // REPLACE THIS
  },
  businessHours: {
    days: 'Monday - Friday',
    hours: '9:00 AM - 6:00 PM IST',
  },
  socialMedia: [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/tough-team-infra/',
    }, // Replace with actual links
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/toughteaminfra',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/toughteaminfra',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/toughteaminfra',
    },
  ],
};

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const formItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      // Using alert for simplicity, a custom modal or inline error messages would be better for UX
      alert('Please fill in all required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus('error');
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // In a real application, you would send this data to your backend API
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (response.ok) {
      //   setFormStatus('success');
      //   setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      // } else {
      //   setFormStatus('error');
      //   console.error('Form submission failed');
      // }

      // Simulate API call success
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      console.log('Form submitted:', formData);
    } catch (error) {
      setFormStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="relative">
      <div className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 d text-gray-900 dark:text-gray-100 overflow-hidden">
        <BgGradient gradient="bg-gradient-to-r from-cyan-400 to-pink-300" />
        <MotionDiv
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We&apos;d love to hear from you! Whether you have a project in mind,
            a question, or just want to connect, our team is ready to assist.
          </motion.p>
        </MotionDiv>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}

        {/* Main Content Grid: Form on Left, Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
              variants={itemVariants}
            >
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {' '}
              {/* Kept space-y-4 for compact form */}
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200" // Changed focus:ring-blue-500 to purple-500
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200" // Changed focus:ring-blue-500 to purple-500
                    placeholder="john.doe@example.com"
                  />
                </div>
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <div className="relative">
                  <BookOpen
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200" // Changed focus:ring-blue-500 to purple-500
                    placeholder="Inquiry about services"
                  />
                </div>
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-4 text-gray-400 dark:text-gray-500"
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3} // Kept rows={3} for compact height
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200" // Changed focus:ring-blue-500 to purple-500
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed" // Added hover:-translate-y-1
                disabled={formStatus === 'submitting'}
                variants={formItemVariants}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-3" size={20} /> Request a Quote
                  </>
                )}
              </motion.button>
              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 dark:text-green-400 mt-4 flex items-center justify-center gap-2 bg-green-50/20 dark:bg-green-900/20 p-3 rounded-lg" // Added styling to message
                >
                  <CheckCircle size={20} /> Your message has been sent
                  successfully!
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-600 dark:text-red-400 mt-4 flex items-center justify-center gap-2 bg-red-50/20 dark:bg-red-900/20 p-3 rounded-lg" // Added styling to message
                >
                  <XCircle size={20} /> There was an error sending your message.
                  Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Details & Addresses */}
          <div className="space-y-12">
            {/* Contact Numbers & Email */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <Phone className="text-green-500" size={30} /> Reach Us Directly
              </motion.h2>
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-3"
                  variants={itemVariants}
                >
                  <Mail size={20} className="text-blue-500" />
                  <a
                    href={`mailto:${contactInfo.mainEmail}`}
                    className="hover:underline"
                  >
                    {contactInfo.mainEmail}
                  </a>
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-3"
                  variants={itemVariants}
                >
                  <Phone size={20} className="text-blue-500" />
                  <a
                    href={`tel:${contactInfo.mainPhone.replace(/\s/g, '')}`}
                    className="hover:underline"
                  >
                    {contactInfo.mainPhone}
                  </a>{' '}
                  /
                  <a
                    href={`tel:${contactInfo.altPhone.replace(/\s/g, '')}`}
                    className="hover:underline ml-2"
                  >
                    {contactInfo.altPhone}
                  </a>
                </motion.p>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Contacts:
                  </h3>
                  <ul className="space-y-2">
                    {contactInfo.persons.map((person, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                        variants={itemVariants}
                      >
                        <span className="font-semibold">{person.name}</span> -{' '}
                        {person.role}
                        {person.phone && (
                          <a
                            href={`tel:${person.phone.replace(/\s/g, '')}`}
                            className="ml-2 text-blue-500 hover:underline"
                          >
                            ({person.phone})
                          </a>
                        )}
                        {person.email && (
                          <a
                            href={`mailto:${person.email}`}
                            className="ml-2 text-blue-500 hover:underline"
                          >
                            ({person.email})
                          </a>
                        )}
                      </motion.li>
                    ))}
                    {contactInfo.associates.map((associate, index) => (
                      <motion.li
                        key={`associate-${index}`}
                        className="text-gray-700 dark:text-gray-300 text-sm italic"
                        variants={itemVariants}
                      >
                        <span className="font-semibold">{associate.name}</span>{' '}
                        - {associate.role}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Office Addresses & Maps */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <MapPin className="text-orange-500" size={30} /> Our Locations
              </motion.h2>

              {/* Mumbai Office */}
              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mumbai Office
                </h3>
                <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {contactInfo.mumbaiOffice.address}
                </address>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                  {contactInfo.mumbaiOffice.mapEmbedUrl ? (
                    <iframe
                      src={contactInfo.mumbaiOffice.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mumbai Office Location"
                    ></iframe>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <p>Map not available. Please provide embed URL.</p>
                    </div>
                  )}
                </div>
                {contactInfo.mumbaiOffice.photo && (
                  <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={contactInfo.mumbaiOffice.photo}
                      alt="Mumbai Office Photo"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </motion.div>

              {/* Delhi Office */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Delhi Office
                </h3>
                <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {contactInfo.delhiOffice.address}
                </address>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                  {contactInfo.delhiOffice.mapEmbedUrl ? (
                    <iframe
                      src={contactInfo.delhiOffice.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Delhi Office Location"
                    ></iframe>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <p>Map not available. Please provide embed URL.</p>
                    </div>
                  )}
                </div>
                {contactInfo.delhiOffice.photo && (
                  <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={contactInfo.delhiOffice.photo}
                      alt="Delhi Office Photo"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Business Hours & Social Media */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                variants={itemVariants}
              >
                <Clock className="text-purple-500" size={30} /> Hours & Connect
              </motion.h2>

              <motion.div className="mb-8" variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Business Hours:
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {contactInfo.businessHours.days}:{' '}
                  {contactInfo.businessHours.hours}
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Follow Us:
                </h3>
                <div className="flex space-x-6">
                  {contactInfo.socialMedia.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                      aria-label={`Follow us on ${platform.name}`}
                    >
                      <platform.icon size={36} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
