import Image from 'next/image';
import React from 'react';

const ContactContainer = () => {
  return (
    <div className="max-w-md flex flex-row gap-4 items-center">
      {[
        { href: 'mailto:rioaldierwanto@email.com', icon: '/icon/envelope-regular.svg', alt: 'Email' },
        { href: 'https://github.com/RioAldie', icon: '/icon/github-brands-solid.svg', alt: 'GitHub' },
        { href: 'https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/', icon: '/icon/linkedin-brands-solid.svg', alt: 'LinkedIn' },
        { href: 'https://www.instagram.com/rioaldie/', icon: '/icon/instagram-brands-solid.svg', alt: 'Instagram' },
        { href: 'https://wa.me/+6289666179869', icon: '/icon/whatsapp-brands-solid.svg', alt: 'WhatsApp' }
      ].map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-500 hover:bg-gray-800 transition-colors"
        >
          <Image src={link.icon} alt={link.alt} width={20} height={20} />
        </a>
      ))}
    </div>
  );
};

export default ContactContainer;
