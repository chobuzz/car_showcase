import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { relative } from 'path';
import { Footer, Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Navbar />
      <body className='relative'>{children}</body>
      <Footer />
    </html>
  );
}
