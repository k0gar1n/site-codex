import { localizedStringFields } from './common';

export const partnerSchema = {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    { name: 'name', type: 'object', fields: localizedStringFields },
    { name: 'logo', type: 'image' },
    { name: 'website', type: 'url' }
  ]
};
