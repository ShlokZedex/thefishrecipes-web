import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import metadata from './schemas/metadata'
import tag from './schemas/tag'
import redirect from './schemas/redirect'
import siteConfig from './schemas/siteConfig'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteConfig, post, author, category, blockContent , metadata, tag, redirect],
}
