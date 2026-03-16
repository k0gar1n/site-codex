import { localizedStringFields } from './common';

export const attractionSchema = {
  name: 'attraction',
  title: 'Attraction',
  type: 'document',
  fields: [
    { name: 'name', type: 'object', fields: localizedStringFields },
    { name: 'slug', type: 'slug', options: { source: 'name.en' } },
    { name: 'priceFrom', type: 'number' },
    { name: 'shortDescription', type: 'object', fields: localizedStringFields },
    { name: 'description', type: 'object', fields: localizedStringFields },
    { name: 'technicalRequirements', type: 'object', fields: localizedStringFields },
    { name: 'ageRecommendation', type: 'object', fields: localizedStringFields },
    { name: 'setupRequirements', type: 'object', fields: localizedStringFields },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] }
  ]
};
