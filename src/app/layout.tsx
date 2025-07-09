import './globals.css';
import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
  title: 'Insotech Infra Pvt. Ltd.',
  description: 'Construction Company',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} `}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="felx-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
