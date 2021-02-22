import PortableText from '@sanity/block-content-to-react';
import { Divider } from './Divider';
// import serializers from '../lib/sanityBlockText';
interface Props {
  cards: any;
};

export const IntroCards = ({ cards }: Props) => {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 align-middle justify-center">
      {cards &&
        cards.map((card) => {
          return (
            <div
              className="flex-grow flex-shrink-0 shadow-lg  rounded-lg p-5 m-6 max-w-md self-start justify-self-center prose prose-lg"
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
  );
};
