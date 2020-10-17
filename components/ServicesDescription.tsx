import PortableText from '@sanity/block-content-to-react';
type ComponentProps = {
  content: any;
};

export const ServicesDescription = ({ content }: ComponentProps) => {
  return (
    <article className="prose prose-xl mt-6 mb-12 px-10 mx-auto max-w-5xl">
      <h2 className="text-center text-3xl">What can I help you with?</h2>
      {content.services.map((service) => (
        <section className="mb-4" key={service._id}>
          <h3 className="text-xl font-bold">{service.title}</h3>
          <div>
            <PortableText blocks={service.description} />
          </div>
        </section>
      ))}
    </article>
  );
};
