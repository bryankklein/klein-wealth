'use client'

import {useActionState} from 'react'
import {submitContactForm, type ContactFormState} from './actions'

const initialContactState: ContactFormState = {status: 'idle'}

const topics = [
  'General inquiry',
  'Financial planning',
  'Investment management',
  'Retirement planning',
  'Becoming a client',
]

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  )

  if (state.status === 'success') {
    return (
      <div className="max-w-xl py-4">
        <p className="font-serif font-light text-2xl lg:text-3xl text-ink leading-[1.2] tracking-[0.01em] mb-4">
          Thank you.
        </p>
        <p className="text-foreground/80 leading-relaxed text-[15px]">
          {state.message ||
            "We'll be in touch within a few business days."}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-8 max-w-xl" noValidate>
      {/* Honeypot — hidden from real users; bots tend to fill every field. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <Field
        label="Name"
        name="name"
        required
        error={state.errors?.name}
      />

      <Field
        label="Email"
        name="email"
        type="email"
        required
        error={state.errors?.email}
      />

      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
      />

      <div>
        <label
          htmlFor="topic"
          className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
        >
          Topic *
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className="w-full bg-transparent border-b border-border focus:border-accent focus:outline-none py-2 text-foreground text-[15px]"
        >
          <option value="" disabled>
            Choose one
          </option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {state.errors?.topic && <ErrorText>{state.errors.topic}</ErrorText>}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-transparent border-b border-border focus:border-accent focus:outline-none py-2 text-foreground text-[15px] resize-none"
        />
        {state.errors?.message && (
          <ErrorText>{state.errors.message}</ErrorText>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center text-accent hover:text-ink transition-colors text-sm tracking-wide group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending…' : 'Send message'}
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
      >
        {label}
        {required && ' *'}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={
          name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'name' ? 'name' : undefined
        }
        className="w-full bg-transparent border-b border-border focus:border-accent focus:outline-none py-2 text-foreground text-[15px]"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  )
}

function ErrorText({children}: {children: React.ReactNode}) {
  return <p className="text-xs text-red-700 mt-1">{children}</p>
}
