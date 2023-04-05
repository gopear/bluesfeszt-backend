import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register([
    {
      name: 'performance-date',
      plugin: 'performance',
      type: 'date',
    },
    {
      name: 'performance-start',
      plugin: 'performance',
      type: 'time',
    },
    {
      name: 'performance-duration',
      plugin: 'performance',
      type: 'time',
    },
    {
      name: 'program-start',
      plugin: 'performance',
      type: 'time',
    }
  ])
};
