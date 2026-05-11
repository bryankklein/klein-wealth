import type {Metadata} from 'next'
import Link from 'next/link'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
import {client} from '@/sanity/lib/client'
import {postsListQuery} from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Insights — Klein Wealth Management',
  description:
    'Writing on financial planning, investing, retirement, and the long view from Klein Wealth Management.',
}

// Refresh from Sanity every 60 seconds.
export const revalidate = 60

type PostListItem = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function InsightsPage() {
  const posts = await client.fetch<PostListItem[]>(postsListQuery, {}, {
    next: {tags: ['post']},
  })

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageIntro />
        <PostList posts={posts} />
      </main>
      <SiteFooter />
    </div>
  )
}

function PageIntro() {
  return (
    <section className="pt-10 lg:pt-14 pb-6 lg:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
            Writing
          </p>
          <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
            Insights
          </h1>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            Occasional writing on financial planning, investing, and the long
            view — for clients, prospective clients, and anyone trying to
            think more clearly about their wealth.
          </p>
        </div>
      </div>
    </section>
  )
}

function PostList({posts}: {posts: PostListItem[]}) {
  if (posts.length === 0) {
    return (
      <section className="py-10 lg:py-14 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            No insights published yet — check back soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group max-w-3xl"
            >
              <time className="font-mono text-muted-foreground text-xs tracking-wider block mb-3">
                {formatDate(post.publishedAt)}
              </time>
              <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink mb-4 leading-[1.2] tracking-[0.01em] group-hover:text-accent transition-colors">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.excerpt && (
                <p className="text-foreground/80 leading-relaxed text-[15px] mb-4">
                  {post.excerpt}
                </p>
              )}
              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group/link"
              >
                Read
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
