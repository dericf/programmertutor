// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'websiteContent',
      title: 'Website Content',
      type: 'document',
      fields: [
        {
          // Main Title
          name: 'mainTitle',
          title: 'Main Title',
          type: 'string',
        },
        {
          // SubTitle
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'callToActionButtonText',
          title: 'Call to Action Button Text',
          type: 'string',
        },
        {
          // Logo Image
          name: 'logoImage',
          title: 'Logo Image',
          type: 'image',
        },
        {
          // Main Background Image
          name: 'mainBackgroundImage',
          title: 'Main Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          // Cards
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'card' }],
            },
          ],
        },
        {
          // Services
          name: 'services',
          title: 'Services',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'service' }],
            },
          ],
        },
      ],
    },
    {
      name: 'card',
      title: 'Card',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'text',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    },
    {
      name: 'service',
      title: 'Service',
      type: 'document',
      fields: [
        {
          // name
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          // Main Image
          name: 'mainImage',
          title: 'Main Image',
          type: 'image',
        },
        {
          // Other Images
          name: 'otherImages',
          title: 'Other Images',
          type: 'array',
          of: [{ type: 'image' }],
        },
      ],
    },
  ]),
});
