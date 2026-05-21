import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://rioaldie.dev'),
  title: {
    default: 'Rio Aldi Erwanto — Full Stack Developer',
    template: '%s | Rio Aldi Erwanto',
  },
  description:
    'Portfolio of Rio Aldi Erwanto — a Full Stack Web Developer skilled in React, Next.js, Node.js, TypeScript, and Golang. Explore projects, experience, and certifications.',
  keywords: [
    'Rio Aldi Erwanto',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript',
    'Golang',
    'Portfolio',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Rio Aldi Erwanto' }],
  creator: 'Rio Aldi Erwanto',
  icons: {
    icon: '/images/rio.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rioaldie.dev',
    siteName: 'Rio Aldi Erwanto Portfolio',
    title: 'Rio Aldi Erwanto — Full Stack Developer',
    description:
      'Portfolio of Rio Aldi Erwanto — a Full Stack Web Developer skilled in React, Next.js, Node.js, TypeScript, and Golang.',
    images: [
      {
        url: '/images/rio-fix.png',
        width: 600,
        height: 600,
        alt: 'Rio Aldi Erwanto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rio Aldi Erwanto — Full Stack Developer',
    description:
      'Portfolio of Rio Aldi Erwanto — a Full Stack Web Developer skilled in React, Next.js, Node.js, TypeScript, and Golang.',
    images: ['/images/rio-fix.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
