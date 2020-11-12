const ResourcesJS = () => {
  const sections = [
    {
      title: 'General',
      description: '',
      urls: [
        {
          url: '',
          urlText: 'Installation and Setup',
        },
        {
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
          urlText: 'Table of Contents: Mozilla Developer Guides',
        },
      ],
    },
    {
      title: 'The Basics',
      urls: [
        {
          url: '',
          urlText: 'Start Here',
        },
        {
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object',
          urlText: 'Table of Contents: Mozilla Developer Guides',
        },
      ],
      description: '',
    },
    {
      title: 'Arrays',
      urls: [
        {
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object',
          urlText: 'Array Reference: Mozilla Developer Guides',
        },
      ],
      description: '',
    },
  ];

  return (
    <article className="prose prose-md sm:prose-lg mt-6 mb-12 px-10 mx-auto max-w-5xl">
      <h3 className="text-center my-6 px-3">JavaScript</h3>

      {sections.map((section) => {
        return (
          <div key={section.title} className="shadow-lg py-6">
            <h3 className="text-center my-6 px-3">{section.title}</h3>
            {section.urls.map((url) => {
              return (
                <section className="mb-4">
                  <a href={url.url}>{url.urlText}</a>
                </section>
              );
            })}
          </div>
        );
      })}
    </article>
  );
};

export default ResourcesJS;
