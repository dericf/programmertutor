import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="p-12 mt-12  text-blue-700  w-100 bg-gray-200 rounded-lg z-10">
      <div className="flex flex-col md:flex-row row-gap-2 justify-evenly">
        <span className=" self-center cursor-pointer">
          <a className="text-sm sm:text-md" type="tel" href="tel:7802382982">
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

        <span className=" self-center cursor-pointer">
          <a
            className="text-sm sm:text-md"
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
      </div>
    </div>
  );
};