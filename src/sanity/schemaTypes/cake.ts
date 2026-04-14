import { defineField, defineType } from 'sanity'

export const cake = defineType({
  name: 'cake',
  title: 'Cakes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cake Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold Out', value: 'sold-out' },
        ],
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Signature Cakes', value: 'signature' },
          { title: 'Wedding Cakes', value: 'wedding' },
          { title: 'Birthday Cakes', value: 'birthday' },
        ],
      },
    }),
  ],
})
