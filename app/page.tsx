import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <FiduciaryPromise />
        <HowWeWork />
        <RecentInsights />
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
          <div className="lg:col-span-4">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.015em]">
              The Fiduciary Promise
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10 lg:space-y-12">
            <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>
                In an industry often driven by commissions and product sales,
                we chose a different path. As a fee-only fiduciary, I am
                legally and ethically bound to act in your best interest — not
                the interest of a brokerage, insurance company, or fund
                manager.
              </p>
              <p>
                This means no hidden fees, no conflicted advice, and no
                pressure to buy products you don&apos;t need. Just clear,
                honest guidance designed to help you build and preserve wealth
                on your own terms.
              </p>
            </div>

            <div className="flex justify-end">
              <div className="relative w-full max-w-md aspect-[4/3]">
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
    <section className="py-14 lg:py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
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

function RecentInsights() {
  const insights = [
    {
      date: "Apr 2026",
      title: "The Quiet Power of Doing Nothing",
      excerpt:
        "In volatile markets, the most valuable thing an advisor can do is help you resist the urge to act. Here's why patience remains your greatest asset.",
      slug: "quiet-power-doing-nothing",
    },
    {
      date: "Mar 2026",
      title: "Rethinking Retirement in Your Fifties",
      excerpt:
        "The decade before retirement is often the most consequential. A framework for the decisions that matter most as the finish line comes into view.",
      slug: "rethinking-retirement-fifties",
    },
    {
      date: "Feb 2026",
      title: "What Fiduciary Actually Means",
      excerpt:
        "The word gets thrown around carelessly in our industry. Here's what it should mean — and how to tell if your advisor truly operates by it.",
      slug: "what-fiduciary-means",
    },
  ];

  return (
    <section className="py-14 lg:py-20 border-t border-border/50">
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
          {insights.map((insight) => (
            <article key={insight.slug} className="group">
              <time className="font-mono text-muted-foreground text-xs tracking-wider block mb-3">
                {insight.date}
              </time>
              <h3 className="font-serif font-light text-lg lg:text-xl text-ink mb-3 leading-snug tracking-[0.005em] group-hover:text-accent transition-colors">
                <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-2">
                {insight.excerpt}
              </p>
              <Link
                href={`/insights/${insight.slug}`}
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
