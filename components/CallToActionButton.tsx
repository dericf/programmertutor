import React from 'react';

const CallToActionButton = React.forwardRef(({ content }: any, ref: any) => {
  const handleClick = () => {
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
      <a
        type="button"
        target="_top"
        href="https://square.site/book/L8KGKG1182GQ7/programmer-tutor"
        rel="nofollow"
        className="border-none text-center p-4 bg-blue-600 text-white text-lg 
       hover:bg-blue-800 shadow-lg hover:shadow-xl w-full  mx-auto relative right-auto left-auto bottom-0 mt-0 sm:hidden"
      >
        {content.callToActionButtonText}
      </a>
      {/* Larger than Mobile Button */}
      <a
        type="button"
        target="_top"
        href="https://square.site/book/L8KGKG1182GQ7/programmer-tutor"
        rel="nofollow"
        className="border-none text-center rounded-sm p-4 bg-blue-600 text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
        hover:shadow-sm hidden sm:inline absolute right-0 top-0 mt-10 mr-10 max-w-sm md:max-w-md"
      >
        {content.callToActionButtonText}
      </a>
    </>
  );
});

// <!-- Start Square Appointments Embed code --> <a target="_top" style=" background-color: #1E93CC; color: white; height: 40px; text-transform: uppercase; font-family: 'Square Market', 'helvetica neue', helvetica, arial, sans-serif; letter-spacing: 1px; line-height: 38px; padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; display: inline-block; " >Book an Appointment</a> <!-- End Square Appointments Embed code -->

export default CallToActionButton;
