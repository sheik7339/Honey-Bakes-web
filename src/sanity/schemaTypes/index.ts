import { type SchemaTypeDefinition } from 'sanity'
import { cake } from './cake'
import { course } from './course'
import { alumni } from './alumni'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cake, course, alumni],
}
