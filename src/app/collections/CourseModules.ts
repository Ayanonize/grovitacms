import type { CollectionConfig } from 'payload';

// Reusable SEO Fields
const seoFields = [
  {
    name: 'seotitle',
    type: 'text',
    label: 'SEO Title',
    required: true,
  },
  {
    name: 'seodescription',
    type: 'textarea',
    label: 'SEO Description',
    required: true,
  },
];

type User = {
  role: 'admin' | 'accountmanager';
  instituteId?: string | { id: string };
};

export const CourseModules: CollectionConfig = {
  slug: 'course-modules',
  access: {
    read: ({ req: { user } }: { req: { user?: User } }) => {
      if (!user) return false;

      const { role, instituteId } = user;

      if (role === 'admin') return true;

      if (role === 'accountmanager' && instituteId) {
        const instituteIdValue =
          typeof instituteId === 'string'
            ? instituteId
            : (instituteId as { id: string })?.id;

        if (instituteIdValue) {
          return {
            instituteId: {
              equals: instituteIdValue,
            },
          };
        }
      }

      return false;
    },
    create: ({ req: { user } }: { req: { user?: User } }) => {
      return user?.role === 'admin' || user?.role === 'accountmanager';
    },
    update: ({ req: { user } }: { req: { user?: User } }) => {
      if (!user) return false;
      if (user.role === 'admin') return true;
      return false;
    },
    delete: () => false,
  },
  admin: { useAsTitle: 'module' },
  hooks: {
    beforeValidate: [
      ({ data, req }: { data: any; req: { user?: User } }) => {
        data ??= {};

        if (req.user?.role === 'accountmanager') {
          if (!req.user.instituteId) {
            throw new Error('Account managers must have an associated institute.');
          }
          data.instituteId =
            typeof req.user.instituteId === 'string'
              ? req.user.instituteId
              : (req.user.instituteId as { id: string })?.id ?? data.instituteId;
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      required: true,
    },
    {
      name: 'module',
      type: 'text',
      required: true,
    },
    {
      name: 'topics',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },  
    {
      name: 'sequence',
      type: 'number', // Added sequence field
      label: 'Sequence',
      required: true,
      admin: {
        description: 'Set the order for rendering this module on the front-end. Lower numbers will appear first.',
      },
    },
    {
      name: 'instituteId',
      type: 'relationship',
      relationTo: 'institute',
      required: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    ...seoFields, // Adding SEO fields here
  ],
};