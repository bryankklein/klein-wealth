import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
import {youtubeEmbedType} from './youtubeEmbedType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, postType, youtubeEmbedType],
}
