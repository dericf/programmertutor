import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

export const NavBar = () => {
  const router = useRouter();
  return (
    <div className="pt__navbar shadow-lg bg-white">
      <div className="fixed top-0 left-0 w-full flex flex-row flex-wrap text-blue-700 z-10 py-4 px-4 bg-white bg-opacity-100">
        {router.pathname != '/' && (
          <Link href="/" as="/">
            <a className="w-auto px-4 py-1 border-none bg-white rounded-lg shadow-md mr-4 hover:bg-blue-400 hover:text-white">
              Home
            </a>
          </Link>
        )}

        {/* {router.pathname != '/resources' && (
          <Link href="/resources" as="/resources">
            <a className="w-auto px-4 py-1 bg-white rounded-lg shadow-md hover:bg-blue-400 hover:text-white">
              Resources
            </a>
          </Link>
        )} */}

        <a
          type="tel"
          href="tel:7802382982"
          className="mr-4 self-center ml-auto w-auto px-4 py-1 border-none bg-white rounded-lg shadow-md hover:bg-blue-400 hover:text-white"
          title="Phone: 7802382982"
        >
          <PhoneIcon />
        </a>

        <a
          type="email"
          className="self-center w-auto px-4 py-1 bg-white rounded-lg border-none shadow-md hover:bg-blue-400 hover:text-white"
          href="mailto:contact@programmertutor.com"
          title="Email: contact@programmertutor.com"
        >
          <MailOutlineIcon />
        </a>
      </div>
    </div>
  );
};
