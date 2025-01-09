import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const statusFields = [
  {
    name: 'active',
    type: 'checkbox',
    label: 'Active',
    defaultValue: true,
  },
  {
    name: 'token',
    type: 'text',
    unique: true,
    admin: {
      readOnly: true,
    },
  },
];

const mediaField = {
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  label: 'Image',
};

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => false,
    update: () => true,
  },
  fields: [
    { name: 'username', type: 'text', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true, unique: true },
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      required: true,
      defaultValue: 'siteusers',
      options: [
        { label: 'Site User', value: 'siteusers' },
        { label: 'Account Manager', value: 'accountmanager' },
      ],
      admin: {
        description: 'Specify the role of the user.',
      },
    },
    mediaField,
    {
      name: 'linkedin_link',
      type: 'text',
      admin: { placeholder: 'https://linkedin.com/in/your-profile' },
    },
    {
      name: 'twitter_link',
      type: 'text',
      admin: { placeholder: 'https://twitter.com/your-profile' },
    },
    ...statusFields,
  ],
};