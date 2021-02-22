import React from 'react';

const CallToActionButton = React.forwardRef(({ content }: any, ref: any) => {
  const handleClick = () => {
    if (ref !== null && ref.current != null) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={handleClick}
        type="button"
        className="border-none text-center py-4 px-6 bg-blue-600 text-white text-lg 
       hover:bg-blue-800 shadow-lg hover:shadow-xl mx-auto w-full md:w-auto "
      >
        {content.callToActionButtonText}
      </button>
    </>
  );
});

// <!-- Start Square Appointments Embed code --> <a target="_top" style=" background-color: #1E93CC; color: white; height: 40px; text-transform: uppercase; font-family: 'Square Market', 'helvetica neue', helvetica, arial, sans-serif; letter-spacing: 1px; line-height: 38px; padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; display: inline-block; " >Book an Appointment</a> <!-- End Square Appointments Embed code -->

export default CallToActionButton;
