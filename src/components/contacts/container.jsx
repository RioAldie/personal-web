import Image from 'next/image';
import React from 'react';

const ContactContainer = () => {
  return (
    <div className="max-w-md flex flex-row gap-4 items-center">
      <a href="mailto:rioaldierwanto@email.com" aria-label="Send email">
        <Image
          src={'/icon/envelope-regular.svg'}
          alt="Email"
          width={30}
          height={30}
        />
      </a>
      <a href="https://github.com/RioAldie" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <Image
          src={'/icon/github-brands-solid.svg'}
          alt="GitHub"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile">
        <Image
          src={'/icon/linkedin-brands-solid.svg'}
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </a>
      <a href="https://www.instagram.com/rioaldie/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
        <Image
          src={'/icon/instagram-brands-solid.svg'}
          alt="Instagram"
          width={30}
          height={30}
        />
      </a>
      <a href="https://wa.me/+6289666179869" rel="noopener noreferrer" aria-label="WhatsApp contact">
        <Image
          src={'/icon/whatsapp-brands-solid.svg'}
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default ContactContainer;
