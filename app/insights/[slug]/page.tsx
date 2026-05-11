import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
import {client} from '@/sanity/lib/client'
import {urlFor} from '@/sanity/lib/image'
import {postBySlugQuery, postSlugsQuery} from '@/sanity/lib/queries'

export const revalidate = 60

type SanityImage = {
  asset: {
    _id: string
    url: string
    metadata: {dimensions: {width: number; height: number}}
  }
  alt?: string
}

type PostDetail = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImage
  body?: unknown[]
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{slug: string}[]>(postSlugsQuery)
  return slugs.map(({slug}) => ({slug}))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>
}): Promise<Metadata> {
  const {slug} = await params
  const post = await client.fetch<PostDetail | null>(postBySlugQuery, {slug})
  if (!post) return {}
  return {
    title: `${post.title} — Klein Wealth Management`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const post = await client.fetch<PostDetail | null>(
    postBySlugQuery,
    {slug},
    {next: {tags: ['post', `post:${slug}`]}},
  )
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <article>
          <PostHeader post={post} />
          {post.mainImage && <FeaturedImage image={post.mainImage} />}
          <PostBody body={post.body} />
        </article>
        <BackToInsights />
      </main>
      <SiteFooter />
    </div>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function PostHeader({post}: {post: PostDetail}) {
  return (
    <header className="pt-10 lg:pt-14 pb-6 lg:pb-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <time className="font-mono text-muted-foreground text-xs tracking-wider block mb-4">
          {formatDate(post.publishedAt)}
        </time>
        <h1 className="font-serif font-light text-3xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="font-serif font-light text-lg lg:text-xl text-foreground/80 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </div>
    </header>
  )
}

function FeaturedImage({image}: {image: SanityImage}) {
  const {width, height} = image.asset.metadata.dimensions
  const src = urlFor(image).width(1200).auto('format').url()
  return (
    <figure className="mx-auto max-w-3xl px-6 lg:px-8 mb-8 lg:mb-12">
      <Image
        src={src}
        alt={image.alt || ''}
        width={width}
        height={height}
        className="w-full h-auto"
        sizes="(min-width: 1024px) 704px, 100vw"
        priority
      />
    </figure>
  )
}

function PostBody({body}: {body?: unknown[]}) {
  if (!body || body.length === 0) return null
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-14 lg:pb-20">
      <div className="text-foreground/85 text-lg leading-relaxed">
        <PortableText
          value={body as Parameters<typeof PortableText>[0]['value']}
          components={portableTextComponents}
        />
      </div>
    </div>
  )
}

function BackToInsights() {
  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          All insights
        </Link>
      </div>
    </section>
  )
}

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null
    if (u.hostname.replace(/^www\./, '') === 'youtube.com') {
      if (u.pathname === '/watch') return u.searchParams.get('v')
      if (u.pathname.startsWith('/embed/')) return u.pathname.slice('/embed/'.length) || null
      if (u.pathname.startsWith('/shorts/')) return u.pathname.slice('/shorts/'.length) || null
    }
    return null
  } catch {
    return null
  }
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({value}) => {
      if (!value?.asset) return null
      const dims = value.asset?.metadata?.dimensions
      const src = urlFor(value).width(1600).auto('format').url()
      return (
        <figure className="my-8 -mx-6 lg:mx-0">
          <Image
            src={src}
            alt={value.alt || ''}
            width={dims?.width ?? 1600}
            height={dims?.height ?? 1067}
            className="w-full h-auto"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
          {value.alt && (
            <figcaption className="text-muted-foreground text-sm mt-3 italic text-center">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
    youtubeEmbed: ({value}) => {
      const videoId = value?.url ? getYouTubeId(value.url) : null
      if (!videoId) return null
      return (
        <figure className="my-8 -mx-6 lg:mx-0">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={value.caption || 'YouTube video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {value.caption && (
            <figcaption className="text-muted-foreground text-sm mt-3 italic text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    normal: ({children}) => (
      <p className="my-5 leading-relaxed">{children}</p>
    ),
    h2: ({children}) => (
      <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink mt-12 mb-4 tracking-[0.01em] leading-[1.2]">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mt-10 mb-3 tracking-[0.01em] leading-[1.25]">
        {children}
      </h3>
    ),
    blockquote: ({children}) => (
      <blockquote className="font-serif font-light text-xl lg:text-2xl text-ink my-8 pl-6 border-l-2 border-accent leading-snug italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="my-5 space-y-2 list-disc list-outside pl-6">{children}</ul>
    ),
    number: ({children}) => (
      <ol className="my-5 space-y-2 list-decimal list-outside pl-6">{children}</ol>
    ),
  },
  marks: {
    strong: ({children}) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    link: ({value, children}) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-accent underline underline-offset-2 hover:text-ink transition-colors"
      >
        {children}
      </a>
    ),
  },
}
