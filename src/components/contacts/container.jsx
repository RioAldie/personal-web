import Image from 'next/image';
import React from 'react';

const ContactContainer = () => {
  return (
    <div className="max-w-md flex flex-row gap-4 items-center">
      <a href="mailto:rioaldierwanto@email.com">
        <Image
          src={'/icon/envelope-regular.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </a>
      <a href="https://github.com/RioAldie" target="_blank">
        <Image
          src={'/icon/github-brands-solid.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/"
        target="_blank">
        <Image
          src={'/icon/linkedin-brands-solid.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </a>
      <a href="https://www.instagram.com/rioaldie/" target="_blank">
        <Image
          src={'/icon/instagram-brands-solid.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </a>
      <a href="https://wa.me/+6289666179869">
        <Image
          src={'/icon/whatsapp-brands-solid.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default ContactContainer;
