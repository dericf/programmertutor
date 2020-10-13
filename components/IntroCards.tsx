import { Divider } from './Divider';

export const IntroCards: React.FC = () => {
  return (
    <div className="pt__intro my-12">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-12">
        <div className="pt__intro_card mx-8 lg:mx-4 bg-gradient-to-bl bg-blue-200 rounded-lg p-10 max-w-md self-center">
          <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
            Free Zero Obligation Intro Session
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-800">
            The first step is to set up a 15-30 minute zoom session to figure
            out how I can best help you. <br /> <br /> We'll discuss what stage
            you're at in your programming education or career, what areas you're
            looking for assistance in, and what tutoring style will best suite
            you're learning style.
          </p>
        </div>

        <div className="pt__intro_card mx-8 md:mx-4 bg-gradient-to-bl bg-blue-200 rounded-lg p-10 max-w-md self-center">
          <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
            All Skill Levels
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-700">
            If you're taking your absolute first programming course, I can help
            with the fundamentals. I've been in your shoes and know how
            confusing some of the initial concepts can be.
            <br /> <br />
            If you're more advanced, I can help with some of the trickier, more
            complex concepts too.
          </p>
        </div>

        <div className="pt__intro_card mx-8 md:mx-4 mb-0 bg-gradient-to-bl bg-blue-200 rounded-lg p-10 max-w-md self-center ">
          <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
            Fair and Straightforward Pricing
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-700">
            Remote sessions are only <strong>$25.00 CAD per hour</strong>.
            <br />
            <br />
            In-person sessions are{' '}
            <strong>$25.00 CAD per hour + $25.00 per session </strong> for
            travel time + fuel.
          </p>
        </div>
      </div>
    </div>
  );
};
