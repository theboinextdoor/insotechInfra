'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== '/' && pathName.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors text-sm md:text-lg duration-200 text-gray-700 hover:text-rose-500',
        className,
        isActive && 'text-red-500'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
