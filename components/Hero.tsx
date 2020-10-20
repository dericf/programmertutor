import React from 'react';
import { urlFor } from '../lib/sanityImageBuilder';
import CallToActionButton from './CallToActionButton';
type HeroTypes = {
  content: any;
};
export const Hero = React.forwardRef(({ content }: HeroTypes, ref) => {
  return (
    <>
      <div className="pt__hero p-0  mt-12 md:mt-12 flex flex-col justify-between bg-white shadow-2xl">
        {/* <pre>{JSON.stringify(content, null, 4)}</pre> */}
        <h1 className="pt__title text-center text-4xl sm:text-5xl lg:text-6xl">
          {content.mainTitle}
        </h1>
        <h2 className="pt__subtitle text-center text-lg md:text-2xl mb-8">
          {/* Fair Price. Flexible Schedule. Patient. */}
          {content.subtitle}
        </h2>
      </div>
      <div className="relative">
        <img
          className="self-center w-full shadow-lg"
          src={urlFor(content.mainBackgroundImage)
            .height(650)
            .width(1400)
            .url()}
          alt="Background Image"
        ></img>

        <CallToActionButton content={content} ref={ref} />
      </div>
    </>
  );
});
