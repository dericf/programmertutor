import PortableText from '@sanity/block-content-to-react';
import { Divider } from './Divider';
// import serializers from '../lib/sanityBlockText';
type PropTypes = {
  content: any;
};

export const IntroCards = ({ content }: PropTypes) => {
  return (
    <div className="pt__intro my-6">
      <div className="flex flex-col lg:flex-row flex-wrap justify-around">
        {content.cards &&
          content.cards.map((card) => {
            return (
              <div
                className="pt__intro_card rounded-lg p-5 m-6 max-w-md self-center lg:self-start prose prose-md"
                style={{ height: 'auto' }}
                key={card._id}
              >
                <h2 className="text-2xl text-center leading-6 font-medium text-gray-900 mb-4">
                  {card.title}
                </h2>

                {card.text && (
                  // <p className="mt-2 text-base leading-6 text-gray-800">
                  <div>
                    <PortableText blocks={card.text} />
                  </div>
                  // </p>
                )}

                {!card.text && (
                  <p className="mt-2 text-base leading-6 text-gray-800">
                    {card.description}
                  </p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
