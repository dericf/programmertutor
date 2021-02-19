export const MainTitle = ({content}) => {
  return (
    <div className="pt__hero p-0  mt-12 md:mt-12 flex flex-col justify-between bg-white shadow-xl">
      {/* <pre>{JSON.stringify(content, null, 4)}</pre> */}
      <h1 className="pt__title text-center text-4xl sm:text-5xl lg:text-6xl z-50 sticky top-0">
        {content.mainTitle}
      </h1>
      <h2 className="pt__subtitle text-center text-lg md:text-2xl mb-8 z-0  ">
        {/* Fair Price. Flexible Schedule. Patient. */}
        {content.subtitle}
      </h2>
    </div>
  );
};
