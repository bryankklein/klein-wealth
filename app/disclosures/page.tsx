import type {Metadata} from 'next'
import Image from 'next/image'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Disclosures — Klein Wealth Management',
  description:
    'CFP certification, Form ADV, privacy policy, and general disclosures for Klein Wealth Management, LLC.',
}

const sections = [
  {id: 'cfp', label: 'CFP® Certification'},
  {id: 'adv', label: 'Form ADV'},
  {id: 'privacy', label: 'Privacy Policy'},
  {id: 'general', label: 'General Disclosures'},
]

export default function DisclosuresPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageIntro />
        <CfpSection />
        <AdvSection />
        <PrivacySection />
        <GeneralSection />
      </main>
      <SiteFooter />
    </div>
  )
}

function PageIntro() {
  return (
    <section className="pt-10 lg:pt-14 pb-6 lg:pb-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
          Disclosures
        </p>
        <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
          Disclosures
        </h1>
        <p className="text-foreground/80 leading-relaxed text-[15px] mb-8">
          Information about our credentials, regulatory filings, privacy
          practices, and general disclosures required of registered investment
          advisors.
        </p>
        <nav aria-label="On this page">
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
            On this page
          </p>
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-accent hover:text-ink transition-colors text-[15px]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

function CfpSection() {
  return (
    <section
      id="cfp"
      className="py-10 lg:py-14 border-t border-border/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
          Credentials
        </p>
        <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-6">
          CFP® Certification
        </h2>

        <p className="text-foreground/80 leading-relaxed text-[15px] mb-8">
          Certified Financial Planner Board of Standards Center for Financial
          Planning, Inc. owns and licenses the certification marks CFP®,
          CERTIFIED FINANCIAL PLANNER®, and CFP® (with plaque design) in the
          United States to Certified Financial Planner Board of Standards,
          Inc., which authorizes individuals who successfully complete the
          organization&apos;s initial and ongoing certification requirements
          to use the certification marks.
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex-shrink-0">
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
      </div>
    </section>
  )
}

function AdvSection() {
  return (
    <section
      id="adv"
      className="py-10 lg:py-14 border-t border-border/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
          Regulatory Filings
        </p>
        <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-6">
          Form ADV
        </h2>

        <p className="text-foreground/80 leading-relaxed text-[15px] mb-6">
          Form ADV is the disclosure document we file with the U.S. Securities
          and Exchange Commission. Part 2A describes our business practices,
          fees, conflicts of interest, and code of ethics. Part 2B covers the
          background of our advisors.
        </p>

        <ul className="space-y-3">
          <li>
            <a
              href="/forms/form-adv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-ink transition-colors text-[15px]"
            >
              Form ADV
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>
          </li>
          <li>
            <a
              href="/forms/form-adv-2a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-ink transition-colors text-[15px]"
            >
              Form ADV Part 2A — Brochure
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>
          </li>
          <li>
            <a
              href="/forms/form-adv-2b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-ink transition-colors text-[15px]"
            >
              Form ADV Part 2B — Brochure Supplement
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function PrivacySection() {
  return (
    <section
      id="privacy"
      className="py-10 lg:py-14 border-t border-border/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
          Privacy
        </p>
        <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-8">
          Privacy Policy
        </h2>

        <div className="space-y-5 text-foreground/80 leading-relaxed text-[15px]">
          <p>
            Klein Wealth Management, LLC considers the privacy of its clients
            to be of fundamental importance and has established a policy to
            maintain the confidentiality of the information you share with us.
          </p>
          <p>
            In providing asset management services to you, we collect certain
            nonpublic information about you. Our policy is to keep this
            information confidential and strictly safeguarded, and to use or
            disclose it only as needed to provide services to you, or as
            permitted or required by law. This policy is applicable to
            information for current and former clients.
          </p>

          <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mt-8 mb-3 tracking-[0.01em]">
            Information we collect
          </h3>
          <p>
            The personal information we collect directly from you includes
            information required to communicate with you and assist us in
            effectively addressing your financial needs. This information
            could include:
          </p>
          <ul className="space-y-2 list-disc list-outside pl-6">
            <li>Your name and address</li>
            <li>Investment objectives and experience</li>
            <li>Financial circumstances</li>
            <li>Account balance and account transactions</li>
            <li>Social security number</li>
            <li>Employment information</li>
          </ul>

          <p className="mt-4 font-semibold text-ink">
            We collect your personal information, for example, from the
            following sources:
          </p>
          <ul className="space-y-2 list-disc list-outside pl-6">
            <li>Information we receive from you on applications and other forms</li>
            <li>Information about your transactions with us or others</li>
          </ul>
          <p>
            We also collect your personal information from others such as
            custodians, such as Schwab, broker/dealers and other companies.
          </p>

          <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mt-8 mb-3 tracking-[0.01em]">
            How information is used
          </h3>
          <p>
            All financial companies need to share client personal information
            to run their everyday business. We use information about you to
            provide our asset management services to you. We may disclose the
            information to third parties as permitted by law, including the
            broker/dealers, custodians or other companies used to provide
            services to you. From time to time, we may be required to give
            information about our business to regulatory authorities. This
            may include personal information about you. We do not sell your
            personal information to anyone.
          </p>

          <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mt-8 mb-3 tracking-[0.01em]">
            How information is safeguarded
          </h3>
          <p>
            We have procedures in place that we believe are reasonably
            designed to protect the security and confidentiality of your
            information. These include confidentiality agreements with
            companies we hire to help us provide services to you,
            password-protected user access to our computer files, training of
            employees, and strict confidentiality policies that apply to all
            employees.
          </p>

          <h3 className="font-serif font-light text-xl lg:text-2xl text-ink mt-8 mb-3 tracking-[0.01em]">
            Contact Information
          </h3>
          <p>
            If you have any questions, concerns or comments about our privacy
            policy, you may contact Bryan Klein at{' '}
            <a
              href="tel:+19049101426"
              className="text-accent hover:text-ink transition-colors"
            >
              904-910-1426
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function GeneralSection() {
  const items = [
    'This website is for informational and educational purposes only. Nothing on this site should be construed as a solicitation or offer to buy or sell any securities, investments, or investment strategies.',
    'Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal.',
    "Klein Wealth Management, LLC is a registered investment advisor. Charles Schwab serves as the firm's custodian; Klein Wealth Management, LLC is not affiliated with Charles Schwab.",
    'Links to third-party websites are provided as a convenience. Klein Wealth Management, LLC does not endorse the content of any linked site and is not responsible for its accuracy.',
  ]

  return (
    <section
      id="general"
      className="py-10 lg:py-14 border-t border-border/50 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-3">
          Disclaimers
        </p>
        <h2 className="font-serif font-light text-3xl lg:text-4xl text-ink leading-[1.2] tracking-[0.015em] mb-8">
          General Disclosures
        </h2>

        <ul className="space-y-5 text-foreground/80 leading-relaxed text-[15px]">
          {items.map((item) => (
            <li key={item} className="flex">
              <span
                className="mr-3 text-accent flex-shrink-0"
                aria-hidden="true"
              >
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
