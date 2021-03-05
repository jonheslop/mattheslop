import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center w-full py-4 px-8 md:px-16 text-xs md:text-sm justify-between">
      <section className="mt-auto space-x-4 text-xs text-gray-500">
        <Link classes="my-2 lg:my-0" external href="https://instagram.com/mattheslopshoots">Instagram</Link>
        <Link classes="my-2 lg:my-0" external href="mailto:matt@mattheslop.com">Email</Link>
      </section>
      <section className="space-x-6 mt-4 sm:mt-0 text-xs text-gray-500">
        &copy; 2021
      </section>
    </footer>
  );
};

export default Footer;
