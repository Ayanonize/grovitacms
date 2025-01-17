import type { CollectionConfig } from 'payload';

export const Courses: CollectionConfig = {
  slug: 'courses',
  access: {
    // Public API access for all users, including logged-out ones
    read: ({ req }: any) => {
      // Allow public access to API for fetching course details
      if (!req.user) return true; // Public access if user is not logged in

      const { role, instituteId } = req.user;

      if (role === 'admin') return true;

      if (role === 'accountmanager' && instituteId) {
        const instituteIdValue =
          typeof instituteId === 'string' ? instituteId : instituteId.id;

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
    // Create access for admin and account managers only
    create: ({ req: { user } }: any) => {
      return user?.role === 'admin' || user?.role === 'accountmanager';
    },
    // Update access for admin and account managers only
    update: ({ req: { user }, doc }: any) => {
      if (!user) return false;

      if (user.role === 'admin') return true;

      if (user.role === 'accountmanager') {
        return true;
      }

      return false;
    },
    // Prevent deletion of courses
    delete: () => false,
  },
  admin: {
    useAsTitle: 'title',
    hidden: ({ user }) => {
      const { role } = user || {};

      // Admins and account managers can see the courses in the admin panel
      if (role === 'admin' || role === 'accountmanager') return false;

      // Hide courses for all other roles
      return true;
    },
  },
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        console.log('Courses: Before Validate - Incoming Data:', data);
        console.log('Logged-In User:', req.user);

        data ??= {};

        if (req.user?.role === 'accountmanager') {
          if (!req.user.instituteId) {
            throw new Error('Account managers must have an associated institute.');
          }
          data.instituteId =
            typeof req.user.instituteId === 'string'
              ? req.user.instituteId
              : req.user.instituteId?.id;
        }

        return data;
      },
    ],
    beforeChange: [
      ({ data, req }) => {
        console.log('Courses: Before Change - Modified Data:', data);

        data ??= {};

        if (req.user?.role === 'accountmanager') {
          data.instituteId =
            typeof req.user.instituteId === 'string'
              ? req.user.instituteId
              : req.user.instituteId?.id || data.instituteId;
        }

        return data;
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'summary',
      type: 'richText',
      required: true,
      label: 'Summary (Rich Text)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'coursecategories',
      required: true,
    },
    { name: 'slug', type: 'text', unique: true },
    { name: 'isFeatured', type: 'checkbox', defaultValue: false },
    { name: 'isPopular', type: 'checkbox', defaultValue: false },
    {
      name: 'instituteId',
      type: 'relationship',
      relationTo: 'institute',
      required: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data, req }) => {
            data ??= {};

            if (req.user?.role === 'accountmanager') {
              data.instituteId =
                typeof req.user.instituteId === 'string'
                  ? req.user.instituteId
                  : req.user.instituteId?.id || data.instituteId;
            }
            return data;
          },
        ],
      },
    },
    {
      name: 'course_content',
      type: 'array',
      label: 'Course Content',
      fields: [
        {
          name: 'topic',
          type: 'text',
          required: true,
          label: 'Topic',
        },
        {
          name: 'subtopic',
          type: 'richText',
          required: true,
          label: 'Subtopic',
        },
      ],
    },
    {
      name: 'course_content_pdf',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Course Content PDF',
    },
    {
      name: 'usp',
      type: 'array',
      label: 'Unique Selling Points (USPs)',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'USP Main Text',
        },
        {
          name: 'subText',
          type: 'text',
          required: false,
          label: 'USP Sub Text',
        },
      ],
    },
    {
      name: 'learnings',
      type: 'array',
      label: 'What You Will Learn',
      fields: [
        {
          name: 'learning_item',
          type: 'text',
          required: true,
          label: 'Learning Item (One Liner)',
        },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills Gained',
      fields: [
        {
          name: 'skill_item',
          type: 'text',
          required: true,
          label: 'Skill Item (One Liner)',
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
      name: 'upcoming',
      type: 'checkbox',
      label: 'Upcoming',
      defaultValue: false,
    },
    {
      name: 'token',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'seotitle',
      type: 'text',
      label: 'SEO Title',
    },
    {
      name: 'seodescription',
      type: 'textarea',
      label: 'SEO Description',
    },
    {
      name: 'completion_time',
      type: 'text',
      required: false,
      label: 'Course Completion Time',
    },
    {
      name: 'price_ind',
      type: 'text',
      required: false,
      label: 'BasePrice India',
    },
    {
      name: 'sales_price_ind',
      type: 'text',
      required: false,
      label: 'Sales Price India',
    },
    {
      name: 'price_usd',
      type: 'text',
      required: false,
      label: 'Base Price USD',
    },
    {
      name: 'sales_price_usd',
      type: 'text',
      required: false,
      label: 'Sales Price USD',
    },
    {
      name: 'youtube_url',
      type: 'text',
      required: false,
      label: 'Youtube URL',
    },
    {
      name: 'bot_url',
      type: 'text',
      required: false,
      label: 'Bot URL',
    },
    {
      name: 'prioritysequence',
      type: 'text',
      required: false,
      label: 'Priority Sequence',
    },
  ],
};