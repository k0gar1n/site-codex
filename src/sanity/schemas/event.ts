import { localizedStringFields } from './common';

export const eventSchema = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'object', fields: localizedStringFields },
    { name: 'slug', type: 'slug', options: { source: 'title.en' } },
    { name: 'date', type: 'datetime' },
    { name: 'description', type: 'object', fields: localizedStringFields },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'relatedProject', type: 'reference', to: [{ type: 'project' }] },
    { name: 'location', type: 'object', fields: localizedStringFields }
  ]
};
