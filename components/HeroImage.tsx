import React from 'react';
import Image from 'next/image';
import { croppedDimensions, urlFor } from '../lib/sanityImageBuilder';
import CallToActionButton from './CallToActionButton';
interface Props {
  content?: any;
}
export const HeroImage = React.forwardRef(({ content }: Props, ref) => {
  // const image = urlFor(content.mainBackgroundImage);
  console.log('content.mainBackgroundImage :>> ', content.mainBackgroundImage);
  return (
    <div className="grid mb-6 gap-y-0 md:gap-y-2">
      <div className="relative w-screen mx-auto h-80 md:h-128 md:w-3/4 2xl:h-144 xl:w-3/4 2xl:w-3/4  ">
        
        <Image
          className="shadow-lg"
          src={urlFor(content.mainBackgroundImage).url()}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="left center"
        />
      </div>
        <CallToActionButton content={content} ref={ref} />
    </div>
  );
});
