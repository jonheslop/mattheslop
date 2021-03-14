import React, { useState } from 'react';
import Link from 'next/link';
import CustomLink from './link';
import Heading from './heading';
import { photoSetForNav } from "../interfaces";
import Burger from "./burger"; 

type Props = {
  photoSets?: photoSetForNav[];
};

const Nav = ({photoSets = []}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-wrap md:flex-col justify-start md:w-64 md:mr-16 flex-shrink-0 md:sticky top-16 place-self-start">
      <h1 className="text-4xl top-16">
        <Link href="/">
          <a className="font-medium tracking-tight hover:text-indigo-500 transition duration-150 ease-in-out" title="JFH Nav - click to go to homepage">
            Matt Heslop
          </a>
        </Link>
      </h1>

      <Burger open={open} setOpen={setOpen}/>
      <nav className={`mt-8 w-full ${open ? "" : "hidden md:block"}`}>
        <Heading level="h5" classes="mb-2">Photo sets</Heading>
        <ul>
          {photoSets.map(({id, title, slug}) =>(
            <li key={id} className="mb-2">
              <CustomLink href={`/${slug}`}>{title}</CustomLink></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
