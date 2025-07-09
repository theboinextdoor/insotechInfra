import { ourService } from '@/lib/common/footer-quick-link';
import { navbarMenu } from '@/lib/common/navbar-menu';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#00502F] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={120} height={100} />
          <p className="text-sm text-gray-200 animate-pulse">
            Innovate. Inspire. Achieve
          </p>
        </div>

        {/* Our Services */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3 text-amber-400">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            {ourService.map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                <Link
                  href="#keyservices"
                  className="hover:text-white transition-colors duration-200 flex items-center "
                >
                  <ChevronRight className="h-4 w-4   mr-2 text-amber-400 " />
                  <span className="group transition-all hover:translate-x-3">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {navbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="hover:text-white transition-colors duration-200 flex items-center "
                >
                  <ChevronRight className="h-4 w-4   mr-2 text-amber-400 " />
                  <span className="group transition-all hover:translate-x-3">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-400">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex flex-col gap-1">
              <div>📞 +91-931-072-7282</div>
              <div>📞 +91-958-272-7282</div>
            </li>
            <li className="cursor-pointer">
              <Link href="mailto:insotechinfra@gmail.com">
                📧 insotechinfra@gmail.com
              </Link>
            </li>
            <li>
              🏢 302 Paradise Heights, Back Road Lokhandwala, Andheri (W),
              Mumbai - 400053
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tough Team Infra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
