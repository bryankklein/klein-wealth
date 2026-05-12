import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { client } from "@/sanity/lib/client";
import { recentPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type RecentPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
};

export default async function HomePage() {
  const recentPosts = await client.fetch<RecentPost[]>(
    recentPostsQuery,
    {},
    { next: { tags: ["post"] } },
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <FiduciaryPromise />
        <HowWeWork />
        {recentPosts.length > 0 && <RecentInsights posts={recentPosts} />}
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Quiet study interior with reading chair and window"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-2xl py-32">
          <p className="text-background/70 text-xs tracking-[0.15em] uppercase mb-6">
            Independent Registered Investment Advisor
          </p>

          <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-background leading-[1.15] tracking-[0.01em] mb-8 text-balance">
            Wealth, on your terms.
          </h1>

          <p className="text-background/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            As a CFP® professional with over 20 years of experience, I provide
            personalized fiduciary financial planning built around your life —
            not products or commissions.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center text-background/90 hover:text-background transition-colors text-sm tracking-wide group"
          >
            Schedule a conversation
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FiduciaryPromise() {
  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.015em]">
              The Fiduciary Promise
            </h2>

            <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>
                Doing the right thing is the only thing to do. In an industry
                often driven by commissions and product sales, we chose a
                different path — acting as fiduciaries on every piece of
                financial advice we give, operating with transparency,
                avoiding conflicts of interest, and putting the client first.
              </p>

              <p>The tenets under which we operate:</p>

              <ul className="space-y-3">
                {[
                  "As fiduciaries, we will put our clients' interests first, ahead of our own.",
                  "We will avoid conflicts of interest whenever possible, and will disclose any unavoidable conflicts of interest should they arise.",
                  "We will serve our clients with integrity, objectivity, honesty, and professionalism.",
                  "We will provide full and fair disclosure of all fees charged to clients.",
                  "We will provide our written privacy policy, code of ethics, business practices, and professional responsibilities.",
                  "We will invest our own assets in the same portfolios that we recommend to clients.",
                ].map((tenet) => (
                  <li key={tenet} className="flex">
                    <span
                      className="mr-3 text-accent flex-shrink-0"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span>{tenet}</span>
                  </li>
                ))}
              </ul>

              <p>
                The result of our fiduciary promise is that we will act as
                champions for our clients&apos; best interests.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/detail.jpg"
                alt="Fountain pen resting on an open notebook"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Listen",
      description:
        "We begin with a deep conversation about your life, your values, and your aspirations. Understanding what matters most to you is the foundation of everything that follows.",
      image: "/images/listen.jpg",
      alt: "Two people in thoughtful conversation",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Together, we craft a comprehensive financial plan tailored to your unique circumstances — one that adapts as your life evolves and markets shift.",
      image: "/images/plan.jpg",
      alt: "Documents and pen on a desk",
    },
    {
      number: "03",
      title: "Steward",
      description:
        "With your plan as our guide, we manage your investments with discipline and care, providing ongoing counsel and making adjustments as life unfolds.",
      image: "/images/steward.jpg",
      alt: "Hands carefully tending to details",
    },
  ];

  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
            Our Process
          </p>
          <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.015em]">
            How we work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 items-stretch">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col h-full">
              <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
                {step.number}
              </span>
              <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mb-3 tracking-[0.01em]">
                {step.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-[15px] mb-6">
                {step.description}
              </p>
              <div className="relative aspect-[4/3] w-full mt-auto">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatMonthYear(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function RecentInsights({ posts }: { posts: RecentPost[] }) {
  return (
    <section className="pt-8 lg:pt-12 pb-14 lg:pb-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
              From the Blog
            </p>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em]">
              Recent Insights
            </h2>
          </div>

          <Link
            href="/insights"
            className="hidden md:inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group"
          >
            View all
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post) => (
            <article key={post._id} className="group">
              <time className="font-mono text-muted-foreground text-xs tracking-wider block mb-3">
                {formatMonthYear(post.publishedAt)}
              </time>
              <h3 className="font-serif font-light text-lg lg:text-xl text-ink mb-3 leading-snug tracking-[0.005em] group-hover:text-accent transition-colors">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.excerpt && (
                <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center text-accent hover:text-ink transition-colors text-sm group/link"
              >
                Read
                <span className="ml-1 group-hover/link:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/insights"
          className="md:hidden inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group mt-12"
        >
          View all insights
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
