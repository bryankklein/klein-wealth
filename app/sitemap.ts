import type {MetadataRoute} from 'next'
import {client} from '@/sanity/lib/client'
import {postsListQuery} from '@/sanity/lib/queries'

export const revalidate = 60

const SITE_URL = 'https://www.klein-wealth.com'

const staticPaths = [
  '',
  '/team',
  '/services',
  '/insights',
  '/contact',
  '/disclosures',
  '/client-login',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<{slug: string; publishedAt: string}[]>(
    postsListQuery,
  )

  return [
    ...staticPaths.map((path) => ({url: `${SITE_URL}${path}`})),
    ...posts.map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ]
}
