import Image from 'next/image';
import ContactContainer from './contacts/container';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-neutral-950 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-neutral-200 sm:mx-auto dark:border-neutral-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
