import { defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Academy Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Course Name',
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
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'syllabus',
      title: 'Syllabus',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'status',
      title: 'Batch Status',
      type: 'string',
      options: {
        list: [
          { title: 'Enrolling', value: 'enrolling' },
          { title: 'Batch Full', value: 'full' },
        ],
      },
      initialValue: 'enrolling',
    }),
  ],
})
