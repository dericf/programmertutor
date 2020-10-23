import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div className="pb-6 pt-0 mt-6  text-blue-700  w-100 bg-white rounded-lg z-10 relative">
      <div className="bg-white border-t shadow-md border-gray-300 py-6 mb-6 w-full">
        <h2 className="text-center justify-center text-gray-800 whitespace-no-wrap text-2xl md:text-3xl">
          Contact Information
        </h2>
      </div>
      <div className="flex flex-row justify-around flex-wrap items-center px-6">
        <span className=" self-center cursor-pointer whitespace-no-wrap mr-4 mb-8">
          <a className="text-sm sm:text-lg" type="tel" href="tel:7802382982">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              className="inline"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            &nbsp; (780) 238-2982
          </a>
        </span>

        <span className=" self-center cursor-pointer mb-8 whitespace-no-wrap ml-4">
          <a
            className="text-sm sm:text-lg"
            type="email"
            href="mailto:contact@programmingtutor.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              className="inline"
            >
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp; contact@programmingtutor.com
          </a>
        </span>

        <span className="self-center cursor-pointer mb-8 whitespace-no-wrap ml-4">
          <a
            rel="noreferrer"
            href="http://maps.google.com/?q=Edmonton%20Alberta%20Canada"
            target="_blank"
            className="text-sm sm:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              className="inline"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Edmonton, Alberta Canada
          </a>
        </span>
      </div>
      <div className="flex flex-row justify-around mt-6">
        <Link href="/privacy-policy" as="/privacy-policy">
          <a className="text-sm">Privacy Policy</a>
        </Link>

        <Link href="/terms-and-conditions" as="/terms-and-conditions">
          <a className="text-sm">Terms and Conditions</a>
        </Link>
      </div>
    </div>
  );
};
