import { defineField, defineType } from 'sanity'

export const alumni = defineType({
  name: 'alumni',
  title: 'Alumni Work',
  type: 'document',
  fields: [
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'studentId',
      title: 'Student ID',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Work Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'certificationDate',
      title: 'Certification Date',
      type: 'date',
    }),
  ],
})
