import { route } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const NavBar = () => {
  const router = useRouter();
  return (
    <div className="pt__navbar shadow-lg">
      {router.pathname !== '/' && (
        <div
          className="fixed flex flex-row text-blue-700 cursor-pointer w-100 z-10"
          style={{ top: 12, left: 12 }}
        >
          <Link href="/" as="/" title="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="30"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </div>
      )}

      <div
        className="fixed flex flex-row text-blue-700 cursor-pointer w-100 z-10"
        style={{ top: 12, right: 12 }}
      >
        <a
          type="tel"
          href="tel:7802382982"
          className="mr-4"
          title="Phone: 7802382982"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="30"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>

        <a
          type="email"
          href="mailto:contact@programmertutor.com"
          title="Email: contact@programmertutor.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="30"
          >
            <path
              fillRule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
