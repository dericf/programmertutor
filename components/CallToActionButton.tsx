import React from 'react';

const CallToActionButton = React.forwardRef((_, ref: any) => {
  const handleClick = () => {
    console.log('Button Pressed');
    if (ref !== null && ref.current != null) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      className="border-none rounded-md p-4 bg-blue-600 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
       hover:bg-blue-700 hover:shadow-sm"
      style={{ position: 'absolute', bottom: '10%', right: '5%' }}
      onClick={handleClick}
    >
      Book a Free Consultation
    </button>
  );
});

export default CallToActionButton;
