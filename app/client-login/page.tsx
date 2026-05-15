import type {Metadata} from 'next'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Client Login — Klein Wealth Management',
  description:
    'Sign in to your Charles Schwab account. Klein Wealth Management does not collect or store your Schwab credentials.',
}

const SCHWAB_LOGIN_URL = 'https://client.schwab.com/'

export default function ClientLoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="pt-10 lg:pt-14 pb-10 lg:pb-14">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <p className="text-accent text-xs tracking-[0.15em] uppercase mb-4">
              Client Portal
            </p>
            <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
              Sign in to your account
            </h1>
            <p className="text-foreground/80 leading-relaxed text-[15px] mb-10">
              Your accounts are held at Charles Schwab. Click below to sign
              in directly at schwab.com. For your security, Klein Wealth
              Management never collects or stores your Schwab credentials.
            </p>

            <a
              href={SCHWAB_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-ink text-background px-6 py-3 hover:bg-accent transition-colors text-sm tracking-wide group"
            >
              Continue to Charles Schwab
              <span
                className="ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            <p className="mt-12 text-muted-foreground text-xs leading-relaxed">
              Trouble signing in? Call Charles Schwab Alliance at
              1-800-515-2157, or{' '}
              <a
                href="/contact"
                className="text-accent hover:text-ink transition-colors"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
