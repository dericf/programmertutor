import { Divider } from './Divider';

export const IntroCards: React.FC = () => {
  return (
    <div className="pt__intro my-6">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center">
        <div className="pt__intro_card bg-gradient-to-bl rounded-lg p-10 max-w-md self-center m-6">
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

        <div className="pt__intro_card md:mx-4 bg-gradient-to-bl rounded-lg p-10 max-w-md self-center m-6">
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

        <div className="pt__intro_card md:mx-4 bg-gradient-to-bl rounded-lg p-10 max-w-md self-center m-6">
          <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
            Fair and Straightforward Pricing
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-700">
            Remote sessions: <strong>$25.00 CAD/hr</strong>.
            <br />
            <br />
            In-person sessions:
            <strong>
              $25.00 CAD/hr + <br /> $25.00/session{' '}
            </strong>{' '}
            for travel time, fuel and parking.
          </p>
        </div>
      </div>
    </div>
  );
};
