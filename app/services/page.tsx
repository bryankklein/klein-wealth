import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Services — Klein Wealth Management",
  description:
    "Fee-only fiduciary financial planning, investment management, retirement income planning, and tax-aware strategies. How we work and what you receive.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageIntro />
        <Approach />
        <Process />
        <ServicePillars />
        <Deliverables />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function PageIntro() {
  return (
    <section className="pt-6 lg:pt-8 pb-4 lg:pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
              What we do
            </p>
            <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
              Services
            </h1>
            <p className="text-foreground/80 leading-relaxed text-[15px]">
              Wealth management is more than picking investments. It is a
              process of understanding what matters to you, building a plan
              that adapts as your life evolves, and stewarding your assets
              with discipline over decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="py-6 lg:py-8 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.015em]">
              Fee-only, no commissions
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-foreground/80 leading-relaxed text-[15px]">
            <p>
              As a fee-only fiduciary, our compensation comes directly from
              the clients we serve — not from product manufacturers,
              brokerages, or insurance companies. That structural alignment
              lets us offer advice that is, by design, free of the conflicts
              of interest that drive much of the financial services industry.
            </p>
            <p>
              Transparency is built in. You will always know what you are
              paying, what you are receiving, and why we are making the
              recommendations we make. No hidden fees. No revenue-sharing
              arrangements. No products to push.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Listen",
      image: "/images/listen.jpg",
      alt: "Two people in thoughtful conversation",
      paragraphs: [
        "We begin every relationship with a conversation, not a pitch. Before we look at numbers, we want to understand the life behind them — your work, your family, your obligations, the people and causes you care about, and the things you want to be different ten or thirty years from now.",
        "This is the work most often skipped in our industry. Done well, it shapes every recommendation that follows. Done poorly, it leaves clients with portfolios that are technically optimized for goals they never actually had.",
      ],
    },
    {
      number: "02",
      title: "Plan",
      image: "/images/plan.jpg",
      alt: "Documents and pen on a desk",
      paragraphs: [
        "From those conversations, we build a comprehensive financial plan that addresses cash flow, retirement timing, investment allocation, tax strategy, insurance, and estate considerations. The plan is a working document — concrete enough to act on today, flexible enough to evolve as your circumstances change.",
        "We are particularly attentive to the inflection points: the years before retirement, the early years of drawing down savings, the transitions that come with selling a business or supporting an aging parent. These are the moments where careful planning earns its keep many times over.",
      ],
    },
    {
      number: "03",
      title: "Steward",
      image: "/images/steward.jpg",
      alt: "Hands carefully tending to details",
      paragraphs: [
        "With your plan in place, we manage your investments and check in regularly. Markets move, tax law changes, life shifts. Our job is to make the small adjustments that keep your strategy on course — and to know when to do nothing, which is often the most valuable thing we can do.",
        "You will hear from us with quarterly reviews, an annual planning meeting, and as often as life requires in between. We work closely with your accountant, attorney, and other professionals so the pieces of your financial life work together rather than against each other.",
      ],
    },
  ];

  return (
    <section className="pt-6 lg:pt-8 pb-10 lg:pb-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
            Our Process
          </p>
          <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-4">
            How we work together
          </h2>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            Three commitments — listening carefully before recommending
            anything, building plans that adapt as life changes, and
            stewarding your wealth with care for the long term.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 41vw, 100vw"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
                  {step.number}
                </span>
                <h3 className="font-serif font-light text-2xl lg:text-3xl text-ink mb-6 tracking-[0.01em]">
                  {step.title}
                </h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
                  {step.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePillars() {
  const services = [
    {
      number: "01",
      title: "Comprehensive Financial Planning",
      body: "We build a written plan that addresses every meaningful piece of your financial life — cash flow, retirement projections, tax-aware investment strategy, insurance, estate considerations, and the goals that drive all of it. The plan is reviewed annually and updated as your circumstances evolve.",
    },
    {
      number: "02",
      title: "Investment Management",
      body: "We manage portfolios on a discretionary basis, with allocation decisions driven by your plan rather than by market commentary or short-term forecasts. We favor low-cost, tax-efficient strategies and rebalance with discipline rather than emotion. Custody of your assets is held at Charles Schwab; we never take possession of the money directly.",
    },
    {
      number: "03",
      title: "Retirement Income Planning",
      body: "The transition from accumulating wealth to drawing it down requires a different set of decisions: when to take Social Security, how to sequence withdrawals across taxable and tax-deferred accounts, how to plan for healthcare, and how to think about longevity. We help you build a strategy that holds up across decades, not just calendar years.",
    },
    {
      number: "04",
      title: "Tax-Aware Strategies",
      body: "Taxes are one of the largest controllable costs in a long-term investment plan. We coordinate with your CPA on asset location, tax-loss harvesting, Roth conversion strategy, charitable giving, and the tax implications of every major financial decision. Small efficiencies, applied consistently, compound into meaningful outcomes.",
    },
  ];

  return (
    <section className="pt-6 lg:pt-8 pb-10 lg:pb-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 lg:mb-10">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
            Services
          </p>
          <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em]">
            What we offer
          </h2>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-4">
                <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
                  {service.number}
                </span>
                <h3 className="font-serif font-light text-2xl lg:text-3xl text-ink tracking-[0.01em]">
                  {service.title}
                </h3>
              </div>

              <div className="lg:col-span-8 lg:mt-8 text-foreground/80 leading-relaxed text-[15px]">
                <p>{service.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Deliverables() {
  const items = [
    {
      title: "A written financial plan",
      body: "A comprehensive document covering goals, projections, allocation, taxes, and recommendations — reviewed annually and updated as life changes.",
    },
    {
      title: "Quarterly portfolio reviews",
      body: "Reports summarizing performance, allocation drift, and any rebalancing actions taken on your behalf during the period.",
    },
    {
      title: "Annual planning meeting",
      body: "A focused conversation each year to revisit the plan, update assumptions, and adjust to whatever the year has brought.",
    },
    {
      title: "Coordination with your professionals",
      body: "We work directly with your CPA, attorney, and other advisors so your financial decisions are made in concert rather than in silos.",
    },
    {
      title: "Direct access",
      body: "Calls, emails, or in-person meetings as life requires — not gated behind a service tier or a junior associate.",
    },
    {
      title: "Independent custody at Charles Schwab",
      body: "Your assets are held by an independent custodian. We have authority to manage them on your behalf, never to move them.",
    },
  ];

  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
            What you receive
          </p>
          <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-4">
            Deliverables
          </h2>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            Working with us means tangible outputs — not just conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mb-3 tracking-[0.005em]">
                {item.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="py-6 lg:py-8 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.015em] mb-6">
            Wealth, on your terms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group"
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
