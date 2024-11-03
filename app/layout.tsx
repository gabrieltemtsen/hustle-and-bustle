import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hustle & Bustle: The Surge',
  description: 'Experience the ultimate night of luxury, music, and unforgettable moments',
  openGraph: {
    title: 'Hustle & Bustle: The Surge',
    description: 'Experience the ultimate night of luxury, music, and unforgettable moments',
    images: [
      {
        url: '/hustleandbustle.jpeg', // Replace with your image path or an external URL
        width: 1200, // Optional, for better SEO
        height: 630, // Optional, for better SEO
        alt: 'An unforgettable night at Hustle & Bustle',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for SEO */}
        <meta property="og:image" content="/hustleandbustle.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hustle & Bustle: The Surge" />
        <meta property="og:description" content="Experience the ultimate night of luxury, music, and unforgettable moments" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
