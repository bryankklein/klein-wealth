import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Team — Klein Wealth Management",
  description:
    "Meet Bryan Klein, CFP® and Noah Strunk, CFP® — the team behind Klein Wealth Management's fee-only fiduciary financial planning practice.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageIntro />
        <PrimaryBio />
        <SecondaryBio />
        <ClosingCta />
        <ComplianceDisclosure />
      </main>
      <SiteFooter />
    </div>
  );
}

function PageIntro() {
  return (
    <section className="pt-10 lg:pt-14 pb-6 lg:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
          Who we are
        </p>
        <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em]">
          Meet our team
        </h1>
      </div>
    </section>
  );
}

function PrimaryBio() {
  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/bryan.jpg"
                alt="Bryan Klein, founder of Klein Wealth Management"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
              Principal Wealth Advisor, CFP® Professional, M.S.
            </p>
            <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink mb-6 leading-[1.15] tracking-[0.01em]">
              Bryan Klein
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>
                After graduating from Texas Tech in 2001 with a degree in
                business economics, Bryan discovered his passion for breaking
                down complex financial concepts into simple, actionable steps.
                In 2002, he began his career as a financial advisor, where he
                quickly learned the importance of planning. Witnessing the
                devastating effects of the tech bubble on unprepared clients
                cemented his belief that &ldquo;failing to plan is planning to
                fail.&rdquo;
              </p>
              <p>
                Bryan worked with American Express and TD Waterhouse (now
                Schwab) before finding greater challenges at Fidelity
                Investments. During his time there, he earned a Master of
                Science in Finance from Boston University and completed his
                CERTIFIED FINANCIAL PLANNER™ (CFP®) designation. More
                importantly, he recognized the value of forming long-term
                relationships with clients seeking transparent and unbiased
                financial advice.
              </p>
              <p>
                In 2019, Bryan founded Klein Wealth Management, LLC, to offer
                more personalized financial planning and investment strategies.
                Partnering with Charles Schwab as his custodian, Bryan is proud
                to prioritize his clients&apos; best interests with planning
                over products. He takes pride in simplifying complex financial
                matters so his clients can understand how and why they can
                achieve their goals.
              </p>
              <p>
                Outside of work, Bryan enjoys spending time with his wife, two
                teenage daughters, running, surfing and volunteering for the
                SIFMA Foundation — which is dedicated to helping students
                achieve financial literacy.
              </p>
            </div>

            <div className="mt-8">
              <CfpCredentialBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecondaryBio() {
  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/noah.jpg"
                alt="Noah Strunk, Wealth Advisor at Klein Wealth Management"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
              Wealth Advisor, CFP® Professional, MBA
            </p>
            <h2 className="font-serif font-light text-2xl lg:text-3xl text-ink mb-6 leading-[1.2] tracking-[0.01em]">
              Noah Strunk
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>
                Noah&apos;s interest in financial markets began at a young age,
                inspired by his grandfather. This passion led him to pursue
                both a BA and MBA in Business/Finance from the University of
                North Florida. Eager to apply his knowledge in a meaningful
                way, Noah embarked on a career at Fidelity Investments, where
                he spent more than 10 years honing his skills. During this
                time, he earned the CERTIFIED FINANCIAL PLANNER™ (CFP®)
                designation and developed a deep understanding of not only
                managing capital but also guiding clients through the
                emotional aspects of investing.
              </p>
              <p>
                After Fidelity, Noah joined a boutique wealth management firm
                in South Florida, where he discovered the benefits of building
                closer, more personalized relationships with clients — an
                approach that aligned with his desire to foster greater
                success for them. Motivated by this experience and a strong
                partnership with Bryan, he joined Klein Wealth Management.
                Together, they are committed to putting clients&apos;
                interests first and educating them on the reasoning behind
                their financial decisions.
              </p>
              <p>
                Outside of work, Noah enjoys spending time with his wife and
                three young children, playing golf, and traveling in search
                of the perfect wave.
              </p>
            </div>

            <div className="mt-8">
              <CfpCredentialBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CfpCredentialBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
        <Image
          src="/images/cfp-logo-plaque-black-outline.webp"
          alt="CFP® certification mark"
          fill
          className="object-contain"
        />
      </div>
      <a
        href="https://www.cfp.net/verify-a-cfp-professional"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-accent hover:text-ink transition-colors"
      >
        Verify CFP® certification
        <span className="ml-1" aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  );
}

function ClosingCta() {
  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
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

function ComplianceDisclosure() {
  return (
    <section className="py-8 lg:py-10 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl text-muted-foreground text-xs leading-relaxed space-y-3">
          <p>
            Certified Financial Planner Board of Standards Center for
            Financial Planning, Inc. owns and licenses the certification marks
            CFP®, CERTIFIED FINANCIAL PLANNER®, and CFP® (with plaque design)
            in the United States to Certified Financial Planner Board of
            Standards, Inc., which authorizes individuals who successfully
            complete the organization&apos;s initial and ongoing certification
            requirements to use the certification marks.
          </p>
          <p>
            Klein Wealth Management, LLC is a registered investment advisor.{" "}
            <a
              href="https://adviserinfo.sec.gov/firm/summary/307078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-ink transition-colors"
            >
              View our Form ADV
              <span className="ml-1" aria-hidden="true">
                ↗
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
