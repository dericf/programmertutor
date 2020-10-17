import React from 'react';
import { urlFor } from '../lib/sanityImageBuilder';
import CallToActionButton from './CallToActionButton';
type HeroTypes = {
  content: any;
};
export const Hero = React.forwardRef(({ content }: HeroTypes, ref) => {
  return (
    <div className="pt__hero p-0 mx-12 mt-12 mb-3 md:my-12 flex flex-col justify-between">
      {/* <pre>{JSON.stringify(content, null, 4)}</pre> */}
      <h1 className="pt__title text-center text-4xl sm:text-5xl lg:text-6xl">
        {content.mainTitle}
      </h1>
      <h2 className="pt__subtitle text-center text-lg md:text-2xl mb-8">
        {/* Fair Price. Flexible Schedule. Patient. */}
        {content.subtitle}
      </h2>
      <div className="relative">
        <img
          className="self-center"
          src={urlFor(content.mainBackgroundImage)
            .height(650)
            .width(1400)
            .url()}
          alt="Background Image"
        ></img>

        <CallToActionButton ref={ref} />
      </div>
    </div>
  );
});
