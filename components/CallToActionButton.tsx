import React from 'react';

const CallToActionButton = React.forwardRef((_, ref: any) => {
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
    <button
      className="border-none rounded-lg p-4 bg-blue-600 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
       hover:bg-blue-700 hover:shadow-sm w-full relative right-0 bottom-0 mt-12 sm:mb-6 sm:mr-6 sm:max-w-sm md:max-w-md sm:absolute sm:right-0 sm:bottom-0"
      onClick={handleClick}
    >
      Book a Free Consultation
    </button>
  );
});

export default CallToActionButton;
