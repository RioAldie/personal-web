import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rio Aldi Erwanto',
  description: 'Rio Aldi Erwanto Portfolio Fullstack Web Developer',
  icons: {
    icon: '/images/rio.png',
  },
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
