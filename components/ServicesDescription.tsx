import PortableText from '@sanity/block-content-to-react';
type ComponentProps = {
  content: any;
};

export const ServicesDescription = ({ content }: ComponentProps) => {
  return (
    <article className="prose prose-xl mt-6 mb-12 px-10 mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl text-center my-6 px-3">
        What can I help you with?
      </h2>
      {content.services.map((service) => (
        <section className="mb-4" key={service._id}>
          <h3 className="text-sm md:text-lg font-bold">{service.title}</h3>
          <div>
            <PortableText blocks={service.description} />
          </div>
        </section>
      ))}
    </article>
  );
};
