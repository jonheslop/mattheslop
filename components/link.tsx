import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  classes?: string
  children: React.ReactNode;
};

const BaseLink = ({href, external = false, classes = "", children}: Props) => {
  const linkAttributes = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <Link href={href}>
      <a className={`transition duration-200 ease-in-out underline hover:text-indigo-500 ${classes}`} {...linkAttributes}>
        { children }
      </a>
    </Link>
  );
};

export default BaseLink;
