import type {Metadata} from 'next'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
import {ContactForm} from './contact-form'

export const metadata: Metadata = {
  title: 'Contact — Klein Wealth Management',
  description:
    'Tell us about your situation and what you are trying to figure out. We will be in touch within a few business days.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageIntro />
        <FormSection />
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
            Contact
          </p>
          <h1 className="font-serif font-light text-4xl lg:text-5xl text-ink leading-[1.15] tracking-[0.01em] mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-foreground/80 leading-relaxed text-[15px]">
            Tell us about your situation and what you are trying to figure
            out. We will be in touch within a few business days to schedule a
            conversation.
          </p>
        </div>
      </div>
    </section>
  )
}

function FormSection() {
  return (
    <section className="py-10 lg:py-14 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContactForm />
      </div>
    </section>
  )
}
