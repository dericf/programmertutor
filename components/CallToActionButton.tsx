import React from 'react';

const CallToActionButton = React.forwardRef(({ content }: any, ref: any) => {
  const handleClick = () => {
    console.log('Button Pressed');
    if (ref !== null && ref.current != null) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
      ref.current.focus();
    }
  };

  return (
    <>
      {/* Mobile Button */}
      <button
        className="border-none p-4 bg-blue-600 text-white text-lg 
       hover:bg-blue-800 shadow-lg hover:shadow-xl w-full  mx-auto relative right-auto left-auto bottom-0 mt-0 sm:hidden"
        onClick={handleClick}
      >
        {content.callToActionButtonText}
      </button>
      {/* Larger than Mobile Button */}
      <button
        className="border-none rounded-sm p-4 bg-blue-600 text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
       hover:bg-blue-700 hover:shadow-sm hidden sm:inline absolute right-0 top-0 mt-10 mr-10 max-w-sm md:max-w-md"
        onClick={handleClick}
      >
        {content.callToActionButtonText}
      </button>
    </>
  );
});

export default CallToActionButton;
