'use server'

import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Resend's onboarding sender can only deliver to the account owner's inbox.
// Phase 10: verify klein-wealth.com in Resend and swap this to bryan@klein-wealth.com.
const INBOX = 'bryankklein@gmail.com'
const FROM = 'Klein Wealth Management <onboarding@resend.dev>'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<
    Record<'name' | 'email' | 'topic' | 'message', string>
  >
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot — if a bot filled this hidden field, pretend success and drop the submission.
  const honeypot = formData.get('company')
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return {status: 'success', message: "Thanks — we'll be in touch soon."}
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const topic = String(formData.get('topic') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: NonNullable<ContactFormState['errors']> = {}
  if (!name) errors.name = 'Required'
  if (!email) errors.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Enter a valid email address'
  if (!topic) errors.topic = 'Please choose a topic'
  if (!message) errors.message = 'Required'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      errors,
      message: 'Please correct the highlighted fields.',
    }
  }

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: INBOX,
      replyTo: email,
      subject: `Contact form — ${topic} — ${name}`,
      html: buildEmailHtml({name, email, phone, topic, message}),
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return {
        status: 'error',
        message: `Something went wrong sending your message. Please email ${INBOX} directly.`,
      }
    }

    return {status: 'success', message: "Thanks — we'll be in touch soon."}
  } catch (e) {
    console.error('Contact form error:', e)
    return {
      status: 'error',
      message: `Something went wrong sending your message. Please email ${INBOX} directly.`,
    }
  }
}

function buildEmailHtml({
  name,
  email,
  phone,
  topic,
  message,
}: {
  name: string
  email: string
  phone: string
  topic: string
  message: string
}) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; color: #222;">
      <h2 style="font-weight: 400; margin-bottom: 16px;">New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a></p>
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeAttr(s: string) {
  return escapeHtml(s)
}
