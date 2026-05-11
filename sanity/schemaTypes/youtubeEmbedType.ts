import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const youtubeEmbedType = defineType({
  name: 'youtubeEmbed',
  title: 'YouTube embed',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      description: 'Paste any YouTube URL (watch, share, or embed format).',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['http', 'https']})
          .custom((url) => {
            if (!url) return true
            const pattern = /youtube\.com\/(watch\?v=|embed\/|shorts\/)|youtu\.be\//
            return pattern.test(url) || 'Must be a YouTube URL'
          }),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {url: 'url', caption: 'caption'},
    prepare({url, caption}) {
      return {
        title: caption || 'YouTube video',
        subtitle: url,
      }
    },
  },
})
