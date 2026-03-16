import { localizedStringFields } from './common';

export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'object', fields: localizedStringFields },
    { name: 'slug', type: 'slug', options: { source: 'title.en' } },
    { name: 'year', type: 'number' },
    { name: 'excerpt', type: 'object', fields: localizedStringFields },
    { name: 'description', type: 'object', fields: localizedStringFields },
    { name: 'goals', type: 'object', fields: localizedStringFields },
    { name: 'timeline', type: 'object', fields: localizedStringFields },
    { name: 'location', type: 'object', fields: localizedStringFields },
    { name: 'partners', type: 'array', of: [{ type: 'string' }] },
    { name: 'events', type: 'array', of: [{ type: 'reference', to: [{ type: 'event' }] }] },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'impactResults', type: 'object', fields: localizedStringFields },
    { name: 'mediaCoverage', type: 'array', of: [{ type: 'url' }] }
  ]
};
